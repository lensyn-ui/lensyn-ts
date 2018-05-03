import DrawInterface from "./DrawInterface";
import RectangleList from "./RectangleList";

class RectangleListGroup implements DrawInterface {
    private rectangleList: RectangleList;

    constructor() {
        this.rectangleList = new RectangleList();
    }

    public draw(context: CanvasRenderingContext2D, data: any) {
        let initX = data.x,
            initY = data.y,
            itemHorizontalspace = data.listHorizontalSpace ? data.listHorizontalSpace : 18,
            datas = data.datas;

        for (let i = 0, j = datas.length; i < j; ++i) {
            this.rectangleList.draw(context, {
                ...datas[i],
                x: initX + i * (itemHorizontalspace + data.width),
                y: initY,
                headerHeight: data.headerHeight,
                width: data.width,
                itemHeight: data.itemHeight,
                itemVerticalSpace: data.itemVerticalSpace,
                itemHorizontalSpace: data.itemHorizontalSpace,
                borderColor: data.borderColor,
                headerBg: data.headerBg,
                itemBorderColor: data.itemBorderColor,
                itemFontStyle: data.itemFontStyle
            });
        }
    }
}

export default RectangleListGroup;