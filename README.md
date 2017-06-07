Modal windows

## Usage

### Install
Simply use npm installation.
```bash
npm install lc-modal --save
```

### Import
Suggest using ES6 syntax.
```javascript
//JavaScript
import Modal from '@flyme/modal';
```

```typescript
//TypeScript
import Modal = require('@flyme/modal');
```

## API
You should new a modal instance before showing a modal. You can open a new modal even another modal exist.

```javascript
// all arguments are optional.
let args = {
    backgroundImage: 'string', //modal background image. default: ''
    animationDuration: 'number', //if set it zero, whole modal will not have animation. default: 300
    backdropColor: 'string', // example: #ffffff, rgba(0,0,0,0.1). default: #ffffff
    backgroundPosition: 'string', //default: bottom
    backgroundRepeat: 'string', //default: no-repeat
    baseIndex: 'number', // if your modal is overlaid by another dom, you can set it bigger. default: 200
    sizeRatio: 'number', // modal size ratio
    contentBoxWith: 'number', // modal size is sizeRatio * contentBoxWidth
};
let modal = new Modal(args);
```

### alert
A simple text alert for noticing user something important. If text only one line, the text will align center otherwise it will align left.
```javascript
let modal = new Modal();
modal.alert('This is one line content');
```

### titleAlert
A alert with title.
```javascript
let modal = new Modal();
modal.titleAlert('this is title.', 'This is content. For alert looking more pretty, I suggest this content be two or more line.');
```

### loading
A loading modal for telling user page was loading something.

```javascript
let modal = new Modal();
modal.loadingAlert({
    loadingText: 'Loading image',
});
setTimeout(function() {
  modal.loadingText = 'Uploading image';
}, 1000);
setTimeout(function() {
  modal.close();
  let alertModal = new Modal();
  alertModal.alert('loading success');
}, 3000);
```