import { Component } from '@angular/core';

import nameData from '../../names/names.json'


interface INames {
    name: string
}

const { names } = nameData

@Component({
	selector: 'app-two',
    templateUrl: './two.html',
    styleUrls: ["./two.css"]
})

export class TwoComponent {

    nameArray: Array<INames> = names

	constructor() {

        var sortedByName = this.nameArray.sort((a, b) => (a.name < b.name) ? -1 : 1)
        
        console.log(sortedByName)
    }
    jees() {
        console.log("howdy")
    }
}