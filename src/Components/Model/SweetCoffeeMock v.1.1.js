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

	prepareDrink(name, stock, reqMilk, reqSugar, reqChoco, bugMultiplier, handleError, handleStock) {		
		/* Overschrijf de huidige stock */
		if (typeof stock === "object") {
			this.stock = stock;
		} else {
			return false
		}
		
		/* Controleer of de binnenkomende requirements wel van het Number type zijn */
		this.requirements = {
			milk: reqMilk ? Number(reqMilk) : 0, 
			sugar: reqSugar ? Number(reqSugar) : 0, 
			chocolate: reqChoco ? Number(reqChoco) : 0
		}
		
		let preparedDrink;
		switch(name.toLowerCase()) {
			case "americano":
				preparedDrink = this.makeAmericano();
				break;
			case "cappucino":
				preparedDrink = this.makeCappuchino();
				break;
			case "wiener melange":
				preparedDrink = this.makeWienermelange();
				break;
			case "chocolade":
				preparedDrink = this.makeChoco();
				break;
			case "zwarte thee":
				preparedDrink = this.makeTeaBlack();
				break;
			case "earl gray":
				preparedDrink = this.makeTeaEarlgray();
				break;
			default:
				preparedDrink = "Foutief drankje";
		}

		/* Genereer een willekeurige status_code */
		this.isError = this.generateRandomStatus(bugMultiplier);

		/* Als de random status_code een fout teruggeeft (0-4) */
		if (this.isError) {
			preparedDrink = false;
			handleError(this.status_code);
		}

		/* Als de preparedDrink geen true of false is, geef error */
		if (typeof preparedDrink !== "boolean") {
			preparedDrink = false;
			handleError();
		}

		/* Bij success, moet de stock worden bijgewerkt */
		handleStock(
			{
				milk: this.stock.milk - reqMilk,
				sugar: this.stock.sugar - reqSugar,
				chocolate: this.stock.chocolate - reqChoco
			}
		)

		return preparedDrink
	}

	makeAmericano () {
		return this.checkStock()
	}

	makeCappuchino() {
		return this.checkStock()
	}

	makeWienermelange() {
		return this.checkStock()
	}

	makeChoco() {
		return this.checkStock()
	}

	makeTeaBlack() {
		return this.checkStock()
	}

	makeTeaEarlgray() {
		return this.checkStock()
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
