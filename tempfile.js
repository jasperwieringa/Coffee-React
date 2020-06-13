const props = {
  "name": "Cappucino",
  "requirements": {
    "milk": 0,
    "sugar": 0,
    "chocolate": 0
  },
  "drinkTypes": [
    {
      "name": "Americano",
      "id": "ac",
      "requirements": {
        "milk": 0,
        "sugar": 0,
        "chocolate": 0
      }
    },
    {
      "name": "Cappucino",
      "id": "cpc",
      "requirements": {
        "milk": 1,
        "sugar": 0,
        "chocolate": 0
      }
    }
  ]
}

console.log(props.drinkTypes[]);