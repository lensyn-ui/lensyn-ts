import DrawInterface from "./DrawInterface";

class Rectangle implements DrawInterface {
    public draw(context: CanvasRenderingContext2D, data: any) {
        if (data.type === "border-rectangle") {
            this.drawBorderRectangle(context, data);
        } else {
            this.drawRectangle(context, data);
        }
        this.drawText(context, data);
    }

    private drawBorderRectangle(context: CanvasRenderingContext2D, data: any) {
        context.strokeStyle = data.borderColor;
        context.strokeRect(data.x, data.y, data.width, data.height);
        context.fillStyle = data.backgroundColor;
        context.fillRect(data.x + 1, data.y + 1, data.width - 2, data.height - 2);
    }

    private drawRectangle(context: CanvasRenderingContext2D, data: any) {
        context.fillStyle = data.backgroundColor;
        context.fillRect(data.x, data.y, data.width, data.height);
    }

    private drawText(context: CanvasRenderingContext2D, data: any) {
        if (data.content) {
            context.font = data.fontSize ? data.fontSize : "14px";
            context.textBaseline = "middle";
            context.fillStyle = data.fontStyle ? data.fontStyle : "#fff";
            context.textAlign = "center";
            context.fillText(data.content, data.x + data.width / 2, data.y + data.height / 2);
        }
    }
}

export default Rectangle;

