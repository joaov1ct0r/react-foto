function SectionPortfolio() {
    return (
        <section className="portfolio">
            <h2>Portfólio</h2>
            <img
                src={require('../assets/img/portfolio-1.jpg')}
                alt="cogumelos"
            />
            <img
                src={require('../assets/img/portfolio-2.jpeg')}
                alt="Sol no horizonte"
            />
            <img
                src={require('../assets/img/portfolio-3.jpeg')}
                alt="Pessoas á beira de vale"
            />
            <img
                src={require('../assets/img/portfolio-4.jpg')}
                alt="Floresta nevada"
            />
        </section>
    );
}

export default SectionPortfolio;
