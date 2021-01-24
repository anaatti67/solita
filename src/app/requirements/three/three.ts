import { Component } from '@angular/core';

import nameData from '../../names/names.json'



interface INames {
		name: string,
		amount: number
}

const { names } = nameData

@Component({
	selector: 'app-three',
    templateUrl: './three.html',
    styleUrls: ["./three.css"]
})



export class ThreeComponent {
    nameArray: Array<INames> = names
    
    amountOfNames() {
        let y = 0
            for(let x of this.nameArray) {
                y = x.amount + y
            }
        return y
        
    }
	constructor() {        
    }
}




