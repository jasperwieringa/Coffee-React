class Status {
  constructor() {
    this.statusCode = null;
    this.status = null;
  }

  set status_code(status_code) {
    if (status_code === 0) {
      this.status = {
        error: false, 
        description: "Geen storing", 
        message: ""
      }
    } else if (status_code === 1) {
      this.status = {
        error: true, 
        description: "Geen water", 
        message: "Geen waterdruk"
      }
    } else if (status_code === 2) {
      this.status = {
        error: true, 
        description: "Interne status fout", 
        message: "Machine is kapot"
      }
    } else (
      this.status = {
        error: true, 
        description: "Temperatuur te laag", 
        message: "Machine is kapot"
      }
    )
  }
  
  get status_code() {
    return this.status;
  }
}  

export default Status;