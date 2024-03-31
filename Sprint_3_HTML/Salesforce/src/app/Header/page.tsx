import Image from "next/image";
import Link from "next/link";
import './header.css';
import logo from "/assets/logoSalesforce.svg"

const Header = () => {
  return (
    <>
      <header>
        <div className="logo-menu">
          <section>
            <Link href="/">
            <Image src="/assets/logoSalesforce.svg" alt="Logo da SalesForce" width="100" height="70"></Image>
            </Link>
          </section>
          <section>
            <nav>
                <ul className="menu">
                    <li><Link href="/Produtos" className="link">Produtos</Link></li>
                    <li><Link href="/Contato" className="link">Contato</Link></li>
                    <li><Link href="/Equipe" className="link">Equipe</Link></li>
                </ul>
            </nav>
          </section>
          
        </div>
        {/* <div className="botoes">
            <button className="conteudo-botao">
                <Image src="/assets/iconePesquisa.svg" alt="Ícone de pesquisa" width="18" height="18"/>
                <p>Pesquisar</p>
            </button>
            <button className="conteudo-botao">
                <Image src="/assets/iconeIdioma.svg" alt="Ícone de pesquisa" width="18" height="18"/>
                <p>Alterar Idioma</p>
            </button>
            <button className="conteudo-botao-conta">
                <p>Entrar na sua Conta</p>
            </button>   
        </div> */}
      </header>
  </> 
  );
};
export default Header;
