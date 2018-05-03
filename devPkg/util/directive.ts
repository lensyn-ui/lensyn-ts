import { VNodeDirective } from "vue";

enum POSITION {
    TOP,
    RIGHT,
    BOTTOM,
    LEFT
}

interface ITooltipSize {
    targetWidth: number;
    targetHeight: number;
    targetPosition: ClientRect;
    tooltipHeight: number;
    tooltipWidth: number;
    arrowHeight: number;
}

class Tooltip {
    private targetElement: HTMLElement;
    private containerElement: HTMLElement;
    private contentElement: HTMLElement;
    private msgElement: HTMLElement;
    private content: string;
    private tooltipPosition: POSITION;
    private isInit: boolean = false;
    private arrowBorderWidth: number;

    constructor(el: HTMLElement, binding: VNodeDirective) {
        this.targetElement = el;
        this.content = binding.value;
        this.tooltipPosition = this.getTooltipPositionByModifiers(binding.modifiers);
        this.bindEventListener();
    }

    public show(): void {
        if (!this.isInit) {
            this.init();
            this.isInit = true;
            this.setContent(this.content);
        }

        this.containerElement.setAttribute("class", "tooltip show");
        setTimeout(() => {
            this.updateTooltipPosition();
        }, 0);
    }

    public hide(): void {
        if (this.containerElement) {
            this.containerElement.setAttribute("class", "tooltip");
        }
    }

    public setContent(msg: string): void {
        if (this.isInit) {
            this.msgElement.innerHTML = msg;
        } else {
            this.content = msg;
        }
    }

    public destroy(): void {
        this.targetElement.removeEventListener("mouseouver", this.onMouseOver);
        this.targetElement.removeEventListener("mouseout", this.onMouseOut);

        if (this.containerElement) {
            document.body.removeChild(this.containerElement);
        }
    }

    private getTooltipPositionByModifiers(modifiers: {[key: string]: boolean}): POSITION {
        if (modifiers.left) {
            return POSITION.LEFT;
        } else if (modifiers.right) {
            return POSITION.RIGHT;
        } else if (modifiers.bottom) {
            return POSITION.BOTTOM;
        } else {
            return POSITION.TOP;
        }
    }

    private init(): void {
        let container: HTMLElement = document.createElement("div"),
            content: HTMLElement = document.createElement("div"),
            msg: HTMLElement = document.createElement("div");

        container.setAttribute("class", "tooltip");
        content.setAttribute("class", "tooltip-content");
        msg.setAttribute("class", "msg");

        container.appendChild(content);
        content.appendChild(msg);

        this.containerElement = container;
        this.contentElement = content;
        this.msgElement = msg;

        document.body.appendChild(this.containerElement);
    }

    private bindEventListener(): void {
        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);

