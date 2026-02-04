import MenuManutencaoAvancada from '../../pages/BaseConhecimento/img/MenuManutencaoAvancada.png';
import CadastrarTipoManutencao from '../../pages/BaseConhecimento/img/CadastrarTipoManutencao.png';
import CadastrarTipoManutencao2 from '../../pages/BaseConhecimento/img/CadastrarTipoManutencao2.png';
import ItensDeManutencao from '../../pages/BaseConhecimento/img/ItensDeManutencao.png'
import CadastrarItemManutencao from '../../pages/BaseConhecimento/img/CadastrarItemManutencao.jpg'
import MenuCicloManutencao from '../../pages/BaseConhecimento/img/MenuCicloManutencao.png'
import CadastrarCicloManutencao from '../../pages/BaseConhecimento/img/CadastrarCicloManutencao.jpg'
import MenuPlanoManutencao from '../../pages/BaseConhecimento/img/MenuPlanoManutencao.png'
import CadastrarPlanoManutencao from '../../pages/BaseConhecimento/img/CadastrarPlanoManutencao.jpg'
import AssociarPlanoManutencao from '../../pages/BaseConhecimento/img/AssociarPlanoManutencao.png'
import AssociarPlanoManutencao2 from '../../pages/BaseConhecimento/img/AssociarPlanoManutencao2.png'
import AssociarPlanoManutencao3 from '../../pages/BaseConhecimento/img/AssociarPlanoManutencao3.png'
import RealizarManutencao from '../../pages/BaseConhecimento/img/RealizarManutencao.jpg'
import RealizarManutencao2 from '../../pages/BaseConhecimento/img/RealizarManutencao2.jpg'
import RealizarManutencao3 from '../../pages/BaseConhecimento/img/RealizarManutencao3.jpg'
import RealizarManutencao4 from '../../pages/BaseConhecimento/img/RealizarManutencao4.jpg'
import MenuMotivo from '../../pages/BaseConhecimento/img/MenuMotivo.jpg'
import CadastrarMotivo from '../../pages/BaseConhecimento/img/CadastrarMotivo.jpg'
import CancelamentoItem from '../../pages/BaseConhecimento/img/CancelamentoItem.jpg'
import RealizarManutencao5 from '../../pages/BaseConhecimento/img/RealizarManutencao5.jpg'
import RealizarManutencao6 from '../../pages/BaseConhecimento/img/RealizarManutencao6.jpg'
import RealizarManutencao7 from '../../pages/BaseConhecimento/img/Realizarmanutencao7.jpg'
import ExcluirManutencao from '../../pages/BaseConhecimento/img/ExcluirManutencao.jpg'
import RelatorioDeManutencao from '../../pages/BaseConhecimento/img/RelatorioDeManutencao.png'
import RelatorioDeManutencao2 from '../../pages/BaseConhecimento/img/RelatorioDeManutencao2.png'
import DashboardManutencao from '../../pages/BaseConhecimento/img/DashboardManutencao.png'


