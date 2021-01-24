import { Component } from '@angular/core';   
import nameData from '../../names/names.json'
    
interface INames {
        name: string,
        amount: number
}

const { names } = nameData

@Component({
    selector: 'app-four',
    templateUrl: './four.html',
    styleUrls: ["./four.css"]
})


export class FourComponent {

    nameArray: Array<INames> = names


    constructor() { }

    hasName(nameParam: any) {
        return this.nameArray.some(elem => elem.name === nameParam)
    }
}