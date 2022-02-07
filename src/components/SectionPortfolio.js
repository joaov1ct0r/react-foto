function SectionPortfolio() {
    return (
        <section ClassName="portfolio">
            <h2>Portfólio</h2>
            <img
                src={require('../assets/img/portfolio-1.jpg')}
                alt="cogumelos"
            ></img>
            <img
                src={require('../assets/img/portfolio-2.jpeg')}
                alt="Sol no horizonte"
            ></img>
            <img
                src={require('../assets/img/portfolio-3.jpeg')}
                alt="Pessoas á beira de vale"
            ></img>
            <img
                src={require('../assets/img/portfolio-4.jpg')}
                alt="Floresta nevada"
            ></img>
            <img src="../assets/img/portfolio-5.jpeg" alt="Praia deserta"></img>
            <img
                src="../assets/img/portfolio-6.jpeg"
                alt="Alce á beira do rio"
            ></img>
        </section>
    );
}

export default SectionPortfolio;
