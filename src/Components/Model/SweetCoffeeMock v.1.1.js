class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 10,
			sugar: 10,
			chocolate: 10
		};
		this.requirements = []
	}

	prepareDrink(name, stock, reqMilk, reqSugar, reqChocolate) {
		this.stock = stock;
		this.requirements = {milk: reqMilk, sugar: reqSugar, chocolate: reqChocolate};

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
		}
	}

	makeCappuchino() {
		if (this.checkStock()) {
			return true;
		}
	}

	makeWienermelange() {
		if (this.checkStock()) {
			return true;
		}
	}

	makeChoco() {
		if (this.checkStock()) {
			return true;
		}
	}

	makeTeaBlack() {
		if (this.checkStock()) {
			return true;
		}
	}

	makeTeaEarlgray() {
		if (this.checkStock()) {
			return true;
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
