import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

import SectionSobre from './components/SectionSobre';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <SectionSobre></SectionSobre>
            <section className="servicos">
                <h2>Serviços</h2>
                <div>
                    <img
                        src="../assets/img/configs.png"
                        alt="Engrenagens"
                    ></img>
                    <h3>Fácil Integração</h3>
                    <p>
                        Integra facilmente seu site a qualquer gerenciador de
                        conteúdo.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default App;
