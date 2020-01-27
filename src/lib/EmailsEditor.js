import FormEmail from './formEmail.js';

export class EmailsEditor {

    constructor(rootElem) {
        this.root = rootElem;
    }

    /**
     * Initializating new emails editor form
     * @param {HTMLNode} rootContainer - div container with id='emails-editor'
     */
    initEmailsEditor() {
        FormEmail.generate(this.root);
    }

    /**
     * Subscribe on emails list changes
     * @param {function} callback - callback-method
     */
    subscribeEmailsChanges(callback) {
        FormEmail.defineListener(callback);
    };

    /**
     * Get emails list
     * @returns {array} - array of string emails
     */
    getEmailsList() {
        return FormEmail.emails;
    };

    /**
     * Set new emails list
     * @param {string} email - string with email's value
     * @param {object} email - or object with email's value
     */
    setEmailsList(email) {
        FormEmail.setNewEmailList(email);
    };
}