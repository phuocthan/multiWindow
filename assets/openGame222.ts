
import { _decorator, Component, Node } from 'cc';
import { COCOSPLAY } from 'cc/env';
const { ccclass, property } = _decorator;

@ccclass('OpenGame')
export class OpenGame extends Component {
    // [1]
    // dummy = '';
    count: string = 'aaaa';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
    }
    onLoad() {
        cc.debug.setDisplayStats(true)
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
    clickOnNEwTab() {
        var shishir = window.open("../../pm/gameplay/web-mobile/index.html", this.count, "width=400,height=400,fullscreen=no,toolbar=no,status=no,menubar=no,scrollbars=no,resizable=0");
        this.count += "aasda";
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
