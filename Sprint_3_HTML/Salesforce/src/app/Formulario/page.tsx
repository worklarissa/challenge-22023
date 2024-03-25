import Link from "next/link"

const Forms = () => {
    return (
        <>
            <div>
                <h1>Como podemos ajudar você?</h1>
                <p>
                    Se tiver qualquer dúvida sobre nossos produtos, preços ou como começar a usar, estamos aqui para isso!
                    Nossos especialistas adorariam orientá-lo no caminho certo para o sucesso.
                </p>
                <p>
                    Quer conversar? É só preencher o formulário aqui ao lado ou, se preferir, você pode ligar para
                    0800 891 1887!
                </p>
                <span>Já é cliente? Visite o link abaixo:</span>
                <Link href=".\">Faturamento e Suporte Técnico</Link>
            </div>
            <div>
                 <form >
                    <label>
                    Nome
                    <input type="text" name="nome"/>
                    </label>
                    <label>
                    Email Corporativo
                    <input type="email" name="email"/>
                    </label>
                    <label>
                    Telefone
                    <input type="text" name="telefone"/>
                    </label>
                    <label>
                    Empresa
                    <input type="text" name="empresa"/>
                    </label><label>
                    Pais/Região
                    <input type="text" name="pais"/>
                    </label>
                    <label>
                    Perguntas/Comentários
                    <input type="text" name="perguntas"/>
                    </label>
                </form>

            </div>
        
        </>
    )

}

export default Forms