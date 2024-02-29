class Ninja{
    constructor(nombre, salud ){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    };
    sayName(){
        console.log(`mi nombre es ${this.nombre} y soy un ninja!`);
    };
    showStats(){
        console.log(`mis stats son ${this.salud} de salud, ${this.velocidad} de velocidad y ${this.fuerza} de fuerza!`);
    };
    drinkSake(){
        this.salud += 10;
        console.log(` mi salud subio a ${this.salud}!!`)
    };
}
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200);
        this.sabiduria = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

const sensei = new Sensei('Splinter');
sensei.speakWisdom();
sensei.showStats();