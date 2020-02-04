export default class Cross {
    constructor() {
        this.parentInput = null;
    }
    deleteEmail(parentInput) {
        parentInput.parentElement.removeChild(parentInput);
    }
    generate(element, isValid, callbackDelete) {
        this.parentInput = element.parentElement;

        let crossElement = document.createElement('span');
        crossElement.setAttribute('class', isValid ? 'closeValid' : 'closeInvalid' );

        crossElement.addEventListener('click', () => {
            this.deleteEmail(element.parentElement);
            callbackDelete(element.value);
        });
        element.parentElement.append(crossElement);
    }
}