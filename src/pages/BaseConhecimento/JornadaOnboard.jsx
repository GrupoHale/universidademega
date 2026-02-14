import CadastrarCargo from "../../pages/BaseConhecimento/img/CadastrarCargo.png"
import CadastrarCargo2 from "../../pages/BaseConhecimento/img/CadastrarCargo2.png"
import CadastrarPessoas from "../../pages/BaseConhecimento/img/CadastrarPessoas.png"
import CadastrarPessoas2 from "../../pages/BaseConhecimento/img/CadastrarPessoas2.png"
import CadastrarFolgas from "../../pages/BaseConhecimento/img/CadastrarFolgas.png"
import CadastrarFolgas2 from "../../pages/BaseConhecimento/img/CadastrarFolgas2.png"
import CadastrarFolgas3 from "../../pages/BaseConhecimento/img/CadastrarFolgas3.png"
import CadastrarFolgas4 from "../../pages/BaseConhecimento/img/CadastrarFolgas4.png"
import CadastrarFolgas5 from "../../pages/BaseConhecimento/img/CadastrarFolgas5.png"
import JornadaEscala from "../../pages/BaseConhecimento/img/JornadaEscala.png"
import CadastrarEscala from "../../pages/BaseConhecimento/img/CadastrarEscala.png"
import CadastrarEscala2 from "../../pages/BaseConhecimento/img/CadastrarEscala2.png"
import CadastrarEscala3 from "../../pages/baseConhecimento/img/CadastrarEscala3.png"
import CadastrarEscala4 from "../../pages/BaseConhecimento/img/CadastrarEscala4.png"
import TermoAjusteEscala from "../../pages/BaseConhecimento/img/TermoAjusteEscala.png"
import CadastrarEscala5 from "../../pages/BaseConhecimento/img/CadastrarEscala5.png"
import CadastrarMensagem2 from "../../pages/BaseConhecimento/img/CadastrarMensagem2.png"
import CadastrarMensagem3 from "../../pages/BaseConhecimento/img/CadastrarMensagem3.png"
import JornadaFuncoes from "../../pages/BaseConhecimento/img/JornadaFuncoes.png"
import MensagensCadastradas from "../../pages/BaseConhecimento/img/MensagensCadastradas.png"
import ChecklistGrupoMensagens from "../../pages/BaseConhecimento/img/ChecklistGrupoMensagens.png"
import GrupoMensagens from "../../pages/BaseConhecimento/img/GrupoMensagens.png"
import GrupoMensagens2 from "../../pages/BaseConhecimento/img/GrupoMensagens2.png"
import GrupoMensagens3 from "../../pages/BaseConhecimento/img/GrupoMensagens3.png"
import AcessarMenuVeiculos from "../../pages/BaseConhecimento/img/AcessarMenuVeiculos.png"
import GerarQRCode from "../../pages/BaseConhecimento/img/GerarQRCode.png"
import UnidadeRastreadaOnboard from "../../pages/BaseConhecimento/img/UnidadeRastreadaOnboard.png"
import AcessarMenuSSXOnboard from "../../pages/BaseConhecimento/img/AcessarMenuSSXOnboard.png"
import EditarAplicativo from "../../pages/BaseConhecimento/img/EditarAplicativo.png"
import JornadaSSXOnboard from "../../pages/BaseConhecimento/img/JornadaSSXOnboard.png"
import JornadaSSXOnboard2 from "../../pages/BaseConhecimento/img/JornadaSSXOnboard2.png"
import JornadaSSXOnboard3 from "../../pages/BaseConhecimento/img/JornadaSSXOnboard3.png"
import JornadaAcompanhamento from "../../pages/BaseConhecimento/img/JornadaAcompanhamento.png"
import JornadaAusenciaMenu from "../../pages/BaseConhecimento/img/JornadaAusenciaMenu.png"
import CadastrarAusencia from "../../pages/BaseConhecimento/img/CadastrarAusencia.png"
import CadastrarAusencia2 from "../../pages/BaseConhecimento/img/CadastrarAusencia2.png"
import JornadaAjuste from "../../pages/BaseConhecimento/img/JornadaAjuste.png"
import AjustarJornada from "../../pages/BaseConhecimento/img/AjustarJornada.png"
import AjustarJornada2 from "../../pages/BaseConhecimento/img/AjustarJornada2.png"
import AdicionarEtapaJornada from "../../pages/BaseConhecimento/img/AdicionarEtapaJornada.png"
import JornadaFechamento from "../../pages/BaseConhecimento/img/JornadaFechamento.png"
import JornadaCadastrarFechamento from "../../pages/BaseConhecimento/img/JornadaCadastrarFechamento.png"
import JornadaFechamento2 from "../../pages/BaseConhecimento/img/JornadaFechamento2.png"
import JornadaFechamento3 from "../../pages/BaseConhecimento/img/JornadaFechamento3.png"
import BancoDeHoras from "../../pages/BaseConhecimento/img/BancoDeHoras.png"
import RelatorioJornada from "../../pages/BaseConhecimento/img/RelatorioJornada.png"
import RelatorioJornada2 from "../../pages/BaseConhecimento/img/RelatorioJornada2.png"


