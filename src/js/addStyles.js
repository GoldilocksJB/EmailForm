const addStyle = (root) => {
    const style = document.createElement('style');

    style.textContent = `
        @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

        .inputCorrect {
            width: calc(100% - 13px);
            position: absolute;
            right: 6px;
            top: 12px;
            width: 10px;
            height: 10px;
            background: 0 0;
            transform: rotate(45deg);
            cursor: pointer;
        }
        .inputCorrect::after {
            position: absolute;
            content: '';
            width: 9px;
            height: 1px;
            margin-left: -4px;
            background: black;
        }
        .inputCorrect::before {
            position: absolute;
            content: '';
            width: 1px;
            height: 9px;
            margin-top: -4px;
            background: black;
        }
        .inputIncorrect {
            position: absolute;
            right: -13px;
            top: 12px;
            width: 10px;
            height: 10px;
            background: 0 0;
            transform: rotate(45deg);
            cursor: pointer;
        }
        .inputIncorrect::after {
            position: absolute;
            content: '';
            width: 9px;
            height: 1px;
            margin-left: -4px;
            background: #C3C2CF;
        }
        .inputIncorrect::before {
            position: absolute;
            content: '';
            width: 1px;
            height: 9px;
            margin-top: -4px;
            background: #C3C2CF;
        }
        .formContainer {
            height: 300px;
            width: 540px;
            background: #FFFFFF;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            font-family: 'Open Sans', sans-serif;
        }
        .upperContainer {
            height: 204px;
            width: 100%;
            background: #F8F8F7;
            border-radius: 8px 8px 0 0;
        }
        .header {
            font-size: 20px;
            line-height: 27px;
            margin-bottom: 24px;
            width: 100%;
            position: absolute;
            top: 32px;
            left: 50px;
        }
        .inputContainer {
            overflow: auto;
            width: 440px;
            height: 96px;
            border: 1px solid #C3C2CF;
            box-sizing: border-box;
            border-radius: 4px;
            background: #FFFFFF;
            font-family: Open Sans;
            font-size: 14px;
            line-height: 24px;
            padding: 8px 7px;
            position: relative;
            top: 84px;
            left: 50px;
        }
        input {
            -webkit-appearance: none;
        }
        input::placeholder {
            color: #C3C2CF;
            font-family: Open Sans;
            font-size: 14px;
            line-height: 24px;
        }
        .lowerContainer {
            background-color: #FFFFFF;
            width: 540px;
            height: 96px;
            border-radius: 0 0 8px 8px;
            padding: 24px 50px;
        }
        .addEmailButton {
            background: #4262FF;
            border-radius: 6px;
            width: 96px;
            height: 40px;
            display: inline-block;
            border: none;
            font-family: Open Sans;
            font-size: 14px;
            line-height: 24px;
            color: #FFFFFF;
            margin-right: 16px;
            outline: none;
        }
        .addEmailButton:hover {
            background-color: #455bed;
            cursor: pointer;
        }
        .countEmailButton {
            background: #4262FF;
            border-radius: 6px;
            width: 142px;
            height: 40px;
            display: inline-block;
            border: none;
            font-family: Open Sans;
            font-size: 14px;
            line-height: 24px;
            color: #FFFFFF;
            outline: none;
        }
        .countEmailButton:hover {
            background-color: #455bed;
            cursor: pointer;
        }
        .emailLabel {
            background: rgba(102, 153, 255, 0.2);
            border-radius: 100px;
            position: absolute;
            left: 0;
        }
        .emailInput {
            width: inherit;
            border: 0;
            appearance: none;
            outline: none;
            font-family: Open Sans;
            font-size: 14px;
            line-height: 24px;
        }
    `;
    root.appendChild(style);
}
export default addStyle;