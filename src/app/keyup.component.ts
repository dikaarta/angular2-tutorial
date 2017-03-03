import { Component } from '@angular/core';

@Component({
    selector:"keyup",
    template:`
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_V1{
    values = '';

    onKey(event: any){
        this.values += event.target.value + ' |';
    }
}

@Component({
    selector:"key-up2",
    template:`
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_V2{
    values = '';

    onKey(value: string){
        this.values += value + ' |';
    }
}

@Component({
    selector: "key-up3",
    template:`
        <input #box (keyup.enter)="onEnter(box.value)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_V3{
    values = '';

    onEnter(value: string){
        this.values = value;
    } 
}