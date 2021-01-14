
import { Component } from '@angular/core';

import nameData from '../../names/names.json'


//defines what datatype the name and amount key values are in the json file
interface INames {
		name: string,
		amount: number
}

const { names } = nameData

@Component({
	selector: 'app-one',
	templateUrl: './one.html',
	styleUrls: ["./one.css"]
})



export class OneComponent {
	//uses the interface to define types for name and amoun in the array
	nameArray: Array<INames> = names

	constructor() {
		//Sorting names in descending order from name array using arrow syntax.
		this.nameArray.sort((a, b) => (a.amount < b.amount) ? 1 : -1)
	}
}




