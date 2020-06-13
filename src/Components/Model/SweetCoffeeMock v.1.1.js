class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 10,
			sugar: 10,
			chocolate: 10,
		};
		this.handleError = {};
	}

	prepareDrink(name, stock, reqMilk, reqSugar, handleError) {
		this.handleError = handleError

		switch(name.toLowerCase()) {
			case "americano":
				return this.makeAmericano(stock, reqMilk, reqSugar)
			case "cappucino":
				return this.makeCappuchino(stock, reqMilk, reqSugar)
			case "wiener melange":
				return this.makeWienermelange(stock, reqMilk, reqSugar)
			case "chocolade":
				return this.makeChoco(stock, reqMilk, reqSugar)
			case "zwarte thee":
				return this.makeTeaBlack(stock, reqMilk, reqSugar)
			case "earl gray":
				return this.makeTeaEarlgray(stock, reqMilk, reqSugar)
			default:
				return;
		}
	}

	makeAmericano (stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
			return false;
		}
	}

	makeCappuchino(stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeWienermelange(stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeChoco(stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaBlack(stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaEarlgray(stock, reqMilk, reqSugar) {
		if (this.checkStock(stock, reqMilk, reqSugar)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	getStock() {
		return this.stock;
	}

	 // checkStock returns true of false
	checkStock = (stock, reqMilk, reqSugar) => {
		if (reqMilk <= stock.milk && reqSugar <= stock.sugar) {
			return true;
		} else {
			return false;
		}
	}
}

export default SweetCoffeeMachine;
