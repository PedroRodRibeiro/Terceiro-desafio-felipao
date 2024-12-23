
class hero{
    constructor(nomeHero, idadeHero, tipoHero){
        this.nomeHero = nomeHero
        this.idadeHero = idadeHero
        this.tipoHero = tipoHero
    }
    atacar(){
        let atacouCom = this.verificaAtaque(this.tipoHero)
        console.log(`|--------------------------||--------------------------|`)
        console.log(`- O ${this.tipoHero} ${this.nomeHero} atacou usando ${atacouCom}. -`)
        console.log(`|--------------------------||--------------------------|`)
    }
    verificaAtaque(tipoHero){
        let atacouCom = " "
        if (tipoHero === "Mago"){
            atacouCom = "magia"
        } else if (tipoHero === "Guerreiro"){
            atacouCom = "espada"
        } else if (tipoHero === "Monge"){
            atacouCom = "artes marciais"
        } else if (tipoHero === "Ninja"){
            atacouCom = "shuriken"
        } else {
            atacouCom = "a força do pensamento"
        }
        return atacouCom
    }

  }
let magoDasTesouras = new hero("Zé Chapéu", 40, "Mago")
let guerreiroDePrata = new hero("Silver Boy", 28, "Guerreiro")
let mongeDaPaz = new hero("Mestre Kamy", 58, "Monge")
let ninjaSumido = new hero("Jack Chan", 45, "Ninja")
let subZero = new hero("Sub Zero", 51, "Cara frio")

guerreiroDePrata.atacar()
mongeDaPaz.atacar()
magoDasTesouras.atacar()
ninjaSumido.atacar()
subZero.atacar()