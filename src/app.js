import React from 'react'
import ReactDOM from 'react-dom'

const AddForm = () => {
      return (
        <form><h3>
            <input type="text" placeholder="Enter Pokemon name" />
            <button type="submit" >Add</button></h3>
        </form>
    )
}

const Header =(props) => (
    <header>
        <h1>{props.title}</h1>
        <AddForm />
    </header>
)

const Items = (props) => {
    console.log(props.pokemons)
    return (
        <table>
            {props.pokemons.map(item => (
                     <tr>
                         <td><img src={item[0]} width="300" height="200"/></td>
                         <td><p><li>{item[1]} </li>
                                <li>{item[2]} </li>
                                <li>{item[3]} </li></p></td>
                     </tr>
                )
            )}
        </table>
    )
}


const Content = (props) => (
    <section>
        <h2>{props.description}</h2>
        <Items pokemons={props.pokemons}/>
    </section>
)

const App = () => {
    const appTitle = 'My Pokedex'
    const description = 'Pokemon that catched'
    const pokemons = [
        ["image/1722.jpg","Name : Snorlax" ,"Type : Normal","Skill : Lick"],
        ["image/001.png","Name : Bulbasaur" ,"Type : Grass , Poison","Skill : Vine Whip"],
        ["image/007Squirtle.png","Name : Squirtle" ,"Type : Water","Skill : Aqua Jet"],
        ["image/Charmander.png","Name : Charmander" ,"Type : Fire","Skill : Ember"],
        ["image/gyarados.png","Name : Gyarados" ,"Type : Water","Skill : Hydro Pump"],
        ["image/king.png","Name : Magikarp" ,"Type : Water","Skill : Splash"],
        ["image/kireu.png","Name : Dragonite" ,"Type : Dragon","SSkill : Dragon Pulse"],
        ["image/pika.png","Name : Pikachu" ,"Type : Electric","Skill : Thunder"]
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