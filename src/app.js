import React from 'react'
import ReactDOM from 'react-dom'

function onAddClick(event){
    event.preventDefault()
    console.log('onAddClick',event)
}

class AddForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            query : ''
        }
    }
    onAddClick(event){
        event.preventDefault()
        console.log('this.onAddClick', this.state.query)
    }
    onQueryChange(event){
        const query = event.target.value
        console.log('this.onQueryChange',query)
        this.setState({
            query : query
        })
    }
    render(){
        return(
            <form><h3>
            <input type="text" value={this.state.query} onChange= {this.onQueryChange.bind(this)} placeholder="Enter Pokemon name" />
            <button onClick={this.onAddClick.bind(this)} >Add</button></h3>
            </form>
        )
    }
}

const Header =(props) => (
    <header>
        <h1>{props.title}</h1>
        <AddForm />
    </header>
)

const PokemonList = (props) => {
    console.log(props.pokemons)
    return (
        <table>
            {props.pokemons.map((item,i) => (
                     <tr key={i}>
                         <td><img src={item.pic} width="300" height="200"/></td>
                         <td><p><li>Name : {item.name} </li>
                                <li>Type : {item.type} </li>
                                <li>Skill : {item.skill} </li></p>
                        </td>
                     </tr>
                )
            )}
        </table>
    )
}


const Content = (props) => (
    <section>
        <h2>{props.description}</h2>
        <PokemonList pokemons={props.pokemons}/>
    </section>
)

const App = () => {
    const appTitle = 'My Pokedex'
    const description = 'Pokemon that catched'
    const pokemons = [
        
             {pic : "image/1722.jpg",name:"Snorlax" ,type:"Normal",skill:"Lick"}
              ,
       
           {pic : "image/001.png",name:"Bulbasaur" ,type:"Grass , Poison",skill:"Vine Whip"}

        ,
        
             {pic:"image/007Squirtle.png",name:"Squirtle" ,type : "Water",skill : "Aqua Jet"}
      
       ,
       
           {pic:"image/Charmander.png",name : "Charmander" ,type : "Fire",skill : "Ember"}
      
        ,
       
             {pic:"image/gyarados.png",name : "Gyarados" ,type : "Water",skill : "Hydro Pump"}
        
       ,
      
            {pic:"image/king.png",name : "Magikarp" ,type : "Water",skill : "Splash"}
       
       ,
       
           {pic:"image/kireu.png",name : "Dragonite" ,type : "Dragon",skill : "Dragon Pulse"}
       
        ,
            {pic:"image/pika.png",name : "Pikachu" ,type : "Electric",skill : "Thunder"}
        
        
      
    ]
    return (
    <section>
        <Header title={appTitle}/>
        <Content description={description}
                 pokemons={pokemons}/>
    </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(<App />,element)