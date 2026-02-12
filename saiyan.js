class Saiyan {
  static poblacio = 0;

  constructor(nom) {
    this.nom = nom;
    Saiyan.poblacio++;
    // console.log("Població de Saiyans: " + Saiyan.poblacio); ?????
    if (Saiyan.poblacio == 10)
      Frieza.destruirPlaneta();
  }
}

class Frieza {
  static destruirPlaneta() {
  console.log("Planeta bye!");
  }
}

let goku = new Saiyan("Goku");
let vegeta = new Saiyan("Vegeta");
let gohan = new Saiyan("Gohan");
