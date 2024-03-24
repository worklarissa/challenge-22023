"use client"
import Link from "next/link";
import "../../../public/css/header.css"
import { SetStateAction, useState } from "react";

const Header = () =>{

    const [theme, setTheme] = useState('light'); // Estado inicial do tema

    // Função para mudar o tema
    const changeTheme = (newTheme) => {
       setTheme(newTheme);
       document.body.className = newTheme; // Aplica a classe do tema ao body
    };

    return(
        <>
            <header>
                <section className="header">
                    <Link href="/">
                        <img src="assets/logosalesforce.png" alt="" className="logosales"/>
                    </Link>
                    <ul className="listaheader">
                        <Link href="/Produtos">
                            <li>Produtos</li>
                        </Link>
                        <li>Produtos</li>
                        <li>Contato</li>
                        <li>Equipe</li>
                    </ul>
                </section>
                <section>
                    <button onClick={() => changeTheme('dark')}>Fundo escuro</button>
                    <button onClick={() => changeTheme('light')}>Fundo claro</button>
                </section>
            </header>
        </>
    );
};

export default Header;