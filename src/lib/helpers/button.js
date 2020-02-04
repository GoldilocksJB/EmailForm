import RandomEmail from './randomEmail.js';

export default class Button {
    generate(text, action) {
        let button = document.createElement('button');
        button.setAttribute('class', 'clickButton');
        button.innerHTML = text;

        let newEmail = new RandomEmail();
        button.onclick = () => action(newEmail.generate());

        return button;
    }
}