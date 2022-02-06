import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

import SectionSobre from './components/SectionSobre';

import SectionServicos from './components/SectionServicos';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <SectionSobre></SectionSobre>
            <SectionServicos></SectionServicos>
            <section ClassName="portfolio">
                <h2>Portfólio</h2>
                <img src="../assets/img/portfolio-1.jpg" alt="cogumelos"></img>
                <img
                    src="../assets/img/portfolio-2.jpeg"
                    alt="Sol no horizonte"
                ></img>
                <img
                    src="../assets/img/portfolio-3.jpeg"
                    alt="Pessoas á beira de vale"
                ></img>
                <img
                    src="../assets/img/portfolio-4.jpg"
                    alt="Floresta nevada"
                ></img>
                <img
                    src="../assets/img/portfolio-5.jpeg"
                    alt="Praia deserta"
                ></img>
                <img
                    src="../assets/img/portfolio-6.jpeg"
                    alt="Alce á beira do rio"
                ></img>
            </section>
        </div>
    );
}

export default App;
