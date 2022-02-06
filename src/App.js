import './App.css';

import Nav from './components/Nav';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <header>
                <h1>Lorem Ipsum</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis exercitationem officiis.
                </p>
                <button type="submit" href="#sobre" className="botao">
                    Ver Mais
                </button>
            </header>
        </div>
    );
}

export default App;
