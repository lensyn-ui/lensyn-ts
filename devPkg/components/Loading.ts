class Loading {
    public static show() {
        if (!this.isInit) {
            this.init();
        }
        this.el.style.display = "block";
    }

    public static hide() {
        if (this.isInit) {
            this.el.style.display = "none";
        }
    }

    private static el: HTMLDivElement;
    private static elClassName: string = "ls-loading";
    private static isInit: boolean = false;

    private static init() {
        let node = document.createElement("div");

        node.setAttribute("class", this.elClassName);
        node.style.display = "none";
        document.body.appendChild(node);
        this.isInit = true;
        this.el = node;
    }
}

export default Loading;