        this.targetElement.addEventListener("mouseover", this.onMouseOver);
        this.targetElement.addEventListener("mouseout", this.onMouseOut);
    }

    private onMouseOver(): void {
        this.show();
    }

    private onMouseOut(): void {
        this.hide();
    }

    private getArrowBorderWidth(): number {
        if (typeof this.arrowBorderWidth === "undefined") {
            let widthStr: string = getComputedStyle(this.contentElement, "before").getPropertyValue("border-width");
            this.arrowBorderWidth = parseFloat(widthStr);
        }
        return this.arrowBorderWidth;
    }

    private getTooltipSizeInfo(): ITooltipSize {
        let targetWidth: number = this.targetElement.offsetWidth,
            targetHeight: number = this.targetElement.offsetHeight,
            targetPosition: ClientRect = this.targetElement.getBoundingClientRect(),
            tooltipHeight: number = this.containerElement.offsetHeight,
            tooltipWidth: number = this.containerElement.offsetWidth,
            arrowHeight: number = this.getArrowBorderWidth() * 2;

        return {
            targetWidth,
            targetHeight,
            targetPosition,
            tooltipHeight,
            tooltipWidth,
            arrowHeight
        };
    }

    /**
     * 判断是否有足够的空间在元素下方显示 tooltip
     * @param {ITooltipSize} size
     * @returns {boolean}
     */
    private isCanShowTooltipInBottom(size: ITooltipSize): boolean {
        return screen.availHeight > (size.targetPosition.bottom + size.arrowHeight + size.tooltipHeight);
    }

    /**
     * 在元素下方显示 tooltip
     */
    private showTooltipInBottom(): void {
        let size = this.getTooltipSizeInfo();

        this.containerElement.style.top = `${size.targetPosition.bottom + size.arrowHeight}px`;
        this.containerElement.style.left =
                `${size.targetPosition.left - size.tooltipWidth / 2 + size.targetWidth / 2}px`;
        this.containerElement.setAttribute("class", "tooltip show active bottom");
    }

    /**
     * 判断是否可以在上方显示 tooltip
     * @param {ITooltipSize} size
     */
    private isCanShowTooltipInTop(size: ITooltipSize): boolean {
        return size.targetPosition.top > (size.tooltipHeight + size.arrowHeight);
    }

    /**
     * 在元素上方显示 tooltip
     */
    private showTooltipInTop(): void {
        let size = this.getTooltipSizeInfo();

        this.containerElement.style.top =
                `${size.targetPosition.top - size.tooltipHeight - size.arrowHeight}px`;
        this.containerElement.style.left =
                `${size.targetPosition.left - size.tooltipWidth / 2 + size.targetWidth / 2}px`;
        this.containerElement.setAttribute("class", "tooltip show active top");
    }

    /**
     * 判断是否可以在左边显示 tooltip
     * @param {ITooltipSize} size
     * @returns {boolean}
     */
    private isCanShowTooltipInLeft(size: ITooltipSize): boolean {
        return size.targetPosition.left > (size.tooltipWidth + size.arrowHeight);
    }

    /**
     * 在元素左边显示 tooltip
     */
    private showTooltipInLeft() {
        let size = this.getTooltipSizeInfo();

        this.containerElement.style.top =
                `${size.targetPosition.top - size.tooltipHeight / 2 + size.targetHeight / 2}px`;
        this.containerElement.style.left =
                `${size.targetPosition.left - size.tooltipWidth - size.arrowHeight}px`;
        this.containerElement.setAttribute("class", "tooltip show active left");
    }

    /**
     * 判断是否可以在右边显示 tooltip
     * @param {ITooltipSize} size
     * @returns {boolean}
     */
    private isCanShowTooltipInRight(size: ITooltipSize) {
        return screen.availWidth > (size.targetPosition.right + size.tooltipWidth + size.arrowHeight);
    }

    /**
     * 在元素右边显示 tooltip
     */
    private showTooltipInRight() {
        let size = this.getTooltipSizeInfo();

        this.containerElement.style.top =
                `${size.targetPosition.top - size.tooltipHeight / 2 + size.targetHeight / 2}px`;
        this.containerElement.style.left =
                `${size.targetPosition.left + size.targetWidth + size.arrowHeight}px`;
        this.containerElement.setAttribute("class", "tooltip show active right");
    }


    private updateTooltipPosition(): void {
        let size = this.getTooltipSizeInfo();

        switch (this.tooltipPosition) {
            case POSITION.LEFT:
                if (this.isCanShowTooltipInLeft(size)) {
                    this.showTooltipInLeft();
                } else {
                    this.showTooltipInRight();
                }
                break;
            case POSITION.RIGHT:
                if (this.isCanShowTooltipInRight(size)) {
                    this.showTooltipInRight();
                } else {
                    this.showTooltipInLeft();
                }
                break;
            case POSITION.BOTTOM:
                if (this.isCanShowTooltipInBottom(size)) {
                    this.showTooltipInBottom();
                } else {
                    this.showTooltipInTop();
                }
                break;
            default:
                if (this.isCanShowTooltipInTop(size)) {
                    this.showTooltipInTop();
                } else {
                    this.showTooltipInBottom();
                }
                break;
        }
    }
}

const TooltipDirective =  {
    bind(el: any, binding: VNodeDirective): void {
        let tooltip: Tooltip = new Tooltip(el, binding);

        el._tooltip = tooltip;
    },

   componentUpdated(el: any, binding: VNodeDirective) {
     if (binding.oldValue !== binding.value) {
         el._tooltip.setContent(binding.value);
     }
   },

    unbind(el: any) {
        if (el._tooltip) {
            el._tooltip.destroy();
        }
    }
};

const Autofocus = {
    inserted(el: HTMLElement): void {
        el.focus();
    }
};


export {
    Autofocus,
    TooltipDirective
};