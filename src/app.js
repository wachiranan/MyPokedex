import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = () => {
      return (
        <form><h2>
            <input type="text" />
            <button type="submit" >Add</button></h2>
        </form>
    )
}

const Header =(props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm />
    </header>
)

const Items = (props) => {
    console.log(props.items)
    return (
        <ul>
            {props.items.map(item => (
                <li>{item}</li>)
            )}
        </ul>
    )
}

const Content = (props) => (
    <section>
        <h2>{props.description}</h2>
    </section>
)

const AppWithoutDescription = () => (
    <Header title="No description here" />
)

const App = () => {
    const appTitle = 'Fronttechs: React'
    const description = 'This is a simple react application'
    return (
    <section>
        <Header title={appTitle}/>
        <Content description={description}/>
    </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(<App />,element)