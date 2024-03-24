import Image from "next/image";
import Link from "next/link";
const Home = () => {
    return(
        <>
        <main>
            <div className="secao1">
                <section className="bem-vindo">
                    <article className="apresentacao">
                        <h1>
                            Bem vindo à Salesforce!
                        </h1>
                        <h3>
                            <p> A Salesforce é uma plataforma líder em soluções de gerenciamento de relacionamento com o cliente (CRM) e outras ferramentas de negócios baseadas na nuvem. </p>
                            <p>  Pense nela como um assistente multifuncional para negócios, ajudando a gerenciar vendas, atendimento ao cliente, marketing, e mais, tudo em um só lugar.</p>
                        </h3>
                    </article>
                    <Image src="/assets/imagemBemVindo.svg" alt="Imagem Bem Vindo" width="420" height="432"></Image>
                </section>
                <button className="botao-bem-vindo">
                    <p>Clique aqui  para experimentar gratuitamente!</p>
                </button>

                <Image src="/assets/fundoBemVindo.svg" alt="Background Bem vindo" width="100" height="313" className="background-bem-vindo"></Image>

            </div>
            <div>
                <h2>Conheça nossos produtos!</h2>
                <section>
                    <article>
                        <Image src="/assets/homeCustomer.svg" alt="Imagem  do Produto Customer 360" width="400" height="224"></Image>
                        <h3>
                        Transforme cada cliente em um amigo! Conheça, entenda e encante como nunca antes!
                        </h3>
                        <button>
                            <Link href="/Produtos" className="conhecaProdutos">Conheça o Customer 360</Link>
                        </button>
                    </article>
                    <article>
                        <Image src="/assets/imagemNuvemDados.svg" alt="Imagem do Produto Nuvem de Dados" width="400" height="224"></Image>
                        <h3>
                            Descubra os segredos dos seus dados e transforme informações em sucesso!
                        </h3>
                        <button>
                            <Link href="/Produtos" className="conhecaProdutos">Nuvem de dados</Link>                    
                        </button>
                    </article>
                    <article>
                        <section>
                        <Image src="/assets/imagemMarketing.svg" alt="Imagem do Produto Explore o Marketing" width="181" height="174"></Image>
                        <Image src="/assets/imagemMarketingBackground.svg" width="300" height="224"></Image>
                        </section>
                        <h3>
                            Impulsione seu marketing, personalize mensagens  e tenha resultados incríveis!
                        </h3>
                        <button>
                            <Link href="/Produtos" className="conhecaProdutos">Explore o Marketing</Link>
                        </button>
                    </article>
                </section>
                <button>
                    <Link href="/Produtos" className="conhecaProdutos">Ver produtos</Link>
                </button>depoimentoVipal
            </div>
            <div>
                <h2>Depoimentos de Clientes</h2>
                <section className="botoes-depoimentos">
                    <Link href="/Home">
                        <Image src="/assets/depoimentoTigre.svg" alt="Logo Tigre" width="60" height="60"></Image>
                    </Link>
                    <Link href="/Home">
                        <Image src="/assets/depoimentoVipal.svg" alt="Logo Vipal" width="60" height="60"></Image>
                    </Link>
                    <Link href="/Home">
                        <Image src="/assets/depoimentoSamup.svg" alt="Logo Samup" width="60" height="60"></Image>
                    </Link>
                    <Link href="/Home">
                        <Image src="/assets/depoimentoGympass.svg" alt="Logo Gympass" width="60" height="60"></Image>
                    </Link>
                </section>
                <section>
                    <article>
                        <Image src="/assets/ImagemTigre2.svg" alt="Imagem Tigre" width="276" height="249"></Image>    
                        <h3>
                            “O fato de o catálogo de conectores da MuleSoft contemplar os principais ERPs do mercado foi um diferencial na hora escolhermos a solução.”                    </h3>
                        <h3>
                            EDUARDO MAFRA PEREIRA - ARQUITETO DE INTEGRAÇÕES DO GRUPO TIGRE                    </h3>
                    </article>
                    <article>
                        <Image src="/assets/imagemVipal.svg" alt="Imagem Vipal" width="276" height="249"></Image>
                        <h3>
                            “Com a implementação da solução da Salesforce, pudemos centralizar todos os dados de nossos clientes dos últimos cinco anos em uma única plataforma, possibilitando que nossas equipes comerciais tenham as informações mais importantes em mãos e sejam mais assertivas em suas abordagens.”                    </h3>
                        <h3>
                            LEANDRO RIGON, DIRETOR DE NEGÓCIOS INTERNACIONAIS DA VIPAL BORRACHAS.                    </h3>
                    </article>
                    <article>
                        <Image src="/assets/imagemSumUp.svg" alt="Imagem SumUp" width="276" height="249"></Image>
                        <h3>
                            “Para a SumUp, é extremamente importante fornecermos soluções de forma rápida para nossos clientes. Com o franco crescimento da nossa atuação e do nosso portfólio de produtos no país, a Salesforce foi a parceira perfeita, pois nos ajudou neste processo de automação e nos equipou com uma ferramenta escalável e que acompanha nosso desenvolvimento ao longo dos anos.”                    </h3>
                        <h3>
                            LUCAS SORANO, HEAD DE SALESFORCE NA SUMUP                    
                        </h3>
                    </article>
                    <article>
                        <Image src="/assets/imagemGympass.svg" alt="Imagem Gympass" width="276" height="249"></Image>
                        <h3>
                            “Após a adoção de soluções Salesforce, pudemos trabalhar de forma muito mais objetiva e direcionada graças à qualidade dos dados e insights que as ferramentas nos oferecem.”
                        </h3>
                        <h3>
                            MARINA MICHEL - DIRETORA DE GLOBAL SALES PROJECTS DO GYMPASS
                        </h3>
                    </article>
                </section>
            </div>     
        </main>   
        </>
    )
  }
  export default Home;