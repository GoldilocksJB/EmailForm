import Cross from './cross.js';
import ButtonsContainer from './buttonsContainer/buttonsContainer.js';

const REG_EXP = /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,64}/i;

const FormEmail = {
    emails: [],
    currentEmptyEmail: null,
    root: null,
    listener: () => {},
    setEmailsList: (newValue) => {
        FormEmail.emails = newValue;
        FormEmail.listener(newValue);
    },
    /**
     * set callback on emails list changes
     * @param {function} callback - callback-method
    */
    defineListener: (listener) => {
        FormEmail.listener = listener;
    },
    /**
     * generate new input
     * @param {string} value - input value
     * @param {object} root - DOM element (input container)
    */
    generateNewInput: (value, root) => {
        if (!FormEmail.root) FormEmail.root = root;
    
        let newEmail;
        if (!FormEmail.currentEmptyEmail) {
            newEmail = renderNewEmailContainer(newEmail);
            FormEmail.root.append(newEmail.parentNode);
            FormEmail.currentEmptyEmail = newEmail;
        } else {
            newEmail = FormEmail.currentEmptyEmail;
        }
    
        if (value) {
            newEmail.value = value;
            FormEmail.checkEmailValue(newEmail);
            return;
        }
        newEmail.addEventListener('keypress', (event) => handleKeyPress(event, newEmail));
        newEmail.addEventListener('blur', (event) => handleBlur(event));
        newEmail.addEventListener('paste', (event) => handlePaste(event));
    },
    /**
     * email validation
     * @param {object} element - DOM element (input)
    */
    checkEmailValue: (element) => {
        let valueStr = element.value.replace(/\s/g, '');
        //check if value contain several emails
        if (valueStr.indexOf(',') !== -1) {
            let emailsArr = valueStr.split(',');
            //the first value will fill current input
            element.value = emailsArr[0];
            FormEmail.createEmail(element);
            //and the others need new inputs - delete first value
            emailsArr.shift().map(email => FormEmail.generateNewInput(email, FormEmail.root));
            return;
        } else {
            element.value = valueStr;
            FormEmail.createEmail(element);
        }
        FormEmail.generateNewInput(null, FormEmail.root);
    },
    /**
     * create single email (correct or not)
     * @param {object} element - DOM element (input)
    */
    createEmail: (element) => {
        let isValid = REG_EXP.test(element.value) ? true : false;
        let fakeInput = document.createElement('span');
        fakeInput.innerHTML = element.value;

        element.parentNode.appendChild(fakeInput);
        element.style.display = 'none';
        if (isValid) {
            let newEmailsList = FormEmail.emails;
            newEmailsList.push(element.value)
            FormEmail.setEmailsList(newEmailsList);
            //to check if emails list changes

            element.parentNode.setAttribute('class', 'inputValid');
            fakeInput.setAttribute('class', 'fakeInputValid');
        } else {
            element.parentNode.setAttribute('class', 'inputInvalid');
            fakeInput.setAttribute('class', 'fakeInputInvalid');
        }
        Cross.generate(element, isValid, callbackDelete);

        FormEmail.currentEmptyEmail = null;
    },
    /**
     * set main HTML-structure of email editor
     * @param {object} root - DOM element (form container)
    */
    generate: (root) => {
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
        FormEmail.generateNewInput(null, inputContainer);
    
        let buttonsContainer = ButtonsContainer.generateButtonContainer({emails: FormEmail.emails, newInputCallback: FormEmail.generateNewInput});
        formContainer.append(buttonsContainer);
    
        root.appendChild(formContainer);
    },
    /**
     * set firing callback in setter
     * @param {function} callback - callback
    */
    subscribeEmailChanges: (callback) => {
        FormEmail.defineListener(callback);
    },
    setNewEmailList: (value) => {
        if (value.isArray()) {
            let emailsString = value.join(',');
            FormEmail.currentEmptyEmail = emailsString;
            FormEmail.checkEmailValue(FormEmail.currentEmptyEmail);
            FormEmail.setEmailsList(value);
        } else {
            FormEmail.currentEmptyEmail = value;
            FormEmail.checkEmailValue(FormEmail.currentEmptyEmail);
            let emailArr = value.split(',');
            FormEmail.setEmailsList(emailArr);
        }
    }
};

//to delete emails from attribute emails
const callbackDelete = (value) => {
    let emailToDelete = FormEmail.emails.indexOf(value);
    FormEmail.emails.splice(emailToDelete, 1);
    FormEmail.setEmailsList(FormEmail.emails);
}

const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.keyCode === 44) {
        FormEmail.checkEmailValue(event.target);
    }
};
const handleBlur = (event) => {
    if (event.target.value.length > 0) {
        //there is a bug: pressing ENTER or COMMA firing both keypress and blur events
        //to avoid it, check if created input has style display:none
        if (event.target.style.display === 'none') return;
        FormEmail.checkEmailValue(event.target)
    };
};
const handlePaste = (event) => {
    let data = event.clipboardData.getData('text');
    if (data.length > 0) {
        if (event.target.style.display === 'none') return;
        event.target.value = data
        FormEmail.checkEmailValue(event.target);
    }
}

//set HTML-structure of nex input
const renderNewEmailContainer = (newEmail) => {
    let container = document.createElement('span');
    container.setAttribute('class', 'mainInputContainer');

    newEmail = document.createElement('input');
    newEmail.setAttribute('class', 'mainInput');
    newEmail.setAttribute('type', 'text');
    newEmail.setAttribute('placeholder', 'add more people...');
    
    container.append(newEmail);
    return newEmail;
}

export default FormEmail;