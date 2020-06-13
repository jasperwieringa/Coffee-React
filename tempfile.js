if (!!requirements) {
  isDisabled = Object.entries(requirements).map(([key, requirement]) => {
    if (key in stock) {
      if (stock[key] < requirement) {
        console.log("I need to be turned off")
        return true;
      } 
      console.log("I can be made")
      return false;
    } 
    console.log("I can be made")
    return false;
  })
}
