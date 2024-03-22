import "../../../public/css/footer.css"

const Footer = () =>{
    return(
        <>
        <footer>
            <section className="footer">
                <ul className="mapasite">
                    <span>Mapa do site</span>
                    <li>Início</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>Equipe</li>
                </ul>
                <ul className="informacoes">
                    <span>Informações de contato</span>
                    <li>Endereço: Av. Jornalista Roberto Marinho, 85 – 14º andar – Cidade Monções, São Paulo – SP, 04575-000 Brasil</li>
                    <li>Telefone: 0800 891 1887</li>
                    <li>E-mail: salesforce@salesforce.com</li>
                </ul>
                <ul className="redes">
                    <span>Nossas redes sociais</span>
                    <li><img src="/assets/faceicon.png"/> Facebook</li>
                    <li><img src="/assets/instaicon.png"/>Instagram</li>
                    <li><img src="/assets/twittericon.png"/>Twitter</li>
                    <li><img src="/assets/youtubeicon.png"/>Youtube</li>
                </ul>
            </section>
            <section className="copyright">
                <span>© 2023 Salesforce, Inc. Todos os direitos reservados.</span>
            </section>
        </footer>
        </>
    )
}

export default Footer;