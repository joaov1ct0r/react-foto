import './App.css';

import Nav from './components/Nav';

import Header from './components/Header';

import SectionSobre from './components/SectionSobre';

import SectionServicos from './components/SectionServicos';

import SectionPortfolio from './components/SectionPortfolio';

import SectionContato from './components/SectionContato';

function App() {
    return (
        <div className="App">
            <Nav></Nav>
            <Header></Header>
            <SectionSobre></SectionSobre>
            <SectionServicos></SectionServicos>
            <SectionPortfolio></SectionPortfolio>
            <SectionContato></SectionContato>
        </div>
    );
}

export default App;
