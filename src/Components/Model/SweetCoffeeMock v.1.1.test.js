import SweetCoffeeMachine from './SweetCoffeeMock v.1.1';

const handleError = () => {
	console.log("handleError")
}

const handleStock = () => {
	console.log("handleStock")
}

// Test het component op een correcte invoer
it('return value is boolean', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "AmeriCano",
		stock: {
			milk: 10,
			sugar: 10,
			chocolate: 10
		},
		reqMilk: 0,
		reqSugar: 0,
		reqChoco: 0,
		bugMiltiplier: 0
	}

  expect(typeof coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError,
		handleStock
	)).toEqual("boolean");
});

// Test het component op een foutieve invoer
it('return value is false bij een foutief drankje', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "TestMock",
		stock: {
			milk: 10,
			sugar: 10,
			chocolate: 10
		},
		reqMilk: 0,
		reqSugar: 0,
		reqChoco: 0,
		bugMiltiplier: 0
	}

  expect(coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError,
		handleStock
	)).toEqual(false);
});

// Test het component op een lege voorraad
it('return value is false bij een lege voorraad', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "CaPPuCino",
		stock: {
			milk: 0,
			sugar: 0,
			chocolate: 0
		},
		reqMilk: 5,
		reqSugar: 5,
		reqChoco: 5,
		bugMiltiplier: 0
	}

  expect(coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError,
		handleStock
	)).toEqual(false);
});

// Test het component op een foutieve typeof voorraad
it('return value is false bij een foutieve stock', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "EarL GRAY",
		stock: "TestString",
		reqMilk: 5,
		reqSugar: 5,
		reqChoco: 5,
		bugMiltiplier: 0
	}

  expect(coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError,
		handleStock
	)).toEqual(false);
});

// Test het component op een foutieve typeof requirements
it('return value is boolean bij foutieve requirements', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "Chocolade",
		stock: {
			milk: 10,
			sugar: 10,
			chocolate: 10
		},
		reqMilk: "5",
		reqSugar: "5",
		reqChoco: "5",
		bugMiltiplier: 0
	}

  expect(typeof coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError,
		handleStock
	)).toEqual("boolean");
});