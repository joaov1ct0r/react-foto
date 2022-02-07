function SectionContato() {
    return (
        <section className="contato">
            <h2>Contato</h2>
            <p>Entre em contato conosco.</p>
            <div>
                <img src="../assets/img/fone.png" alt="fone"></img>
                <p>
                    <a href="tel:xx55555555">(xx) 5555-5555</a>
                </p>
            </div>
            <div>
                <img
                    src={require('../assets/img/contato.png')}
                    alt="email"
                ></img>

                <p>
                    <a href="mailto:email@contato.com">email@contato.com</a>
                </p>
            </div>
        </section>
    );
}

export default SectionContato;
