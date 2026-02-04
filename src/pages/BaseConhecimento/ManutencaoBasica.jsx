import AcessarManutencao from "../../pages/BaseConhecimento/img/AcessarManutencao.png";
import AcessarManutencao2 from "../../pages/BaseConhecimento/img/AcessarManutencao2.png";
import AcessarManutencao3 from "../../pages/BaseConhecimento/img/AcessarManutencao3.png";
import AcessarManutencao4 from "../../pages/BaseConhecimento/img/AcessarManutencao4.png";
import CadastrarManutencao from "../../pages/BaseConhecimento/img/CadastrarManutencao.jpg";
import CadastrarManutencao2 from "../../pages/BaseConhecimento/img/CadastrarManutencao2.jpg";
import CadastrarManutencao3 from "../../pages/BaseConhecimento/img/CadastrarManutencao3.jpg";
import CadastrarManutencao4 from "../../pages/BaseConhecimento/img/CadastrarManutencao4.jpg";
import CadastrarManutencao5 from "../../pages/BaseConhecimento/img/CadastrarManutencao5.jpg";
import CadastrarManutencao6 from "../../pages/BaseConhecimento/img/CadastrarManutencao6.jpg";
import CadastrarManutencao7 from "../../pages/BaseConhecimento/img/CadastrarManutencao7.jpg";
import CadastrarManutencao8 from "../../pages/BaseConhecimento/img/CadastrarManutencao8.jpg";
import CadastrarManutencao9 from "../../pages/BaseConhecimento/img/CadastrarManutencao9.jpg";
import CadastrarManutencao10 from "../../pages/BaseConhecimento/img/CadastrarManutencao10.jpg";
import CadastrarManutencao11 from "../../pages/BaseConhecimento/img/CadastrarManutencao11.jpg";
import CadastrarManutencao12 from "../../pages/BaseConhecimento/img/CadastrarManutencao12.jpg";
import CadastrarManutencao13 from "../../pages/BaseConhecimento/img/CadastrarManutencao13.jpg";
import CadastrarManutencao14 from "../../pages/BaseConhecimento/img/CadastrarManutencao14.jpg";
import CadastrarManutencao15 from "../../pages/BaseConhecimento/img/CadastrarManutencao15.jpg";
import CadastrarManutencao16 from "../../pages/BaseConhecimento/img/CadastrarManutencao16.jpg";
import RelatorioDeManutencao from "../../pages/BaseConhecimento/img/RelatorioDeManutencao.png";
import RelatorioDeManutencao2 from "../../pages/BaseConhecimento/img/RelatorioDeManutencao2.png";
import DashboardManutencao from "../../pages/BaseConhecimento/img/DashboardManutencao.png";

