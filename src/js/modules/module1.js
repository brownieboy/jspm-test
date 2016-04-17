console.log("module1 loaded");

class Module1Class {
    constructor(configObj) {
        console.log("Module1Class constructor called");
        this.configObj = configObj;
    }
    getTemplate() {
    	const configObj = this.configObj;
    	return  `${configObj.surname} is the name, ${configObj.firstName} ${configObj.surname}.`;
    }

}

export default Module1Class;
