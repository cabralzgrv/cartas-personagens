import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { ArqueiroMago } from "./modules/arqueiro-mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const magoAntonio = new Mago('Antônio', 4, 'Fogo', 4, 3)
const magaJulia = new Mago('Julia', 8, 'Gelo', 7, 10)
const arqueiroBruno = new Arqueiro('Bruno', 7, 8)
const guerreiroLucas = new Guerreiro('Lucas', 8)
const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 10, 'ar', 4, 8)

const personagens = [magaJulia, magoAntonio, arqueiroBruno, arqueiroMagoChico, guerreiroLucas]

new PersonagemView(personagens).render()