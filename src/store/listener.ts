import {makeAutoObservable} from "mobx";

type Data = {
    clicks: number,
    mouseOver: number,
    mouseOut: number,
    timestamp: Date | null | string,
    total: number
}

class Listener{

    data: Data={
        clicks: 0,
        mouseOver: 0,
        mouseOut: 0,
        timestamp: null,
        total: 0
    }

    constructor() {
        makeAutoObservable(this);
    }

    addMouseOver(){
        ++this.data.mouseOver;
        this.total();
    }

    addMouseOut(){
        ++this.data.mouseOut;
        this.total()
    }

    addClick(){
        ++this.data.clicks;
        this.total()
    }

    reset(){
        this.data = {
            clicks: 0,
            mouseOver: 0,
            mouseOut: 0,
            timestamp: null,
            total: 0
        }
    }

    timer(payload: string | Date){
       this.data.timestamp = payload;
    }

    total(){
        this.data.total = this.data.clicks + this.data.mouseOut + this.data.mouseOver;
    }
}

export default new Listener();