import DrawInterface from "./DrawInterface";

import Rectangle from "./Rectangle";

class RectangleList implements DrawInterface {
    private rectangle: Rectangle;
    private context: CanvasRenderingContext2D;
    private data: any;

    constructor() {
        this.rectangle = new Rectangle();
    }

    public draw(context: CanvasRenderingContext2D, data: any) {
        this.context = context;
        this.data = data;

        this.drawBorder();
        this.drawHeader();
        this.drawContent();
    }

    private drawContent() {
        let data = this.data,
            children = this.data.children;

        for (let i = 1, j = children.length; i <= j; ++i) {
            let item = children[i - 1];

            let itemData = {
                type: "border-rectangle",
                x: data.x + data.itemHorizontalSpace,
                y: data.y + data.headerHeight + i * data.itemVerticalSpace + (i - 1) * data.itemHeight,
                width: data.width - 2 * data.itemHorizontalSpace,
                height: data.itemHeight,
                backgroundColor: data.itemBackgroundColor ? data.itemBackgroundColor : "#ffffff",
                borderColor: data.itemBorderColor ? data.itemBorderColor : "#dcdcdc",
                content: item.content,
                fontStyle: data.itemFontStyle
            };

            this.rectangle.draw(this.context, itemData);
        }
    }

    private drawBorder() {
       let height = this.calculateRectangleHeight(this.data);
       let borderSize = {
           type: "border-rectangle",
           height,
           x: this.data.x,
           y: this.data.y,
           width: this.data.width,
           borderColor: this.data.borderColor,
           backgroundColor: this.data.backgroundColor ? this.data.backgroundColor : "#ffffff"
       };
       this.rectangle.draw(this.context, borderSize);
    }

    private drawHeader() {
        let data: any = this.data;
        let headerData = {
            x: this.data.x,
            y: this.data.y,
            width: data.width,
            height: data.headerHeight,
            backgroundColor: data.headerBg,
            content: data.content,
            fontSize: data.headerFontSize
        };
        this.rectangle.draw(this.context, headerData);
    }

    private calculateRectangleHeight(data: any): number {
        return data.headerHeight + (data.children.length  + 1) * data.itemVerticalSpace +
            data.children.length * data.itemHeight;
    }
}

export default RectangleList;