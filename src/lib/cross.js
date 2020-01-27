const Cross  = {
    deleteEmail: (parentInput) => {
        console.log('Cross.parentInput', parentInput)
        console.log('Cross.parentInput.parentElement', parentInput.parentElement)
        parentInput.parentElement.removeChild(parentInput);
    },
    generate: (element, isValid, callbackDelete) => {
        Cross.parentInput = element.parentElement;

        let crossElement = document.createElement('span');
        crossElement.setAttribute('class', isValid ? 'closeValid' : 'closeInvalid' );

        crossElement.addEventListener('click', () => {
            Cross.deleteEmail(element.parentElement);
            callbackDelete(element.value);
        });
        element.parentElement.append(crossElement);
    }
}

export default Cross;