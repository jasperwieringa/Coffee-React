class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 10,
			sugar: 10,
			chocolate: 10,
		};
		this.requirements = []
	}

	prepareDrink(name, stock, reqMilk, reqSugar, handleError) {
		this.stock = stock;
		this.requirements = {milk: reqMilk, sugar: reqSugar, chocolate: 0};
		this.handleError = handleError;

		console.log("In stock: ", this.stock);
		console.log("Required: ", this.requirements);

		switch(name.toLowerCase()) {
			case "americano":
				return this.makeAmericano()
			case "cappucino":
				return this.makeCappuchino()
			case "wiener melange":
				return this.makeWienermelange()
			case "chocolade":
				return this.makeChoco()
			case "zwarte thee":
				return this.makeTeaBlack()
			case "earl gray":
				return this.makeTeaEarlgray()
			default:
				return;
		}
	}

	makeAmericano () {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
			return false;
		}
	}

	makeCappuchino() {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeWienermelange() {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeChoco() {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaBlack() {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	makeTeaEarlgray() {
		if (this.checkStock()) {
			return true;
		} else {
			this.handleError(true, "Something went wrong");
		}
	}

	getStock() {
		return this.stock;
	}

	 // checkStock returns true of false
	checkStock = () => {
		if (this.requirements.milk <= this.stock.milk && this.requirements.sugar <= this.stock.sugar) {
			return true;
		} else {
			return false;
		}
	}
}

export default SweetCoffeeMachine;
