import React , {Component} from 'react';
import BillGates from './BillGates.jpg';
import Card from 'react-bootstrap/Card';


export class Profil extends Component{

    constructor(){
        console.log('constructor()')
        super();
        this.state={
          timer:0,
          intervall : null
        }

        }
        
        componentDidMount(){
            console.log('componentDidMount()');
            this.setState({
                intervall: setInterval(
                    ()=>this.setState({  timer: this.state.timer +1  }), 1000
                )
            })

      }

   




 componentWillUnmount(){
    console.log('you killed me')
    clearInterval(this.state.intervall)
 }



//Profil +++++++++++++++++++++++++++++++++++++++++
 render(){
  return (
    <div>
   
   <Card >
      <Card.Img  className='img' variant="top" src={BillGates} />
      <Card.Body className='card' >
        <Card.Title className='name'>Bill Gates</Card.Title>
        <Card.Text className='prof'>
        Entrepreneur, Financier, Investisseur, Auteur, Développeur, Philanthrope, Magnat des affaires, Inventeur, Conseiller, Informaticien, Architecte logiciel, Réalisateur de télévision
        </Card.Text>
        <Card.Text className='bio'>
        ill Gates est né le 28 octobre 1955 à Seattle (Etats-Unis), 
        où son père est avocat d'affaire et sa mère professeure à l'université 
        de Washington. Toujours à Seattle, c'est à l'école privée de Lakeside qu'il 
        découvre l'informatique sur un de ces gigantesques ordinateurs de la fin des
        années 60, un PDP-10. A 13 ans. C'est avec son ami d'enfance Paul Allen qu'ils
         programment leurs premiers jeux et cherchent à optimiser des logiciels.
         </Card.Text>
    
      </Card.Body>
    </Card>

    <div className='timer'>
<h3>Timer:</h3>
<p>{this.state.timer}</p>
</div>

    </div>
  )
}
}

export default Profil