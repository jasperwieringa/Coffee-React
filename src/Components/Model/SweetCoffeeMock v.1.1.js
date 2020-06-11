/**
 * Het doel van dit object is het bieden van een interface naar de koffiezetmachine. Er zijn al methodes (gedrag)
 * geimplementeerd die de basis vormen voor jouw implementatie. Voel je vrij functies toe te voegen en het gedrag
 * van functies aan te passen, zolang de interface van het mock object identiek blijft.
 */

/**
 * Wanneer de machine wordt aangezet mag je ervanuit gaan dat alle voorraden volledig aangevuld zijn
 * De waardes in de constructor zijn daarom altijd de voorraadwaardes bij initialisatie
*/

class SweetCoffeeMachine {
	constructor() {
	  this.stock = {
		milk: 10,
		chocolate: 10,
		sugar: 10,
	  };
	}

	makeAmericano(sugar, milk) {
		return ("make Americano");
	}

	makeCappuchino(sugar, milk) {
		return ("make Cappuchino");
	}

	makeWienermelange(sugar, milk) {
		return ("make Wienermelange");
	}

	makeChoco(sugar, milk) {
		return ("make Choco");
	}

	makeTeaBlack(sugar, milk) {
		return ("make TeaBlack");
	}

	makeTeaEarlgray(sugar, milk) {
		return ("make TeaEarlgray");
	}

	/**
	 * Om ervoor te zorgen dat de frontend goed kan anticiperen op tekorten, kan er ook doormiddel van
	 * getStock een request gedaan worden om de beginwaardes (initialisatie) van de machine op te vragen
	 */
	getStock() {
		return;
	}
}

export default SweetCoffeeMachine;
