const Button =  {
    /**
     * create button
     * @param {string} text - button text
     * @param {function} element - onclick function
     * @returns {object} - DOM element (button)
    */
    generateButton: (text, action) => {
        let button = document.createElement('button');
        button.setAttribute('class','clickButton');
        button.innerHTML = text;
        button.onclick = action;
        return button;
    }
}

export default Button;