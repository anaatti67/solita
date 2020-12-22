
import { Component } from '@angular/core';

import nameData from '../../names/names.json'



interface INames {
		name: string,
		amount: number
}

const { names } = nameData

@Component({
	selector: 'app-one',
	templateUrl: './one.html'
})



export class OneComponent {
	nameArray: Array<INames> = names

	constructor() {
		//Sorting names in descending order from name array.
		var sorted = this.nameArray.sort((a, b) => (a.amount < b.amount) ? 1 : -1)

		console.log(sorted)
	}
}




