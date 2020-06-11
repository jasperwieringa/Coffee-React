class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 10,
			chocolate: 10,
			sugar: 10,
		};
	}

	makeAmericano (stock, reqSugar, reqMilk) {
		this.checkStock(stock, reqSugar, reqMilk)
	}

	makeCappuchino(reqSugar, reqMilk) {
	}

	makeWienermelange(reqSugar, reqMilk) {
	}

	makeChoco(reqSugar, reqMilk) {
	}

	makeTeaBlack(reqSugar, reqMilk) {
	}

	makeTeaEarlgray(reqSugar, reqMilk) {
	}

	getStock() {
		return this.stock;
	}
	
	 // checkStock returned true of false
	checkStock = (stock, reqSugar, reqMilk) => {
		reqSugar = Math.floor(reqSugar / 10);
		reqMilk = Math.floor(reqMilk / 10);

		if (reqSugar <= stock.sugar && reqMilk <= stock.milk) {
			return true;
		} else {
			return false;
		}
	}
}

export default SweetCoffeeMachine;
