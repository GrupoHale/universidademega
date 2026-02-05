import { Link } from "react-router-dom";

export default function Manutencao() {

    const styleLink = "bg-blue-500 text-white font-bold p-4 rounded-lg mb-4 block flex justify-center  hover:bg-blue-600"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Manutenções</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Gestão de Manutenção</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                       O módulo de Manutenção é uma ferramenta crucial para o gerenciamento eficiente dos serviços e peças dos veículos.
                    </p>
                    <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Projetado para assegurar que todas as manutenções sejam realizadas de forma oportuna, <strong>este módulo monitora o estado dos veículos e emite alertas quando uma manutenção está próxima</strong>, facilitando a gestão preventiva e contribuindo para a longevidade e segurança da frota.
                        </p>
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl mb-4">Tipos de Manutenção</h2>
                            
                            <p>
                                O módulo de Manutenção possui dois tipos distintos: Manutenção Básica e Manutenção Avançada.
                            </p>
                            <div>
                                <Link className={styleLink} to="/base-conhecimento/manutencao-basica">Manutenção Básica</Link>                            
                        
                                <Link className={styleLink} to="/base-conhecimento/manutencao-avancada">Manutenção Avançada</Link>
                            </div>
                            <h3 className="font-bold text-lg mb-2">Manutenção Básica</h3>
                        
                            <p>
                                Trata-se de um processo único e pontual. Após a conclusão dos serviços necessários, o controle é encerrado, e o veículo é considerado em conformidade até que surja uma nova necessidade de manutenção.
                            </p>
                            
                            <h3 className="font-bold text-lg mb-2">Manutenção Avançada</h3>

                            <p>
                                Diferente da Manutenção básica, a Manutenção Avançada opera em um ciclo contínuo de monitoramento. Após a conclusão de cada manutenção, o módulo automaticamente inicia um novo ciclo de controle, garantindo que o veículo mantenha-se continuamente em conformidade e preparado para as operações futuras.
                            </p>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl mb-4">Benefícios</h2>

                                <p>
                                    A utilização adequada do módulo de <strong>Manutenção</strong> traz uma <strong>série de vantagens que impactam diretamente a eficiência operacional e a durabilidade da frota.</strong> Ao automatizar e garantir a execução das manutenções preventivas, a empresa obtém diversos benefícios fundamentais para o seu desempenho:
                                </p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>
                                        <strong>Redução de Custos Operacionais:</strong> A manutenção preventiva automatizada diminui a ocorrência de falhas graves e evita reparos emergenciais, que costumam ser caros. Isso também contribui para prolongar a vida útil dos veículos, gerando economia a longo prazo.
                                    </li>
                                    <li>
                                        <strong>Aumento da Disponibilidade dos Veículos:</strong> Com alertas automáticos e monitoramento contínuo, o módulo assegura que os veículos estejam sempre prontos para operação. Isso minimiza paradas inesperadas, garantindo maior disponibilidade da frota e mantendo a eficiência nas operações diárias.
                                    </li>
                                    <li>
                                        <strong>Gestão Simplificada:</strong> O SSX automatiza o monitoramento e as intervenções necessárias, liberando as equipes de manutenção para se dedicarem a atividades mais estratégicas. Isso reduz a chance de falhas humanas e facilita o acompanhamento de prazos críticos.
                                    </li>
                                    <li>
                                        <strong>Conformidade e Registros Precisos:</strong> Todas as manutenções realizadas são devidamente documentadas, o que facilita o cumprimento de normas regulatórias. Além disso, esse histórico de manutenção é útil em auditorias e para gerar relatórios detalhados.
                                    </li>
                                    <li>
                                        <strong>Segurança e Confiabilidade:</strong> Manter os veículos em condições ideais de funcionamento melhora a segurança nas estradas, reduzindo o risco de acidentes. A confiabilidade da frota também aumenta, assegurando que os veículos ofereçam um serviço consistente e seguro.
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl mb-4">Cenários de aplicação</h2>
                                <p>
                                    Aqui estão alguns cenários de exemplo para a utilização deste módulo:
                                </p>
                                <ul className="list-disc list-inside space-y-2" >
                                    <li>
                                        <strong>Frotas de Transporte Urbano:</strong> Empresas de transporte público podem utilizar a Manutenção Avançada do SSX para garantir que veículos estejam sempre em boas condições, reduzindo falhas durante horários de pico e assegurando um serviço ininterrupto.
                                    </li>
                                    <li>
                                        <strong>Empresas de Logística e Entrega:</strong> Para empresas de logística, o módulo de Manutenção do SSX oferece alertas automáticos para intervenções pontuais, garantindo que os veículos estejam prontos para entregas, evitando atrasos e melhorando a satisfação do cliente.
                                    </li>
                                    <li>
                                        <strong>Frotas Industriais:</strong> Em ambientes industriais, o SSX monitora o desgaste de peças críticas, permitindo que a Manutenção Avançada inicie novos ciclos automaticamente após cada intervenção, prolongando a vida útil dos equipamentos e evitando interrupções nas operações.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl mb-4">Conclusão</h2>
                                <p>
                                    Com o módulo de <strong>Manutenção</strong>, as empresas de gestão de frotas podem transformar a manutenção de veículos em um processo eficiente, seguro e econômico, assegurando o máximo desempenho de seus ativos e a satisfação de seus clientes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}