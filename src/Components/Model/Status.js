class Status {
  setStatusCode(status_code) {
    switch(status_code) {
      case 0: {
        this.status = {
          error: false, 
          description: "Geen storing", 
          message: ""
        }
        break;
      }
      case 1: {
        this.status = {
          error: true, 
          description: "Geen water", 
          message: "Geen waterdruk"
        }
        break;
      }
      case 2: {
        this.status = {
          error: true, 
          description: "Interne status fout", 
          message: "Machine is kapot"
        }
        break;
      }
      case 3: {
        this.status = {
          error: true, 
          description: "Temperatuur te laag", 
          message: "Machine is kapot"
        }
        break;
      }
      default: {
        this.status = {
          error: true, 
          description: "Onbekende fout", 
          message: "Onbekende fout"
        }
      }
    }
  }
  
  getStatusCode() {
    return this.status;
  }
}  

export default Status;