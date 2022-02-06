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
            </section>
        </div>
    );
}

export default App;
