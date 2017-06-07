import BUTTON_OPTIONS from "../interface/BUTTON_OPTIONS";
import MODAL_OPTIONS from "../interface/MODAL_OPTION";
export default class Modal {
    private animationDuration;
    private wrapper;
    private backdrop;
    private contentBox;
    private backdropColor;
    private isShowing;
    private baseIndex;
    private contentBoxTransformStart;
    private sizeRatio;
    private contentBoxWidth;
    constructor(options?: MODAL_OPTIONS);
    createButtons(options?: BUTTON_OPTIONS): HTMLDivElement;
    alert(content: string, buttonText?: string): void;
    titleAlert(titleText: string, contentText: string, buttonText?: string, contentHeight?: number | string): void;
    private _loadingText;
    loadingText: string;
    loadingAlert(args: {
        duration?: number;
        finishCallback?: () => any;
        loadingText?: string;
    }): void;
    static disabledBodyScrolling(): void;
    static enabledBodyScrolling(): void;
    show(args?: {
        hasShadow?: boolean;
    }): void;
    close(): void;
}
