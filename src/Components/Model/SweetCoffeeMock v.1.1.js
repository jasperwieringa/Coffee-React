class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 100,
			sugar: 100,
		};
	}

	prepareDrink(name, stock, reqSugar, reqMilk, handleError) {
		this.handleError = handleError

		switch(name.toLowerCase()) {
			case "americano":
				return this.makeAmericano(stock, reqSugar, reqMilk)
			case "cappucino":
				return this.makeCappuchino(stock, reqSugar, reqMilk)
			case "wiener melange":
				return this.makeWienermelange(stock, reqSugar, reqMilk)
			case "chocolade":
				return this.makeChoco(stock, reqSugar, reqMilk)
			case "zwarte thee":
				return this.makeTeaBlack(stock, reqSugar, reqMilk)
			case "earl gray":
				return this.makeTeaEarlgray(stock, reqSugar, reqMilk)
			default:
				return;
		}
	}

	makeAmericano (stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
			return false;
		}
	}

	makeCappuchino(stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeWienermelange(stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeChoco(stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaBlack(stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaEarlgray(stock, reqSugar, reqMilk) {
		if (this.checkStock(stock, reqSugar, reqMilk)) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	getStock() {
		return this.stock;
	}

	 // checkStock returns true of false
	checkStock = (stock, reqSugar, reqMilk) => {
		if (reqSugar <= stock.sugar && reqMilk <= stock.milk) {
			return true;
		} else {
			return false;
		}
	}
}

export default SweetCoffeeMachine;
