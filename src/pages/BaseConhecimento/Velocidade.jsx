import AtivarVelocidadeNaVia from "../../pages/BaseConhecimento/img/AtivarVelocidadeNaVia.png";
import ConfirmarRegraVelocidadeVia from "../../pages/BaseConhecimento/img/ConfirmarRegraVelocidadeVia.png";

export default function Velocidade() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Velocidade na Via</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Monitoramento de Velocidade</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Monitore velocidades excessivas e promova segurança na condução com alertas em tempo real.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                        </p>
                        <br/>
                        <p>
                            A funcionalidade "Velocidade na Via" foi desenvolvida para monitorar excessos de velocidade de forma mais precisa e dinâmica, criando regras baseadas na velocidade permitida em cada via, sem a necessidade de configurar uma velocidade máxima única para cada veículo.
                        </p>
                        <br/>
                        <p>
                            Essa solução tem sido cada vez mais requisitada no mercado devido aos diversos benefícios que proporciona. Destacamos alguns deles:
                        </p>
                        <br/>
                        <p>
                            🚫 Redução de Multas por Excesso de Velocidade: Aproximadamente 65% das multas são por excesso de velocidade. Com essa funcionalidade, seu cliente pode identificar de forma rápida e precisa, por meio de relatórios, os motoristas e veículos que frequentemente cometem essa infração, permitindo instruções corretivas.
                        </p>
                        <br/>
                        <p>
                            🚧 Redução de Acidentes: Ao monitorar e prevenir excessos de velocidade, essa solução ajuda a diminuir os índices de acidentes, mortes e invalidez causados por imprudência nas estradas.
                        </p>
                        <br/>
                        <p>
                            📦 Menor Sinistralidade de Carga: A diminuição da velocidade excessiva impacta diretamente na preservação da integridade da carga transportada.
                        </p>
                        <br/>
                        <p>
                            ⛽ Economia de Combustível: O controle mais rigoroso da velocidade contribui para uma redução significativa no consumo de combustível, uma das maiores despesas para os gestores de frota.
                        </p>
                        <br/>
                        <p>
                            🔧 Redução de Custos com Manutenção e Maior Disponibilidade dos Veículos: Com menos desgaste mecânico e menor incidência de manutenções emergenciais, os veículos permanecem mais tempo disponíveis para operação.
                        </p>
                        <br/>
                        <h2>Regra de negócio</h2>
                        <br/>
                        <p>
                            Esta funcionalidade está apenas disponível para clientes com acesso Tracking que contrataram o módulo <strong>“Velocidade na Via”</strong>.
                        </p>
                        <br/>
                        <p>
                            Para ativar a velocidade na via nos veículos, acesse as informações do veículo e habilite a opção <strong>Controlar velocidade da via</strong>.
                        </p>
                        <br/>
                        <img src={AtivarVelocidadeNaVia} alt="" />
                        <br/>
                        <h2>Confirmando a criação da regra</h2>
                        <br/>
                        <p>
                            Concluídas essas etapas, uma regra será criada no ambiente específico do cliente e associada a todos os veículos selecionados.

                            Para confirmar, basta acessar a opção "Regras" na base desse cliente (através da personificação) e verificar os detalhes:
                        </p>
                        <br/>
                        <img src={ConfirmarRegraVelocidadeVia} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