export default function ManutenncaoAvancada() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Manutenção Avançada</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full">
                    </div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                       O módulo de Manutenção Avançada é uma ferramenta crucial para o gerenciamento eficiente dos serviços e peças dos veículos.
                    </p>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Diferente da Manutenção básica, a Manutenção Avançada opera em um ciclo contínuo de monitoramento. Após a conclusão de cada manutenção, o módulo automaticamente inicia um novo ciclo de controle, garantindo que o veículo mantenha-se continuamente em conformidade e preparado para as operações futuras.
                        </p>
                        <p>
                            O módulo de manutenção avançado foi desenvolvido para otimizar a gestão de manutenções preventivas e corretivas, com foco na redução de custos operacionais e no aumento da vida útil dos veículos. Para iniciar o controle de manutenção de um veículo, é necessário vinculá-lo a um plano de manutenção.
                        </p>

                        <p>
                            Esse plano permite padronizar os procedimentos entre veículos de características semelhantes, facilitando o acompanhamento e execução das manutenções. Ele é composto por diversas etapas preventivas, cada uma contendo uma lista de itens que devem ser inspecionados ou substituídos em momentos específicos.
                        </p>

                        <p>
                            Os itens de manutenção são organizados em ciclos, que determinam a frequência com que cada item deve ser verificado ou trocado. Essa frequência pode ser definida com base na quilometragem percorrida, nas horas de funcionamento ou em um intervalo de tempo, como por exemplo a cada determinado número de meses.
                        </p>

                        <img src={MenuManutencaoAvancada} alt="" />
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl" >Regras de negócio</h2>

                            <p>
                                A manutenção avançada está disponível para clientes com o módulo Tracking e o módulo Manutenção habilitado, gerando cobrança apenas aos veículos que utilizam o módulo.
                            </p>
                        </div>
                        <div className='space-y-4' >
                            <h2 className="font-bold text-xl" >Cadastro de tipos de itens de manutenção   </h2>

                            <img src={CadastrarTipoManutencao} alt="" />

                            <p>
                                O tipo de manutenção serve para agrupar os itens de manutenção por afinidade. O campo função serve para informar ao sistema quando o item é uma peça ou um serviço.
                            </p>
                            
                            <img src={CadastrarTipoManutencao2} alt="" />
                            
                            <p><strong>Observação:</strong></p>

                            <ul className="list-disc list-inside space-y-2">
                                <li>Os tipos de itens criados pela central estarão disponíveis para serem utilizados pelo cliente final mas não poderão ser editados nem excluídos.</li>
                                <li>Tipos de manutenção em uso por algum item não poderão ser excluídos.</li>
                            </ul>
                        </div>
                        <div className="space-y-4">

                            <h2 className='font-bold'>Cadastro de itens de manutenção</h2>
                            
                            <img src={ItensDeManutencao} alt=""/>

                            <p>
                                O item de manutenção representa o que se deseja monitorar no processo da manutenção. Ele pode ser uma peça, um insumo, um serviço ou qualquer outra coisa que se deseje acompanhar de forma recorrente ou isolada.
                            </p>

                            <p>
                                Os itens podem ser cadastrados de forma genérica ou detalhada dependendo do nível de controle desejado.
                            </p>

                            <p className='font-bold'>Exemplos de itens genéricos:</p>

                            <ul className='list-disc list-inside space-y-2'>
                                <li>Fluidos;</li>
                                <li>Suspenção;</li>
                                <li>Documentação;</li>
                            </ul>

                            <p className='font-bold' >Exemplo de itens detalhados</p>

                            <ul className='list-disc list-inside space-y-2'>
                                <li>Óleo do motor Mobil 20W-50 - 1 Litro</li>
                                <li>Óleo de freio Bosch DOT4 - 500ml</li>
                                <li>Filtro de óleo do motor</li>
                                <li>Filtro de combustível</li>
                                <li>Troca de óleo de motor</li>
                                <li>Troca de óleo de freio</li>
                                <li>Verificação de óleo de transmissão</li>
                                <li>IPVA</li>
                            </ul>

                            <img src={CadastrarItemManutencao} alt="" />

                            <p>
                                Seguem os dados que serão preenchidos no cadastro de cada item:
                            </p>

                            <ul className='list-disc list-inside space-y-2' >
                                <li>Código (Para referência)</li>
                                <li>Nome</li>
                                <li>Tipo</li>
                                <li>Fabricante</li>
                                <li>Valor</li>
                                <li>Tempo de mão de obra (No caso de serviços)</li>
                                <li>Tempo de garantia (No caso de peças)</li>
                            </ul>

                            <h2 className='font-bold' >Observação:</h2>
                            
                            <ul className='list-disc list-inside space-y-2' >
                                <li>Itens de manutenção que estão sendo utilizados em algum ciclo de manutenção não poderão ser excluídos.</li>
                                <li>Os itens criados pela central estarão disponíveis para serem utilizados pelo cliente final mas não poderão ser editados nem excluídos. Somente os campos: <strong>Valor, Tempo de mão de obra</strong> e <strong>Tempo de garantia</strong> poderão ser editados ficando cada cliente final com o valor que desejar.</li>
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h2 className='font-bold text-xl'>Cadastro dos ciclos de manutenção</h2>

                            <img src={MenuCicloManutencao} alt="" />

                            <p>
                                Um ciclo de manutenção agrupa itens com a mesma frequência de verificação ou substituição. Estes deverão ser utilizados para gerar as etapas de um plano de manutenção.
                            </p>

                            <p>
                                A frequência de repetição do ciclo pode ser configurada por quilômetros percorridos, horas de uso ou meses.
                            </p>

                            <p>
                                Quando um item for adicionado ao ciclo poderá ser informada a quantidade que deverá ser utilizada na etapa de manutenção.
                            </p>

                            <img src={CadastrarCicloManutencao} alt="" />

                            <p className='font-bold' >Observação:</p>

                            <ul className='list-disc list-inside space-y-2' >
                                <li>Caso o controle seja feito por quilômetros, o campo será preenchido com a frequência de quilometragem que o ciclo terá.</li>
                            </ul>

                            <p>
                                Ex.: A troca de óleo é feita a cada 10.000kms rodados, então nesse caso o ciclo seria de 10.000kms e todos os itens que são feitos a cada 10.000kms entrarão nesse ciclo. O mesmo se aplica para os controles por horas de uso ou meses.
                            </p>

                            <p className='font-bold' >Observação:</p>

                            <ul className='list-disc list-inside' >
                                <li>Uma dica importante é que no cadastro do nome do ciclo tenha a informação do KM / hora de uso / meses que corresponde ao ciclo para facilitar a inclusão dos itens correspondentes ao plano.</li>
                            </ul>
                        </div>
                        <div className='space-y-4' >
                            <h2 className='font-bold text-xl' >Cadastro do plano de manutenção</h2>

                            <img src={MenuPlanoManutencao} alt=""/>

                            <p>
                                Um plano de manutenção agrupa todas as etapas de manutenção de um veículo.
                            </p>

                            <p>
                                Essas etapas podem ser controladas baseadas em quilometragem percorrida ou horas trabalhadas.
                            </p>

                            <p>
                                Em ambos os casos também se pode controlar as datas de manutenção de acordo com um período de tempo decorrido desde a última manutenção.
                            </p>

                            <p>
                                Cada plano de manutenção tem uma frequência de paradas que é determinada pelo ciclo com a maior frequência, ou seja menor quilometragem ou horas de uso.
                            </p>

                            <img src={CadastrarPlanoManutencao} alt="" />

                            <ul>
                                <li>O campo <strong>a cada (Km) ou (Meses)</strong> deve ser preenchido com base na menor quilometragem ou menor intervalo de tempo entre os itens do ciclo. Por exemplo, se algum item do ciclo exige troca a cada 5.000 km, esse será o valor que deve ser informado no campo.</li>
                                <li>O campo <strong>Quilômetro</strong> final é o tempo de vida útil do veículo, até quantos kms rodados do veículo será feito o controle da manutenção dele.</li>
                            </ul>

                            <p>
                                No campo Ciclo serão incluídos todos os ciclos que farão parte desse plano de manutenção.
                            </p>
                        </div>
                        <div className='space-y-4' >
                            <h2>Associação de um plano de manutenção à um veículo</h2>

                            <img src={AssociarPlanoManutencao} alt="" />

                            <p>
                                Depois de criado o plano de manutenção, no cadastro do veículo vamos associá-lo ao plano.
                            </p>

                            <img src={AssociarPlanoManutencao2} alt="" />

                            <p>
                                Ao clicar em Associar plano de manutenção, abrirá uma tela para selecionar qual plano o veículo fará parte, conforme imagem abaixo:
                            </p>

                            <img src={AssociarPlanoManutencao3} alt="" />

                            <p>
                                No campos <strong>Plano Inicial</strong>, informe a quilometragem imediatamente inferior à atual do veículo. Por exemplo: Se o veículo está com 15.342 km e os intervalos do plano são de 10.000 em 10.000, selecione 10.000, e não 20.000, pois ainda não foi atingida.
                            </p>

                            <p>
                                No campo <strong>Quilômetro</strong> inicial, deverá ser preenchido com a quilometragem inicial que o plano iniciará, ou seja, de acordo com a quilometragem atual do veículo.
                            </p>
                        </div>
                        <div className='space-y-4' >
                            <h2 className='font-bold text-xl'>Realizando uma manutenção</h2>

                            <p>Selecione um veículo</p>

                            <img src={AssociarPlanoManutencao} alt=""/>


                            <p>
                                Na terceira etapa do cadastro de veículo, aparecerão todas as manutenções doveículo. Conforme imagem abaixo:
                            </p>

                            <img src={RealizarManutencao} alt="" />
                        
                            <p>
                                Para realizar uma manutenção é necessário clicar na seta para baixo e clicar em realizar manutenção, conforme imagem:
                            </p>

                            <img src={RealizarManutencao2} alt="" />

                            <p>
                                Em seguida será necessário preencher os dados para a baixa da manutenção:
                            </p>

                            <img src={RealizarManutencao3} alt="" />

                            <p>
                                Como podemos observar na imagem acima, o primeiro campo a ser preenchido é a data da realização da manutenção.
                            </p>
                            
                            <p>
                                Em seguida será inserido o odômetro que o veículo recebeu a manutenção, esses dois campos são de preenchimento obrigatório.
                            </p>

                            <p>
                                No campo “Mão de obra (R$)” será preenchido o valor que custou o serviço da manutenção, o campo “Peças (R$)” se refere ao valor gasto em peças para a realização do serviço e por fim, o campo “Horas trabalhadas” será inserido o tempo gasto para a realização da manutenção em questão.
                            </p>

                            <p>
                                <strong>Observação:</strong> Os campos Mão de obra, Peças e Horas trabalhadas não são obrigatórios, porém seu preenchimento é importante para obter dados relacionados a valores e horas em relatório.
                            </p>

                            <p>
                                Para finalizar a realização da manutenção, é preciso clicar no botão Salvar e a manutenção passará a ter o status de realizada.
                            </p>
                        </div>
                        <div className='space-y-4'>

                            <h2 className='font-bold text-xl' >Cancelamento item da manutenção ou transferência para a próxima etapa</h2>

                            <p>
                                No momento da manutenção do veículo, por algum motivo o item pode ser cancelado ou transferido para a próxima manutenção, veja como fazer isso:
                            </p>

                            <img src={RealizarManutencao4} alt="" />

                            <p>
                                Depois de selecionar a opção desejada, será solicitado o motivo do cancelamento ou transferência, veja abaixo onde esses motivos são cadastrados:
                            </p>

                            <img src={MenuMotivo} alt="" />

                            <img src={CadastrarMotivo} alt="" />

                            <p>
                                Todos os motivos serão cadastrados conforme necessidade do cliente e selecionados no momento do cancelamento ou transferência.
                            </p>

                            <img src={CancelamentoItem} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Realizando uma manutenção corretiva (Imediata)</h2>

                            <p>
                                Algumas manutenções precisam ser feitas de imediato, ou seja, não houve um planejamento para que ela ocorresse.
                            </p>

                            <p>
                                Para essa situação, no menu de manutenção no cadastro de veículo, vamos clicar na opção “Realizar uma manutenção”, conforme imagem abaixo:
                            </p>

                            <img src={RealizarManutencao5} alt="" />

                            <ul className='list-disc list-inside space-y-2' >
                                <li>Como podemos observar na imagem abaixo, o primeiro campo a ser preenchido é o nome da manutenção que será realizada.</li>
                                <li>Em seguida, preencha o tipo da manutenção, o tipo de controle e o campo 'Prevista para', onde será informada a data planejada para a execução do serviço.</li>
                                <li>Depois, informe a data em que a manutenção foi realizada e o odômetro do veículo no momento da execução. Todos esses campos são de preenchimento obrigatório.</li>
                                <li>O campo 'Mão de obra (R$)' deve ser preenchido com o valor cobrado pelo serviço.</li>
                                <li>Já o campo 'Peças (R$)' refere-se ao valor gasto com as peças utilizadas.</li>
                                <li>No campo 'Horas trabalhadas', insira o tempo total dedicado à realização da manutenção.</li>
                            </ul>
                    
                            <p>
                               <strong>Observação:</strong> Esses três campos não são obrigatórios, mas é altamente recomendável preenchê-los para garantir dados mais completos nos relatórios de custo e produtividade.
                            </p>

                            <p>
                                Após preencher todas as informações, clique no botão 'Salvar' para concluir o registro da manutenção.
                            </p>
                            
                            <img src={RealizarManutencao6} alt="" />

                            <p>
                                Após salvar, a manutenção aparecerá como realizada.
                            </p>

                            <img src={RealizarManutencao7} alt="" />
                        </div>
                        <div className="space-y-4" >
                            <h2 className='font-bold text-xl' >Excluindo uma manutenção</h2>

                            <p>
                                É possível também excluir uma manutenção, mesmo que já realizada.
                            </p>

                            <p>
                                Para excluir, é necessário clicar ao lado da manutenção que será excluída, em seguida selecionar o botão excluir, conforme imagem abaixo:
                            </p>

                            <img src={ExcluirManutencao} alt="" />
                        </div>
                        <div className='space-y-4' >
                            <h2 className='font-bold text-xl'>Relatórios</h2>

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
    )
}