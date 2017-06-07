import BUTTON_OPTIONS from "../interface/BUTTON_OPTIONS";
import MODAL_OPTIONS from "../interface/MODAL_OPTION";
export default class Modal{
    private animationDuration:number;
    private wrapper:HTMLElement;
    private backdrop:HTMLElement;
    private contentBox:HTMLElement;
    private backdropColor:string;
    private isShowing:boolean;
    private baseIndex:number;
    private contentBoxTransformStart: string;
    private sizeRatio:number;
    private contentBoxWidth:number;
    constructor(options?:MODAL_OPTIONS){
        //setting options
        options = options||{};
        this.animationDuration = options.animationDuration || 300;
        this.backdropColor = options.backdropColor || '#ffffff';
        this.baseIndex = options.baseIndex || 200;
        this.contentBoxTransformStart = 'translate3d(-50%, -50%, 0) scale(1.4)';
        this.sizeRatio = options.sizeRatio || ((document.documentElement.clientWidth / 360)*10) ;
        this.contentBoxWidth = options.contentBoxWith;
        //create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.style.position = 'fixed';
        this.wrapper.style.top = '0';
        this.wrapper.style.right = '0';
        this.wrapper.style.left = '0';
        this.wrapper.style.bottom = '0';
        this.wrapper.style.zIndex = this.baseIndex + '';
        this.wrapper.style.fontWeight = '500';
        document.body.appendChild(this.wrapper);
        //create backdrop
        this.backdrop = document.createElement('div');
        this.backdrop.style.position = 'absolute';
        this.backdrop.style.zIndex = this.baseIndex + 1 + '';
        this.backdrop.style.top = '0';
        this.backdrop.style.right = '0';
        this.backdrop.style.bottom = '0';
        this.backdrop.style.left = '0';
        this.backdrop.style.opacity = '0';
        this.backdrop.style.backgroundColor = 'rgba(0,0,0,0.5)';
        this.backdrop.style.transitionDuration = this.animationDuration + 'ms';
        this.backdrop.style.transitionProperty = 'opacity';
        this.backdrop.addEventListener('touchmove', function (event) {
            console.log('move');
            event.preventDefault();
        }, false);
        this.wrapper.appendChild(this.backdrop);
        //create content box
        this.contentBox = document.createElement('div');
        this.contentBox.style.position = 'absolute';
        this.contentBox.style.top = '50%';
        this.contentBox.style.left = '50%';
        this.contentBox.style.zIndex = this.baseIndex + 2 + '';
        this.contentBox.style.opacity = '0';
        this.contentBox.style.transform = this.contentBoxTransformStart;
        this.contentBox.style.transitionProperty = 'opacity transform';
        this.contentBox.style.transitionDuration = this.animationDuration + 'ms';
        this.contentBox.style.perspective = '1000';
        this.contentBox.style.backgroundColor = this.backdropColor;
        this.contentBox.style.borderRadius = 0.333*this.sizeRatio + 'px';
        if(options.backgroundImage){
            this.contentBox.style.backgroundImage = 'url("'+options.backgroundImage+'")';
            this.contentBox.style.backgroundPosition = options.backgroundPosition || 'bottom';
            this.contentBox.style.backgroundRepeat = options.backgroundRepeat || 'no-repeat';
        }
        this.wrapper.appendChild(this.contentBox);
    }
    createButtons(options?:BUTTON_OPTIONS){
        let self = this;
        let buttonsBox = document.createElement('div');
        buttonsBox.style.textAlign = 'center';
        buttonsBox.style.paddingTop = 1.2*this.sizeRatio + 'px';
        buttonsBox.style.paddingBottom = 1.2*this.sizeRatio + 'px';
        buttonsBox.style.paddingLeft = 1.2*this.sizeRatio + 'px';
        buttonsBox.style.paddingRight = 1.2*this.sizeRatio + 'px';
        let createBtn = function () {
            let btn = document.createElement('div');
            btn.style.textAlign = 'center';
            btn.style.display = 'inline-block';
            btn.style.color = '#198ded';
            btn.style.fontSize = 1.6*self.sizeRatio + 'px';
            btn.style.paddingTop = 1.2*self.sizeRatio + 'px';
            btn.style.paddingBottom = 1.2*self.sizeRatio + 'px';
            return btn;
        };
        let defaultButton = createBtn();
        defaultButton.innerText = options.defaultButtonText || '确定';
        buttonsBox.appendChild(defaultButton);
        if(options.subButtonText){
            let subButton = createBtn();
            subButton.innerText = options.subButtonText||'取消';
            subButton.style.width = '50%';
            buttonsBox.appendChild(subButton);
            subButton.addEventListener('click', function () {
                if(options.subButtonCallback){
                    options.subButtonCallback();
                }else{
                    self.close();
                }
            });
            defaultButton.style.width = '50%';
            defaultButton.addEventListener('click', function () {
                if(options.defaultButtonCallback){
                    options.defaultButtonCallback();
                }else{
                    throw new Error('Please provide default button callback');
                }
            });
        }else{
            defaultButton.style.width = '100%';
            defaultButton.addEventListener('click', function () {
                if(options.defaultButtonCallback){
                    options.defaultButtonCallback();
                }else{
                    self.close();
                }
            });
        }
        return buttonsBox;
    }
    alert(content:string, buttonText?:string){
        if(this.isShowing){return;}
        let self = this;
        this.contentBoxWidth = this.contentBoxWidth || 31.2;
        this.contentBox.style.width = this.contentBoxWidth * this.sizeRatio + 'px';
        let alertContent = document.createElement('div');
        alertContent.innerText = content;
        alertContent.style.fontSize = 1.6*this.sizeRatio + 'px';
        alertContent.style.color = '#000000';
        alertContent.style.textAlign = 'center';
        alertContent.style.padding = 2*self.sizeRatio + 'px ' + 2.4 * self.sizeRatio + 'px 0';
        alertContent.style.marginBottom = -0.2*self.sizeRatio + 'px';
        alertContent.style.lineHeight = 1.8*self.sizeRatio + 'px';
        this.contentBox.appendChild(alertContent);
        this.contentBox.appendChild(self.createButtons({defaultButtonText:buttonText}));
        let size = alertContent.getBoundingClientRect();
        if(size.height > 5*this.sizeRatio){
            // multi line
            alertContent.style.textAlign = 'left';
        }
        //when everything done, show the box
        self.show();
    }
    titleAlert(titleText:string, contentText:string, buttonText?:string,contentHeight?:number|string){
        if(this.isShowing){return;}
        let self = this;
        this.contentBoxWidth = this.contentBoxWidth || 31.2;
        this.contentBox.style.width = this.contentBoxWidth * this.sizeRatio + 'px';
        let box = document.createElement('div');
        box.style.paddingTop = 2.4*self.sizeRatio + 'px';
        box.style.paddingLeft = 2.4*self.sizeRatio + 'px';
        box.style.paddingRight = 2.4*self.sizeRatio + 'px';
        let title = document.createElement('div');
        title.style.lineHeight = '1';
        title.style.fontSize = 1.4*self.sizeRatio + 'px';
        title.style.marginBottom = 0.4*self.sizeRatio + 'px';
        title.style.color = '#000000';
        title.innerText = titleText;
        box.appendChild(title);
        let content = document.createElement('div');
        content.style.fontSize = 1.4*self.sizeRatio + 'px';
        content.style.color = 'rgba(0,0,0,0.4)';
        content.style.lineHeight = 1.8*self.sizeRatio + 'px';
        if(contentHeight){
            if(typeof contentHeight === 'string'){
                content.style.height = contentHeight;
            }else if(typeof contentHeight === 'number'){
                content.style.height = contentHeight + 'px';
            }else{
                throw new Error('Please supply valid type value.')
            }
        }else{
            content.style.height = 'auto';
        }
        content.style.overflowY = 'scroll';
        content.innerText = contentText;
        box.appendChild(content);
        this.contentBox.appendChild(box);
        this.contentBox.appendChild(self.createButtons({defaultButtonText:buttonText}));
        this.show();
    }
    private _loadingText:HTMLElement;
    set loadingText(text:string){
        this._loadingText.textContent = text;
    }
    loadingAlert(args:{
        duration?:number,
        finishCallback?:()=>any,
        loadingText?:string}){
        if(this.isShowing){return;}
        args = args || {};
        let self = this;
        self.contentBox.style.width = '100%';
        self.contentBox.style.textAlign = 'center';
        self.contentBoxTransformStart = 'translate3d(-50%, -50%, 0) scale(1)';
        self.contentBox.style.backgroundColor = '';
        let nameSpace = 'http://www.w3.org/2000/svg';
        let loading = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        loading.setAttributeNS(null, 'viewBox', '0 0 32 32');
        loading.setAttributeNS(null, 'width', '32');
        loading.setAttributeNS(null, 'height', '32');
        loading.setAttributeNS(null, 'fill', 'white');
        loading.setAttributeNS(null, 'transform', 'scale(2)');
        loading.style.transform = 'scale('+0.08*self.sizeRatio+')';
        let path1 = document.createElementNS(nameSpace, 'path');
        path1.setAttributeNS(null, 'opacity', '0.25');
        path1.setAttributeNS(null, 'd', 'M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4');
        loading.appendChild(path1);
        let path2 = document.createElementNS(nameSpace, 'path');
        path2.setAttributeNS(null, 'd', 'M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z');
        let animate = document.createElementNS(nameSpace, 'animateTransform');
        animate.setAttributeNS(null, 'attributeName', 'transform');
        animate.setAttributeNS(null, 'type', 'rotate');
        animate.setAttributeNS(null, 'from', '0 16 16');
        animate.setAttributeNS(null, 'to', '360 16 16');
        animate.setAttributeNS(null, 'dur', '0.8s');
        animate.setAttributeNS(null, 'repeatCount', 'indefinite');
        path2.appendChild(animate);
        loading.appendChild(path2);
        self.contentBox.appendChild(loading);
        this._loadingText = document.createElement('div');
        this._loadingText.style.marginTop = 1.5 * this.sizeRatio + 'px';
        this._loadingText.style.fontSize = 1.4*this.sizeRatio + 'px';
        this._loadingText.style.color = '#ffffff';
        this._loadingText.style.fontWeight = '500';
        self.contentBox.appendChild(this._loadingText);
        args.loadingText = args.loadingText || '';
        this.loadingText = args.loadingText;
        self.show({hasShadow:false});
        if(args.duration){
            setTimeout(()=>{
                self.close();
                args.finishCallback && args.finishCallback();
            }, args.duration);
        }
    }
    static disabledBodyScrolling(){
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
    }
    static enabledBodyScrolling(){
        document.body.style.height = 'auto';
        document.body.style.overflow = '';
    }
    show(args?:{hasShadow?:boolean}){
        args = args || {};
        args.hasShadow = args.hasShadow === undefined;
        let self = this;
        window.requestAnimationFrame(function () {
            Modal.disabledBodyScrolling();
            self.backdrop.style.opacity = '1';
            self.contentBox.style.transform = 'translate3d(-50%, -50%, 0) scale(1)';
            self.contentBox.style.opacity = '1';
            self.isShowing = true;
        });
        setTimeout(function () {
            args.hasShadow && (self.contentBox.style.boxShadow = '0 0 ' + 0.6666*self.sizeRatio + 'px rgba(0,0,0,0.2)');
        }, this.animationDuration);
    }
    close(){
        let self = this;
        window.requestAnimationFrame(function () {
            Modal.enabledBodyScrolling();
            self.contentBox.style.transform = self.contentBoxTransformStart;
            self.contentBox.style.boxShadow = '';
            self.contentBox.style.opacity = '0';
            self.backdrop.style.opacity = '0';
        });
        setTimeout(function () {
            window.requestAnimationFrame(function () {
                self.wrapper.parentNode.removeChild(self.wrapper);
                self = undefined;
            });
        }, self.animationDuration);
    }
}