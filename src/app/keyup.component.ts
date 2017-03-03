import { Component } from '@angular/core';

@Component({
    selector:"keyup",
    template:`
        <input #box (keyup)="onKey(box.value)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent_V1{
    values = '';

    onKey(value: string){
        this.values += value + ' |';
    }
}