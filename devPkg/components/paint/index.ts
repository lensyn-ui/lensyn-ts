import DrawInterface from "./DrawInterface";
import RectangleListGroup from "./RectangleListGroup";

class Paint {
    private context: CanvasRenderingContext2D | null = null;
    private element: HTMLCanvasElement | null = null;

    public draw(element: HTMLCanvasElement, datas: any) {
        let context = element.getContext("2d");

        if (context !== null) {
            this.context = context;
            this.element = element;
            this.drawData(datas);
        }
    }

    public clear() {
        if (this.context !== null) {
            this.context.clearRect(0, 0, this.element!.width, this.element!.height);
        }
    }

    private drawData(data: any) {
        let drawer: DrawInterface | null = null;

        if (data.type === "rectangle-list-group") {
            drawer = new RectangleListGroup();
        }

        if (drawer !== null) {
            this.context!.scale(data.scale, data.scale);
            drawer.draw(this.context!, data);
        }
    }
}

export default Paint;