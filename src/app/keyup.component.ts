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

    onKey(event: KeyboardEvent){
        this.values += (<HTMLInputElement>event.target).value + ' |';
    }
}