class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
			milk: 10,
			sugar: 10,
			chocolate: 10
		};
		this.requirements = []
		this.isError = false;
		this.status_code = 0;
	}

	prepareDrink(name, stock, reqMilk, reqSugar, reqChocolate, handleError) {
		this.stock = stock;
		this.requirements = {milk: reqMilk, sugar: reqSugar, chocolate: reqChocolate};
		this.isError = this.generateRandomStatus(); // Genereer een willekeurige status_code

		if (!this.isError) {
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
		} else {
			handleError(this.status_code)
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
	
	generateRandomStatus() {
		const randomNumber = Math.floor(Math.random() * 5);
		const compareNumber = Math.floor(Math.random() * 5);

		/* Vergelijk 2 willekeurige nummers tussen 0-5 om zo nu en dan 
		een foutmelding weer te geven */
		if (randomNumber === compareNumber && randomNumber < 4) {
			this.status_code = randomNumber;
			return true;			
		} return false;
	}

	getStock() {
		return this.stock;
	}

	 // checkStock returns true of false
	checkStock = () => {
		if (this.requirements.milk <= this.stock.milk && this.requirements.sugar <= this.stock.sugar) {
			return true;
		} return false;
	}
}

export default SweetCoffeeMachine;
