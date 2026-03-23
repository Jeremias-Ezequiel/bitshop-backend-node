class Brand
{
    #name

    constructor(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
    
    setName(name){
        this.#name = name;
        return this;
    }
}