# Emails editor

[GitHub page](https://goldilocksjb.github.io/EmailForm/)

Emails editor library represents the form that helps users to manage with entered email addresses.

## Usage:
To use library in your project you need to create *div* container for the form and import EmailsEditor like this (in HTML)
```html
<div id="emails-editor" style="width:540px;height:300px;"></div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            let elem = document.getElementById('emails-editor');
            let instance = new EmailsEditor(elem);
            instance.initEmailsEditor();
        })
    </script>
```
... or like this (in your .js file)
```javascript
import EmailsEditor from 'emails-editor';

let elem = document.getElementById('emails-editor');
let emailForm = new EmailsEditor(elem);
emailForm.initEmailsEditor();
```

## Run build version:
```
$ npm i
$ npm run dev
```

## Form buttons
**Add email** - add a random valid email to the list;

**Get emails count** - show an alert with valid emails count.

## API:
- **initEmailsEditor()**

Initializing form of emails editor
```javascript
import EmailsEditor from 'emails-editor';

let elem = document.getElementById('emails-editor');
let emailForm = new EmailsEditor(elem);
emailForm.initEmailsEditor();
```

- **getEmailsList()**

Get list of emails
```javascript
import EmailsEditor from 'emails-editor';

let elem = document.getElementById('emails-editor');
let emailForm = new EmailsEditor(elem);
let emailsList = emailForm.getEmailsList();
```
emailsList will contain array with strings:
```
["lena4114@mail.ru", "galina2001@yandex.ru", "vova5@gmail.com"]
```

- **setEmailsList(arg)**

Set new emails list. Argument - string or array of string.
```javascript
import EmailsEditor from 'emails-editor';

let elem = document.getElementById('emails-editor');
let emailForm = new EmailsEditor(elem);
emailForm.setEmailsList('lena4114@mail.ru, galina2001@yandex.ru, vova5@gmail.com');
```

- **subscribeEmailsChanges(arg)**


Subscribe for changes of emails list. Argument - function.
```javascript
import EmailsEditor from 'emails-editor';

let elem = document.getElementById('emails-editor');
let emailForm = new EmailsEditor(elem);
emailForm.subscribeEmailsChanges(() => console.log('List of emails has changed'));
```