export default function JornadaOnboard() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Jornada de trabalho com SSX Onboard</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-4">
                        Este material vai abordar o tema jornada de trabalho com o APP Onboard, dando a possibilidade de controle da jornada através de um aplicativo.
                    </p>

                    <p className="text-gray-700 mb-4" >
                        O App possui alertas em tempo real para melhor controle da jornada, e até mesmo um relatório com a folha de ponto do colaborador e um campo para assinatura.
                    </p>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl">Cadastrando o motorista:</h2>

                        <p>
                            Vamos iniciar cadastrando os motoristas que farão as suas respectivas jornadas.
                        </p>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl">Cargo de motorista:</h2>

                            <p>
                                No menu <strong>Pessoas</strong>, vamos começar cadastrando o cargo de motorista:
                            </p>

                            <img src={CadastrarCargo} alt="" />

                            <p>
                                O cargo do motorista precisa levar a função de motorista:
                            </p>

                            <img src={CadastrarCargo2} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl">Cadastro do usuário:</h2>

                            <img src={CadastrarPessoas} alt="" />

                            <p>
                                Após inserir o cargo, vamos criar a pessoa/usuário que será o motorista e não podemos de esquecer de associar ao cargo de motorista:
                            </p>

                            <img src={CadastrarPessoas2} alt="" />
                        </div>
                    </div>


                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Cadastrando calendário de folgas</h2>

                        <p>
                            Antes de cadastrar a escala dos colaboradores, devemos criar o calendário de folgas, pois ele será associado na escala:
                        </p>

                        <img src={CadastrarFolgas} alt="" />

                        <p>
                            Inicie clicando no "<strong>+</strong>" para inserir um novo calendário de folgas:
                        </p>

                        <img src={CadastrarFolgas2} alt="" />

                        <p>
                            Insira o nome do calendário, e em seguida, vamos clicar no "+" para inserir as folgas que farão parte desse calendário:
                        </p>

                        <img src={CadastrarFolgas3} alt="" />

                        <p>
                            Insira o nome do feriado, o tipo, a data e o destino das horas:
                        </p>

                        <div className="grid grid-cols-2" >
                            <img src={CadastrarFolgas4} alt="" />

                            <ul className="list-disc list-inside space-y-2 " >
                                <li>No destino das horas já vamos apontar como serão computadas as horas caso o colaborador tenha jornada nesse dia.</li>
                                <li>No calendário serão inseridas todas as folgas.</li>
                            </ul>

                            <p>
                                <strong>Observação 1: </strong>O calendário poderá ser organizado da forma que se achar melhor, como por exemplo: um para feriados nacionais, um para feriados regionais, um para feriados fixos, ou criar apenas um e inserir todos os feriados.
                            </p>
                        </div>

                        <div className="flex justify-center space-y-4">

                            <img src={CadastrarFolgas5} alt="" />

                            <strong>Observação 2: </strong>Para os finais de semana também podemos personalizar de acordo com a escala do colaborador. Se no sábado por exemplo ele possui jornada reduzida podemos lançar da seguinte maneira:
                        </div>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Cadastrando escala dos colaboradores</h2>

                        <img src={JornadaEscala} alt="" />

                        <p>
                            Agora iremos cadastrar a escala dos colaboradores, clicando no "+" para criar uma nova escala e em seguida daremos um nome a ela, inserindo suas restrições:
                        </p>

                        <img src={CadastrarEscala} alt="" />

                        <p>
                            Logo abaixo, ainda na primeira etapa vamos inserir as configurações dessa escala:
                        </p>

                        <img src={CadastrarEscala2} alt="" />

                        <p>
                            Mais abaixo terá o termo de ajuste:
                        </p>

                        <div className="grid grid-cols-2" >
                            <img className="h-80 w-100" src={CadastrarEscala3} alt="" />

                            <p>
                                No termo, além do texto padrão para o ajuste da jornada, pode ser inserido uma observação e a cidade.
                            </p>
                        </div>
                        <p>
                            Segue exemplo de como ficará:
                        </p>

                        <img src={TermoAjusteEscala} alt="" />

                        <p>
                            Ainda na escala, agora na segunda etapa, vamos associar os colaboradores que farão parte dessa escala:
                        </p>

                        <img src={CadastrarEscala4} alt="" />

                        <p>
                            E na terceira etapa do cadastro de escala, iremos selecionar qual ou quais dos calendários de folgas farão parte dessa escala:
                        </p>

                        <img src={CadastrarEscala5} alt="" />
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl">Cadastrando as mensagens de jornada</h2>

                        <img src={CadastrarMensagem2} alt="" />


                        <p>
                            <strong>Importante:</strong> As mensagens precisam ser criadas no acesso do cliente.
                        </p>

                        <p>
                            Vamos cadastrar as mensagens que serão utilizadas para a jornada do colaborador:
                        </p>

                        <img src={CadastrarMensagem3} alt="" />

                        <ul className="list-disc list-inside space-y-2">
                            <li>O sentido da mensagem precisa estar selecionado como: <strong>Equipamento para o portal</strong>, pois a mensagem sairá do onboard para o SSX.</li>
                            <li>Você pode inserir um <strong>código</strong> para as mensagens, isso ajudará a manter a ordenação delas.</li>
                            <li>Em <strong>Mensagem</strong>, vamos inserir o nome da mensagem que o colaborador vai selecionar.</li>
                            <li>As opções <strong>Subgrupo</strong> e <strong>Tipo</strong> já virão cadastradas na sua base como jornada de trabalho.</li>
                        </ul>

                        <p>
                            Na mesma tela, ainda mais abaixo, terá a opção <strong>Funções da jornada</strong>, que será a função escolhida para a mensagem que, de fato, vai determinar em qual momento da jornada o colaborador está:
                        </p>


                        <img src={JornadaFuncoes} alt="" />

                        <p>
                            Dessa mesma forma serão cadastradas as demais mensagens de jornada:
                        </p>

                        <img src={MensagensCadastradas} alt="" />
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Criando grupos de mensagens</h2>

                        <img src={ChecklistGrupoMensagens} alt="" />

                        <p>
                            Vamos clicar no "<strong>+</strong>" para criar um novo grupo de mensagens:
                        </p>

                        <img src={GrupoMensagens} alt="" />

                        <p>
                            Na primeira etapa vamos inserir o nome do grupo:
                        </p>

                        <img src={GrupoMensagens2} alt="" />

                        <p>
                            Vamos direto para a última etapa, pois precisamos associar ao grupo as mensagens que partem do equipamento (<strong>Onboard</strong>) para o portal (<strong>SSX</strong>), clicando no "<strong>+</strong>":
                        </p>

                        <img src={GrupoMensagens3} alt="" />

                        <p>
                            Depois que todas estiverem associadas, vamos clicar em Salvar e fechar.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-bold text-xl" >Gerando o QR Code do veículo e configurando sua identificação</h2>

                        <img src={AcessarMenuVeiculos} alt="" />

                        <p>
                            Em uma nova aba, vamos abrir o google e escrever "<strong>Gerador de QR Code</strong>", pode escolher qualquer um.
                        </p>

                        <p>
                            Esse QR Code será usado para que o motorista possa identificar qual veículo está dirigindo e assim conseguir registrar a sua jornada de trabalho.
                        </p>

                        <img src={GerarQRCode} alt="" />

                        <p>
                            Em "<strong>Dados da unidade rastreada</strong>", no <strong>ID do motorista</strong>, precisa estar selecionado <strong>Motorista fixo</strong>.
                        </p>

                        <img src={UnidadeRastreadaOnboard} alt="" />
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Vinculando o grupo de mensagens ao APP</h2>

                        <img src={AcessarMenuSSXOnboard} alt="" />

                        <p>
                            No cadastro do aplicativo, vamos selecionar o Grupo de mensagens criado:
                        </p>

                        <div className="grid grid-cols-2">
                            <img src={EditarAplicativo} alt=""/>

                            <div className="space-y-4">
                                <p>
                                    <strong>Observação:</strong> O aplicativo onboard precisa estar vinculado a uma placa ou se o usuário for o responsável é necessário realizar a leitura do QR code para identificar qual veículo ele está utilizando.
                                </p>

                                <p>
                                    Outra opção é colocar a pessoa como responsável e habilitar o rastreamento do APP, porém essa opção gera a cobrança de uma nova unidade rastreada.
                                </p>

                                <p>
                                    <strong>Dica:</strong> No cadastro do APP Onboard tem uma opção para "<strong>Remover o vínculo entre o motorista e o veículo ao deslogar</strong>". Essa função é importante para que o motorista não fique vinculado ao veículo após finalizar o seu serviço.
                                </p>

                            </div>
                        </div>
                        <p>
                            Desta forma, no aplicativo aparecerá desta forma:
                        </p>

                        <img className="w-80 m-2" src={JornadaSSXOnboard} alt=""/>

                    </div>

                    <div className="space-y-4">
                        <h2 className="font-bold text-xl">Múltiplas jornadas</h2>

                        <p>
                            É possível, no mesmo aplicativo onboard, realizar a jornada de até dois colaboradores (ex.: motorista e ajudante).
                        </p>

                        <p>
                            Para isso após o primeiro e principal usuário se logar, o próximo colaborador poderá se logar também:
                        </p>


                        <div className="flex">
                            <img className="w-80 mr-2" src={JornadaSSXOnboard2} alt="" />

                            <p>
                                Ao clicar no desenho conforme imagem ao lado, irá aparecer uma tela para adicionar o próximo colaborador.
                            </p>
                        </div>

                        <div className="flex">
                            <img  className="w-80 mr-2" src={JornadaSSXOnboard3} alt="" />

                            <p>
                                Ao clicar no botão de "+" no canto inferior da tela, irá abrir a tela para inserir os dados do próximo colaborador.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-4">
                        <h2 className="font-bold text-xl" >Acompanhamento da jornada em tempo real</h2>
                        
                        <p>
                            Na tela inicial do dashboard operacional, o cliente consegue acompanhar as jornadas que estão em aberto:
                        </p>
                        
                        <img src={JornadaAcompanhamento} alt="" />
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Controle de ausências</h2>

                        <img src={JornadaAusenciaMenu} alt="" />

                        <p>
                            O controle de ausência é utilizado para registrar e justificar as ausências dos colaboradores.
                        </p>

                        <p>
                            Dependendo da configuração da escala, algumas faltas podem ser registradas automaticamente pelo sistema. Essas ausências podem, posteriormente, ser justificadas ou permanecer como faltas não justificadas.
                        </p>

                        <p>
                            Além disso, o controle de ausência permite o registro manual de outros tipos de ausência, como consultas médicas, folgas compensadas com banco de horas, entre outros motivos.
                        </p>

                        <p>
                            Na imagem abaixo foi simulado um colaborador que se ausentou por 05h e teve então um abono parcial naquele dia:
                        </p>

                        <div className="grid grid-cols-2">
                            <img src={CadastrarAusencia} alt="" />

                            <p>
                                No caso de <strong>abono parcial</strong>, por exemplo, o colaborador pode ter apresentado uma declaração médica que justifique a ausência de parte da jornada, como 5 horas do dia de trabalho. Nesses casos, é possível registrar o abono correspondente e anexar o documento comprobatório diretamente no sistema.
                            </p>
                        </div>
                        
                            <p>
                                Outra situação que será apresentada na próxima imagem será de um colaborador que recebeu uma falta:
                            </p>

                            <img src={CadastrarAusencia2} alt="" />
                    </div>

                    <div>
                        <h2 className="font-bold text-xl" >Ajustar jornada de trabalho</h2>
    
                        <img src={JornadaAjuste} alt="" />

                        <p>
                            O ajuste de jornada servirá para sempre que o colaborador inserir uma mensagem errada ou até mesmo quando houver esquecimento por parte do colaborador de registrar uma etapa ou toda a sua jornada de trabalho.
                        </p>

                        <p>
                            Ao clicar no menu de ajustar a jornada vai abrir uma tela com todas as jornadas que ainda não passaram pelo período de fechamento (vamos abordar esse assunto no próximo tópico), mas significa que essas jornadas ainda não foram consolidadas:
                        </p>

                        <img src={AjustarJornada} alt="" />

                        <p>
                            Podemos selecionar nessa tela acima a jornada que gostaríamos de ajustar e realizar o ajuste, ou clicar no sinal do + e inserir uma nova jornada de forma manual:
                        </p>

                        <img src={AjustarJornada2} alt="" />

                        <p>
                            Ao clicar no + vou selecionar as mensagens da jornada:
                        </p>

                        <div>

                        </div>


                        <div className="flex" >
                            <img src={AdicionarEtapaJornada} alt="" />

                            <p>
                                É possível cadastrar mais motivos clicando no ícone ao lado do motivo.
                            </p>    
                        </div>
                    </div>

                    <div className="space-y-4" >
                        <h2>Criando o período de fechamento</h2>

                        <img src={JornadaFechamento} alt="" />

                        <p>
                            O <strong>período de fechamento</strong> é essencial para consolidar a jornada de trabalho dos colaboradores. Após a realização de todos os ajustes, como correções de ponto e justificativas de ausência, o fechamento permite calcular e reunir todas as horas trabalhadas em um único relatório consolidado.
                        </p>

                        <p>
                            O cadastro de um novo período de fechamento só pode ser iniciado a partir do dia seguinte ao término do último período.
                        </p>

                        <p>
                            Por exemplo: se o fechamento anterior foi de 28/12 a 27/01, o próximo período começará automaticamente em 28/01 e seguirá até 27/02.
                        </p>

                        <div className="grid grid-cols-2" >
                            <img src={JornadaCadastrarFechamento} alt="" />
                            
                            <p>
                                O vencimento do banco de horas é a data limite que aquele banco, do período em questão, vencerá. Neste caso, será necessário pagar ou dar folga ao colaborador.
                            </p>
                        </div>

                        <p>
                            Depois de salvar, na segunda etapa do período de fechamento, precisamos vincular os motoristas ao fechamento:
                        </p>

                        <div>
                            <img src={JornadaFechamento2} alt="" />

                            <p>
                                Na imagem ao lado, destaquei com setas uma informação importante: quando o colaborador possui saldo no banco de horas, a empresa pode registrar a baixa diretamente nessa tela, definindo se esse saldo será <strong>pago</strong> ou <strong>abonado</strong>.
                            </p>

                            <p>
                                O mesmo procedimento se aplica quando o saldo de horas estiver <strong>negativo</strong> — a empresa pode optar por abonar a diferença, conforme sua política interna.
                            </p>
                        </div>

                        <p>
                            Já na imagem abaixo, demonstrei um abono das horas negativas e um pagamento das horas positivas:
                        </p>

                        <div className="grid grid-cols-2" >
                            <img src={JornadaFechamento3} alt="" />
                            
                            <div className="space-y-4">
                                <p>
                                    <strong>Observação 1:</strong> Se não for possível vincular um motorista, provavelmente há alguma pendência na jornada — como um dia em aberto ou ausência no último período de fechamento. Nesse caso, verifique a jornada dele individualmente na tela de ajuste e confirme se ele está incluído no último fechamento.
                                </p>

                                <p>
                                    <strong>Observação 2:</strong> Após o fechamento de um período, não é possível editar as jornadas compreendidas por ele ou por fechamentos anteriores. Se for necessário algum ajuste, será preciso excluir o fechamento, corrigir as informações e, em seguida, refazer o fechamento.
                                </p>
                            </div>
                        </div>

                        <p>
                            O banco de horas do colaborador também pode ser consultado no menu <strong>Pessoas</strong>, diretamente no cadastro do motorista:
                        </p>

                        <img src={BancoDeHoras} alt="" />

                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Relatórios de jornada de trabalho</h2>

                        <p><strong>Na aba Relatórios</strong>, vamos encontrar 3 relatórios de jornada de trabalho:</p>

                        <ul className="list-disc list-inside" >
                            <li className="font-bold" >Etapas das Jornadas de Trabalho</li>
                            <p>Esse relatório detalha cada <strong>etapa da jornada</strong> do colaborador dentro do período selecionado no filtro. Ele mostra, por exemplo, quanto tempo foi dedicado à função de <strong>condução</strong>, além do <strong>local</strong> (endereço) onde cada etapa foi registrada.</p>

                            <li className="font-bold" >Jornada de Trabalho Consolidado Diário</li>
                            <p>Apresenta a jornada de trabalho <strong>consolidada por dia</strong>, permitindo visualizar o total de horas trabalhadas por colaborador em cada data. É ideal para acompanhar a jornada <strong>dia a dia</strong> e verificar padrões ou inconsistências.</p>


                            <li className="font-bold" >Consolidado por Colaborador</li>
                            <p>Esse relatório exibe o <strong>total consolidado da jornada de trabalho</strong> por colaborador dentro do período selecionado, sem detalhar por data. Ele é útil para uma visão <strong>resumida</strong> do desempenho ou da carga horária total em um determinado intervalo de tempo.</p>
                        </ul>

                        <p>
                            Ao ser exportado em PDF, terá um campo para a assinatura do colaborador:
                        </p>

                        <img src={RelatorioJornada} alt="" />

                        <img src={RelatorioJornada2} alt="" />

                    </div>

                </div>
            </div>
        </div>
    )
}