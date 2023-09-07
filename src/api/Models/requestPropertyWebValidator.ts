class requestPropertyWebValidator {
    idTypeOperation: string;
    idCategory: string;
    cityOrCommune: string;
    constructor(){
        this.idTypeOperation = 'required|numeric';
        this.idCategory = 'required|numeric';
        this.cityOrCommune = 'required|string';
    }
}

export { requestPropertyWebValidator }