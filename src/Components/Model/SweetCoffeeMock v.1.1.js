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

	prepareDrink(name, stock, reqMilk, reqSugar, reqChoco, handleError, bugMultiplier) {
		this.stock = stock;
		this.requirements = {milk: reqMilk, sugar: reqSugar, chocolate: reqChoco};
		this.isError = this.generateRandomStatus(bugMultiplier); // Genereer een willekeurige status_code

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
	
	generateRandomStatus(bugMultiplier) {
		const reCalculatedMultiplier = bugMultiplier < 4 ? 4 : bugMultiplier
		const randomNumber = Math.floor(Math.random() * reCalculatedMultiplier);
		const compareNumber = Math.floor(Math.random() * reCalculatedMultiplier);

		/* Vergelijk 2 willekeurige nummers (tussen 0 en ReCalculatedMultiplier) 
		om zo nu en dan een foutmelding weer te geven
		Regels: 0 = success, 1 = error, 2 = error, 3 = error */ 
		if (randomNumber === compareNumber && randomNumber > 0 && randomNumber < 4) {
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
