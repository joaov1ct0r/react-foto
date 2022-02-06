import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

import SectionSobre from './components/SectionSobre';

import SectionServicos from './components/SectionServicos';

import SectionPortfolio from './components/SectionPortfolio';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <SectionSobre></SectionSobre>
            <SectionServicos></SectionServicos>
            <SectionPortfolio></SectionPortfolio>
            <section className="contato">
                <h2>Contato</h2>
                <p>Entre em contato conosco.</p>
                <div>
                    <img src="../assets/img/fone.png" alt="fone"></img>
                    <p>
                        <a href="tel:xx55555555">(xx) 5555-5555</a>
                    </p>
                </div>
                <div></div>
            </section>
        </div>
    );
}

export default App;
