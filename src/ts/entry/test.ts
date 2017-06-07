import Modal from '../lib/Modal';
import '../../sass/entry/test.scss';
let backgroundImage = require('../../image/desert_back.png');

let buttons = document.getElementsByClassName('btn');

buttons[0].addEventListener('click', function () {
    let modal = new Modal();
    modal.alert('This is on line alert.');
});

buttons[1].addEventListener('click', async function () {
    let modal1 = new Modal();
    modal1.loadingAlert({duration:3000000, loadingText:'生成图片'});
    setTimeout(function () {
        modal1.loadingText = '正在上传';
    }, 3000);
    setTimeout(function () {
        modal1.loadingText = '上传成功';
    }, 6000);
    setTimeout(function () {
        modal1.close();
    }, 9000);
});

buttons[2].addEventListener('click', function () {
    let m = new Modal();
    m.alert('This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.This is a very long text, it will contain two or more line.');
});
buttons[3].addEventListener('click', function () {
    let m = new Modal();
    m.titleAlert('this is title', 'This is content. For alert looking more pretty, I suggest this content be two or more line.');
});
buttons[4].addEventListener('click', function () {
    let m = new Modal({
        backgroundImage:backgroundImage
    });
    m.alert('购买主题、购买字体、设置铃声后才能获得领奖机会哦～', '好哒');
});