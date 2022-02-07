function SectionServicos() {
    return (
        <section className="servicos">
            <h2>Serviços</h2>
            <div>
                <img
                    src={require('../assets/img/configs.png')}
                    alt="Engrenagens"
                ></img>
                <h3>Fácil Integração</h3>
                <p>
                    Integra facilmente seu site a qualquer gerenciador de
                    conteúdo.
                </p>
            </div>
            <div>
                <img
                    src={require('../assets/img/hospedagem.png')}
                    alt="Servidor"
                ></img>
                <h3>Hospedagem Moderna</h3>
                <p>
                    Não deixe seus clientes na mão. Tenha seu site 24hrs no ar.
                </p>
            </div>
            <div>
                <img src="../assets/img/site.png" alt="Navegador"></img>
                <h3>Melhores Práticas</h3>
                <p>Código legível, desenvolvido com as melhores práticas.</p>
            </div>
            <div>
                <img src="../assets/img/coracao.png" alt="Coração"></img>
                <h3>Feito com amor</h3>
                <p>É melhor fazer seus sites com amor hoje em dia!</p>
            </div>
        </section>
    );
}

export default SectionServicos;
