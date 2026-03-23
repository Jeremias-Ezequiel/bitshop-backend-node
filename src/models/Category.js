class Category{
    #name; 
    #description;

    constructor(name, description){ 
        this.#name = name;
        this.#description = description;

    }
    
    getName(){
        return $this.#name; 
    }

    getDescription(){
        return $this.#description;
    }

    setName(name){
        this.#name = name;
        return this;
    }

    setDescription(description){
        this.#description = description;
        return this; 
    }
}