/*********************************************************************
* 组件使用说明基础定义
* Created by deming-su on 2018/6/19
*********************************************************************/



<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";
    import {Breadcrumb, Pagetips} from "../../components";

    interface BreadCrumb {
        name: string;
        link: string;
        id: string;
    }

    @Component({
        components: {
            'ls-breadcrumb': Breadcrumb,
            'ls-pagetips': Pagetips
        }
    })
    export default class extends Vue {

        /**
         * 页面参数释义
         * @param breadList 面包屑参数
         * @param tipsInfo 提示信息参数
         * @param introduceInfo 组件使用方法
         * @param nowText 组件使用方法
         */
        protected breadList: Array<BreadCrumb> = [{name: '首页', link: '/home', id: 'breadcrumb001'}];
        protected tipsInfo: any;
        protected introduceInfo: any[] = [];
        protected nowText: string = "";

        protected readFile(url: string): void {

            let xhr: XMLHttpRequest = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                    this.nowText = "";
                    let strInfo: string = "";
                    xhr.onload = () => {
                        strInfo = `${strInfo}${xhr.responseText}`
                    };
                    xhr.onloadend = () => {
                        this.nowText = strInfo.replace(/\</g, '&lt;').replace(/\>/g, '&gt;');
                    }
                }
            };
            xhr.send();
        }
    }
</script>