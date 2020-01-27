import Button from './button.js';
import RandomEmail from '../randomEmail.js';

const ButtonsContainer = {
    /**
     * create button container with buttons
     * @param {object} param - emails and callback for "Add email" button
     * @returns {object} - DOM element (button)
    */
    generateButtonContainer: (param) => {
        let buttonsContainer = document.createElement('div');
        buttonsContainer.setAttribute('class','buttonsContainer');

        let addEmailButton = Button.generateButton('Add email', () => param.newInputCallback(RandomEmail.generate()));
        buttonsContainer.append(addEmailButton);

        let countEmailButton = Button.generateButton('Get emails count', () => countValidEmails(param.emails));
        buttonsContainer.append(countEmailButton);

        return buttonsContainer;
    }
}

const countValidEmails = (emails) => {
    alert(`Valid emails: ${emails.length}`);
}
export default ButtonsContainer;