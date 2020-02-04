import Cross from './helpers/cross.js';
import Button from './helpers/button.js';

const REG_EXP = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,64}/i;

export default class FormEmail {
    constructor() {
        this.emails = [];
        this.currentEmptyEmail = null;
        this.root = null;
    }
    listener() {};
    setEmailsList(newValue) {
        this.emails = newValue;
        this.listener(newValue);
    }
    
    getEmailsList() {
        return this.emails;
    }

    /**
     * set callback on emails list changes
     * @param {function} callback - callback-method
    */
    defineListener(listener) {
        this.listener = listener;
    }

    /**
     * generate new input
     * @param {string} value - input value
     * @param {object} root - DOM element (input container)
    */
    generateNewInput(value, root)  {
        if (!this.root) this.root = root;
        let newEmail;
        if (!this.currentEmptyEmail) {
            newEmail = this.renderNewEmailContainer(newEmail);
            this.root.append(newEmail.parentNode);
            this.currentEmptyEmail = newEmail;
        } else {
            newEmail = this.currentEmptyEmail;
        }
        if (value) {
            newEmail.value = value;
            this.checkEmailValue(newEmail);
            return;
        }
        newEmail.addEventListener('keypress', (event) => this.handleKeyPress(event, newEmail));
        newEmail.addEventListener('blur', (event) => this.handleBlur(event));
        newEmail.addEventListener('paste', (event) => this.handlePaste(event));
    }

    /**
     * email validation
     * @param {object} element - DOM element (input)
    */
    checkEmailValue(element) {
        let valueStr = element.value.replace(/\s/g, '');
        //check if value contain several emails
        if (valueStr.indexOf(',') !== -1) {
            let emailsArr = valueStr.split(',');
            //the first value will fill current input
            element.value = emailsArr[0];
            this.createEmail(element);
            //and the others need new inputs - delete first value
            emailsArr.shift();
            emailsArr.map(email => this.generateNewInput(email, this.root));
            return;
        } else {
            element.value = valueStr;
            this.createEmail(element);
        }
        this.generateNewInput(null, this.root);
    }

    /**
     * create single email (correct or not)
     * @param {object} element - DOM element (input)
    */
    createEmail(element) {
        let isValid = REG_EXP.test(element.value) ? true : false;
        let fakeInput = document.createElement('span');
        fakeInput.innerHTML = element.value;

        element.parentNode.appendChild(fakeInput);
        element.style.display = 'none';
        if (isValid) {
            element.parentNode.setAttribute('class', 'inputValid');
            fakeInput.setAttribute('class', 'fakeInputValid');
            this.checkValidEmails();
        } else {
            element.parentNode.setAttribute('class', 'inputInvalid');
            fakeInput.setAttribute('class', 'fakeInputInvalid');
        }
        let newCross = new Cross();
        newCross.generate(element, isValid, this.checkValidEmails.bind(this));

        this.currentEmptyEmail = null;
    }

    /**
     * set HTML-structure of new input
     * @param {object} newEmail - empty veriable
    */
    renderNewEmailContainer(newEmail) {
        let container = document.createElement('span');
        container.setAttribute('class', 'mainInputContainer');

        newEmail = document.createElement('input');
        newEmail.setAttribute('class', 'mainInput');
        newEmail.setAttribute('type', 'text');
        newEmail.setAttribute('placeholder', 'add more people...');
        
        container.append(newEmail);
        return newEmail;
    }

    /**
     * set main HTML-structure of email editor
     * @param {object} root - DOM element (form container)
    */
    generate(root) {
        let formContainer = document.createElement('div');
        formContainer.setAttribute('class','formContainer');
    
        let headerContainer = document.createElement('div');
        headerContainer.setAttribute('class','headerContainer');
        formContainer.append(headerContainer);
    
        let header = document.createElement('div');
        header.setAttribute('class', 'header');
        header.innerHTML = "Share <strong>Board name</strong> with others";
        headerContainer.append(header);
    
        let inputContainer = document.createElement('div');
        inputContainer.setAttribute('class', 'inputContainer');
        headerContainer.append(inputContainer);
    
        //create class with emails and generate first email input
        this.generateNewInput(null, inputContainer);

        let buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class','buttonsContainer');

        let buttonAdd = new Button().generate('Add email', this.generateNewInput.bind(this));
        buttonsContainer.append(buttonAdd);

        let buttonCount = new Button().generate('Get emails count', () => alert(`Valid emails: ${this.emails.length}`));
        buttonsContainer.append(buttonCount);

        formContainer.append(buttonsContainer);
        root.appendChild(formContainer);
    }

    /**
     * set firing callback in setter
     * @param {function} callback - callback
    */
    subscribeEmailChanges(callback) {
        this.defineListener(callback);
    }

    /**
     * search valid email fields in DOM and fill this.emails
    */
    checkValidEmails() {
        let validInputs = this.root.getElementsByClassName('inputValid');
        let validArr = Array.prototype.slice.call(validInputs);
        this.setEmailsList(validArr.map(item => item.innerText));
    }

    /**
     * remove all existing inputs and set new list
     * @param {string} value - email value (can be multiple)
     * @param {array} value - email value (can be multiple)
    */
    setNewEmailList(value) {
        let validInputs = this.root.getElementsByClassName('inputValid');
        let validArr = Array.prototype.slice.call(validInputs);
        let inValidInputs = this.root.getElementsByClassName('inputInvalid');
        let InValidArr = Array.prototype.slice.call(inValidInputs);

        [...validArr, ...InValidArr].map(item => this.root.removeChild(item));

        this.currentEmptyEmail.value = typeof value === 'string' ? value : value.join(',');
        this.checkEmailValue(this.currentEmptyEmail);
        this.checkValidEmails();
    }

    handleKeyPress(event) {
        if (event.keyCode === 13 || event.keyCode === 44) {
            this.checkEmailValue(event.target);
        }
    }

    handleBlur(event) {
        if (event.target.value.length > 0) {
            //there is a bug: pressing ENTER or COMMA firing both keypress and blur events
            //to avoid it, check if created input has style display:none
            if (event.target.style.display === 'none') return;
            this.checkEmailValue(event.target)
        }
    }

    handlePaste (event) {
        let data = event.clipboardData.getData('text');
        if (data.length > 0) {
            if (event.target.style.display === 'none') return;
            event.target.value = data
            this.checkEmailValue(event.target);
        }
    }
}