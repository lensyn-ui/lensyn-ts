/*********************************************************************
 * Vue directive file
 * Created by deming-su on 2017/12/30
 *********************************************************************/

const Autofocus = {
    inserted(el: HTMLElement): void {
        el.focus();
    }
};


export {
    Autofocus
};