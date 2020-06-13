import SweetCoffeeMachine from './SweetCoffeeMock v.1.1';

const handleError = () => {
	console.log("Error")
}

// Test het component op een foutieve invoer
it('return value is foutief drankje', () => {
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
		handleError
	)).toEqual("Foutief drankje");
});

// Test het component op een correcte invoer
it('return value is true', () => {
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

  expect(coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError
	)).toEqual(true);
});

// Test het component op een lege voorraad
it('return value is false', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "AmeriCano",
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
		handleError
	)).toEqual(false);
});

// Test het component op een foutieve typeof voorraad
it('return value is false', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "AmeriCano",
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
		handleError
	)).toEqual(false);
});

// Test het component op een foutieve typeof requirements
it('return value is true', () => {
	const coffeeMachine = new SweetCoffeeMachine();

	const props = {
		name: "AmeriCano",
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

  expect(coffeeMachine.prepareDrink(
		props.name, 
		props.stock, 
		props.reqMilk, 
		props.reqSugar, 
		props.reqChoco, 
		props.bugMiltiplier,
		handleError
	)).toEqual(true);
});