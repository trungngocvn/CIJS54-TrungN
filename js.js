class Animal{
    species;
    color;
    numberOfleg;
    gender;
    name;
    constructor(species, color, numberOfleg, gender, name){
        this.species = species
        this.color = color
        this.numberOfleg = numberOfleg
        this.gender = gender
        this.name = name
    }
    eat() {
        console.log(`day la con ${this.species} ten la ${this.name} dang an `);
    }
    speak() {
        console.log(`day la con ${this.species} ten la ${this.name} dang keu`);
    }
    isDangerous() {
        if (this.numberOfleg < 4 || this.numberOfleg === 0) {
            console.log(`nguy hiem`) }
        else { 
            console.log(`khong nguy hiem`);
        }
        }    
    }
    const myTiger = new Animal (`an thit`, `vang`, 4 , `male` , `meo`)
    console.log(myTiger);


    