export default function ManutenncaoBasica() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Manutenção Básica</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full">
                    </div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Com este módulo, será possível agendar manutenções preventivas e registrar manutenções corretivas nos veículos. Todos os registros ficarão salvos e poderão ser consultados posteriormente por meio de relatórios.
                    </p>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Cadastrando uma nova manutenção</h2>
                            <img src={AcessarManutencao} alt="" className="w-full h-auto rounded-lg shadow-md" />
                            <p>
                                Selecione o veículo que deseja cadastrar a manutenção.
                            </p>
                            <img src={AcessarManutencao2} alt="" className="w-full h-auto rounded-lg shadow-md" />
                            <p>
                                Ao acessar o menu de cadastro de veículo, na terceira etapa iniciamos o módulo de manutenção básico.
                            </p>
                            <p>
                                Para inserir uma nova manutenção, vamos clicar no +, conforme imagem abaixo:
                            </p>
                            <img src={AcessarManutencao3} alt="" className="w-full h-auto rounded-lg shadow-md" />
                            <p>
                                Ao clicar no <strong>+</strong>, temos duas opções. São elas:
                            </p>
                            <img src={AcessarManutencao4} alt="" className="w-full h-auto rounded-lg shadow-md" />
                            <ul className="space-y-2">
                                <li><strong>Planejar uma manutenção:</strong> Essa opção é utilizada para realizar um planejamento de uma manutenção</li>
                                <li><strong>Realizar uma manutenção:</strong> Essa opção é para realizar uma manutenção de forma imediata.</li>
                            </ul>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Planejando uma manutenção</h2>

                            <p>
                                Vamos iniciar o cadastro de um planejamento de uma manutenção, se atente aos campos para preenchimento, sendo os com ( * ) obrigatórios.
                            </p>
                            <p>
                                O primeiro campo a ser preenchido é o nome da manutenção, citei como exemplo a “Troca de óleo”.
                            </p>
                            <img src={CadastrarManutencao} alt="" />
                            <p>
                                O segundo campo a ser preenchido é o tipo, a manutenção pode ser classificada em 5 tipos, conforme imagem abaixo:
                            </p>
                            <img src={CadastrarManutencao2} alt="" /> 
                            <ul className="space-y-2 list-disc list-inside ">
                                <li><strong>Detectiva:</strong> A manutenção detectiva é a atuação efetuada em sistemas de proteção ou comando, buscando detectar falhas ocultas ou não perceptíveis ao pessoal de operação e manutenção.</li>
                                <li><strong>Corretiva:</strong> A manutenção corretiva é uma atividade de manutenção realizada para superar as falhas ou danos encontrados durante o período de manutenção preventiva.</li>
                                <li><strong>Preventiva:</strong> A manutenção preventiva visa à correção de falhas em máquinas e equipamentos antes mesmo que elas aconteçam. Isso evita prejuízos e riscos de interrupção da produção.</li>
                                <li><strong>Preditiva:</strong> A manutenção preditiva é baseada na tentativa de definir o estado futuro de um equipamento ou sistema, por meio dos dados coletados ao longo do tempo por uma instrumentação específica, verificando e analisando a tendência de variáveis do equipamento.</li>
                                <li><strong>Legal:</strong> A manutenção legal é responsável por toda a parte de documentação da frota como: IPVA, seguro, licenças, entre outros.</li>
                            </ul>
                            <p>
                                Em seguida, vamos selecionar o tipo de controle da manutenção:
                            </p>
                            <img src={CadastrarManutencao3} alt="" />
                            <ul  className="space-y-2" >
                                <li><strong>Por quilometragem:</strong> o controle da manutenção passa a ser feito pela quilometragem rodada do veículo.</li>
                                <li><strong>Por horas de uso:</strong> o controle é definido com base nas horas reais de funcionamento do motor, medidas pelo horímetro do veículo.</li>
                                <li><strong>Por meses:</strong> o controle é feito em meses.</li>
                            </ul>
                            <p>
                                O campo “Prevista para”, será modulado de acordo com o tipo de controle que for selecionado:
                            </p>
                            <img src={CadastrarManutencao4} alt="" />
                            <p>
                                Como podemos ver na imagem acima, foi inserido como exemplo que a próxima manutenção da troca de óleo será programada baseada no odômetro atual do veículo, por exemplo:
                            </p>
                            <p>
                                Se o veículo está atualmente com 45.000 km rodados e eu quero que a manutenção ocorra quando atingir 55.000 km, devo preencher exatamente o valor de 55.000 km no campo correspondente.
                            </p>
                            <p>
                                O próximo campo a ser preenchido é o de observação, ele é um campo opcional e serve para inserir alguma informação sobre a manutenção.
                            </p>
                            <img src={CadastrarManutencao5} alt="" />
                            <p>
                                Após esse processo, a manutenção ficará no histórico do veículo pendente até que seja realizada, conforme imagem abaixo:
                            </p>
                            <img src={CadastrarManutencao6} alt="" />
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl" >Realizando uma manutenção</h2>
                                
                                <p>
                                    Vamos aprender agora a dar baixa em uma manutenção. Na tela de manutenção de veículos vamos selecionar a manutenção que será realizada:
                                </p>
                                <img src={CadastrarManutencao7} alt="" />
                                <p>
                                    Agora vamos aprender como dar baixa em uma manutenção. Na tela de Manutenção de Veículos, selecione a manutenção que será realizada. Em seguida, será exibida a seguinte tela:
                                </p>
                                <img src={CadastrarManutencao8} alt="" />
                                <p>
                                    Como podemos observar na imagem acima, o primeiro campo a ser preenchido é a data da realização da manutenção, em seguida será inserido o odômetro que o veículo recebeu a manutenção, esses dois campos são de preenchimento obrigatório.
                                </p>
                                <p>
                                    No campo “Mão de obra (R$)” será preenchido o valor que custou o serviço da manutenção, o campo “Peças (R$)” se refere ao valor gasto em peças para a realização do serviço e por fim, o campo “Horas trabalhadas” será inserido o tempo gasto para a realização da manutenção em questão.
                                </p>
                                <p>
                                    <strong> Observação:</strong> Os campos Mão de obra, Peças e Horas trabalhadas não são obrigatórios, porém seu preenchimento é importante para obter dados relacionados a valores e horas em relatório.
                                </p>
                                <p>
                                    Para finalizar a realização da manutenção, é preciso clicar no botão <strong>"salvar"</strong>.
                                </p>
                                <p>
                                    A manutenção passará a ter o status de realizada:
                                </p>
                                <img src={CadastrarManutencao9} alt="" />
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl">Realizando uma manutenção corretiva (Imediata)</h2>

                                <p>
                                    Algumas manutenções precisam ser feitas de imediato, ou seja, não houve um planejamento para que ela ocorresse.
                                </p>

                                <p>
                                    Para essa situação, no menu de manutenção no cadastro de veículo, vamos clicar na opção “Realizar uma manutenção”, conforme imagem abaixo:
                                </p>
                                <img src={CadastrarManutencao10} alt="" />
                                <p>
                                    Como podemos observar na imagem abaixo, o primeiro campo a ser preenchido é o nome da manutenção que será realizada.
                                </p>

                                <p>
                                    Em seguida, preencha o tipo da manutenção, o tipo de controle e o campo 'Prevista para', onde será informada a data planejada para a execução do serviço.
                                </p>

                                <p>
                                    Depois, informe a data em que a manutenção foi realizada e o odômetro do veículo no momento da execução. Todos esses campos são de preenchimento obrigatório.
                                </p>

                                <p>
                                    O campo 'Mão de obra (R$)' deve ser preenchido com o valor cobrado pelo serviço. Já o campo 'Peças (R$)' refere-se ao valor gasto com as peças utilizadas. No campo 'Horas trabalhadas', insira o tempo total dedicado à realização da manutenção. Esses três campos não são obrigatórios, mas é altamente recomendável preenchê-los para garantir dados mais completos nos relatórios de custo e produtividade.
                                </p>

                                <p>
                                    Após preencher todas as informações, clique no botão 'Salvar' para concluir o registro da manutenção.
                                </p>

                                <img src={CadastrarManutencao11} alt="" />

                                <p>
                                    Após salvar, a manutenção aparecerá como realizada.
                                </p>

                                <img src={CadastrarManutencao12} alt="" />
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl">Inserção de um anexo na Manutenção</h2>
                                
                                <p>
                                    É possível anexar arquivos referentes às manutenções como fotos, notas fiscais e certificados de garantia de peças.
                                </p>

                                <img src={CadastrarManutencao13} alt="" />

                                <p>
                                    Ao clicar em <strong>Anexo</strong> abrirá a seguinte página:
                                </p>

                                <img src={CadastrarManutencao14} alt="" />

                                <p>
                                    Vamos clicar no botão + para inserir o anexo:
                                </p>

                                <img src={CadastrarManutencao15} alt="" />

                                <p>
                                    Para finalizar, basta clicar no botão <strong>Salvar e fechar</strong>.
                                </p>
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl" >Excluindo uma manutenção</h2>
                                
                                <p>
                                    É possível também excluir uma manutenção, mesmo que já realizada.
                                </p>

                                <p>
                                    Para excluir, é necessário clicar ao lado da manutenção que será excluída, em seguida selecionar o botão excluir, conforme imagem abaixo:
                                </p>

                               <img src={CadastrarManutencao16} alt="" />
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl">Relatórios</h2>
                                
                                <p>
                                    O relatório de Manutenções de veículos traz todas as informações das manutenções do veículo.
                                </p>

                                <img src={RelatorioDeManutencao} alt="" />
                                <img src={RelatorioDeManutencao2} alt="" />
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl">Dashboard operacional</h2>
                                
                                <p>
                                    No Dashboard Operacional, será possível acompanhar as manutenções.
                                </p>

                                <p>
                                    <strong>Observação:</strong> As regras da plataforma para exibir as manutenções planejadas no Dashboard Operacional são:
                                </p>

                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Dias:</strong> 10</li>
                                    <li><strong>KM:</strong> 500</li>
                                    <li><strong>Horas:</strong> 800</li>
                                </ul>

                                <img src={DashboardManutencao} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}