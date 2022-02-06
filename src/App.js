import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <section className="sobre">
                <h2>Sobre</h2>
            </section>
        </div>
    );
}

export default App;
