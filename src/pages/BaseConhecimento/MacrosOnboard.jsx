import ItensChecklist from "../../pages/BaseConhecimento/img/ItensChecklist.png"
import Checklist from "../../pages/BaseConhecimento/img/Checklist.png"
import Checklist2 from "../../pages/BaseConhecimento/img/Checklist2.png"
import Checklist3 from "../../pages/BaseConhecimento/img/Checklist3.png"
import ChecklistAtributos from "../../pages/BaseConhecimento/img/ChecklistAtributos.png"
import ChecklistMensagens from "../../pages/BaseConhecimento/img/ChecklistMensagens.png"
import ChecklistMensagens2 from "../../pages/BaseConhecimento/img/ChecklistMensagens2.png"
import ChecklistGrupoMensagens from "../../pages/BaseConhecimento/img/ChecklistGrupoMensagens.png"
import ChecklistGrupoMensagens2 from "../../pages/BaseConhecimento/img/ChecklistGrupoMensagens2.png"
import ChecklistGrupoMensagens3 from "../../pages/BaseConhecimento/img/ChecklistGrupoMensagens3.png"
import ChecklistCriarOnboard from "../../pages/BaseConhecimento/img/ChecklistCriarOnboard.png"
import OnboardQRCode from "../../pages/BaseConhecimento/img/OnboardQRCode.png"
import AcessarOnboard from "../../pages/BaseConhecimento/img/AcessarOnboard.png"


export default function MacrosOnboard() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Macros com SSX Onboard</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Mensagens predefinidas </h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Crie checklist personalizados com o aplicativo SSX Onboard.
                    </p>
                    <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                        </p>

                        <div className="space-y-4">
                            <h2 className="font-bold text-xl">Premissas</h2>

                            <p>
                                Este material foi elaborado para instruir os usuários frotistas do SSX sobre os benefícios, a construção e a utilização do checklist na gestão de frotas. O acesso a essa funcionalidade no SSX depende da contratação dos módulos Logistics, Performance e/ou Jornada de Trabalho.
                            </p>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl">Introdução</h2>

                            <p>
                                No contexto da gestão de frotas, o checklist é um recurso importante para o controle de danos e a identificação de defeitos nos veículos. Esse procedimento é realizado pelo motorista, que responde a um questionário sobre o status operacional de diversos itens do veículo. <strong>O objetivo é verificar a integridade do veículo</strong> antes do início de sua utilização.
                            </p>

                            <p>
                                Abaixo estão alguns itens que um checklist pode abranger:
                            </p>

                            <div className="flex justify-center" >
                                <img src={ItensChecklist} alt="" />
                            </div>

                            <p>
                                A frota que utiliza um sistema de checklist em sua rotina <strong>ganha em segurança, eficiência operacional, economia de custos</strong> e gestão de recursos. Além disso, transmite uma <strong>imagem profissional e de responsabilidade da empresa</strong>, influenciando positivamente a percepção dos clientes e parceiros. As operações de frotas que utilizam o SSX podem criar seus próprios checklists na plataforma e usar o aplicativo Onboard como ferramenta para o motorista registrar e comunicar as informações de cada checklist.
                            </p>

                            <p>
                                As respostas dos checklists formam um <strong>relatório personalizado</strong> que armazena esse histórico, deixando-o disponível para consultas e análises no relatório de mensagens.
                            </p>

                            <p>
                                Abaixo estão alguns itens que um checklist pode abranger:
                            </p>

                            <img src={Checklist} alt="" />            
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >1 - Criar atributos</h2>

                            <p>
                                Os <strong>Atributos de mensagens</strong> são as perguntas do formulário que deverão ser respondidas pelo motorista no aplicativo Onboard durante a checagem do veículo.
                            </p>


                            <p>
                                A escolha desses atributos deve ser personalizada com base em uma análise cuidadosa dos tipos de veículos, do tipo de operação e das rotas de transporte, sempre com o objetivo desse controle em mente.
                            </p>

                            <div className="flex justify-center" >
                                <img src={Checklist2} alt="" />
                            </div>



                            <img src={Checklist3} alt="" />

                            <img src={ChecklistAtributos} alt="" />

                            <ul className="list-disc list-inside space-y-2" >
                                <li>A <strong>Descrição</strong> é onde deve ser inserida a pergunta</li>
                                <li>No <strong>Tipo</strong> é definida a estrutura da resposta</li>
                                <li>Em <strong>Opção</strong> devem ser estabelecidas as alternativas da resposta no mesmo formato do exemplo mostrado no campo</li>
                            </ul>

                            <p>
                                Após definir as três condições acima para o atributo clique em Salvar. Quando criar todos os atributos clique em Salvar e fechar e siga para a próxima etapa.
                            </p>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >2 - Criar mensagens</h2>

                            <p>
                                As <strong>Mensagens</strong> são estruturas utilizadas para agrupar os atributos cadastrados na fase anterior e para determinar algumas configurações de comunicação, como o ponto de origem das mensagens e o local de exibição das respostas no SSX, além de definir se cada resposta é obrigatória ou não.
                            </p>

                            <img src={ChecklistMensagens} alt="" />

                            <p>
                                Com a tela abaixo aberta clique + no para cadastrar uma mensagem.
                            </p>

                            <img src={ChecklistMensagens2} alt="" />

                            <ul className="list-decimal list-inside space-y-2" >
                                <li>Escolha a opção Equipamento para o portal</li>
                                <li>Em Mensagens digite o nome do checklist</li>
                                <li>Em Subgrupo coloque a opção Informativo</li>
                                <li>Em Tipo coloque a opção Informativo</li>
                                <li>Marque a caixa box para gerar o aviso de recebimento</li>
                                <li>Marque a caixa box para ter as respostas no chat</li>
                                <li>Selecione o atributo</li>
                                    <ul className="list-disc list-inside space-y-2" >
                                        <li>Defina se a resposta é obrigatória marcando a caixa seletora. Depois clique + para adicionar a pergunta na lista do formulário</li>
                                    </ul>
                            </ul>

                            <p>
                                <strong>*Atenção</strong> todos os atributos devem ser inseridos na mesma mensagem.
                            </p>

                            <p>
                                Clique em Salvar e fechar para concluir a criação da mensagem.
                            </p>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >3 - Incluir mensagens em um grupo</h2>
                            
                            <p>
                                O <strong>Grupo de mensagens</strong> é uma organização sistêmica que agrupa as mensagens a serem utilizadas em um mesmo aplicativo.
                            </p>

                            <img src={ChecklistGrupoMensagens} alt="" />

                            <p>
                                Com a tela Grupos de mensagem aberta clique no + para cadastrar um novo grupo.
                            </p>

                            <img src={ChecklistGrupoMensagens2} alt="" />

                            <ul className="list-decimal list-inside space-y-2" >
                                <li>Digite um nome para o grupo e clique em Salvar</li>
                                <li>Acesse o menu lateral Grupo de mensagens do equipamento para o Portal</li>
                                <img src={ChecklistGrupoMensagens3} alt="" />
                                <li>Selecione a mensagem do checklist, adicione na lista clicando no + depois clique em Salvar e fechar.</li>
                            </ul>

                        </div>

                        <div className="space-y-4" >
                            <h2>Criando App Onboard</h2>

                            <ul className="list-decimal list-inside space-y-2" >
                                <li>O aplicativo Onboard deve ser criado pela Central, o cliente não consegue realizar essa criação em sua base.</li>
                                <li>O aplicativo Onboard precisa estar vinculado a uma placa ou, se o usuário for o responsável, é necessário realizar a leitura do QR code para identificar qual veículo ele está utilizando. Outra opção é colocar a pessoa como responsável e habilitar o rastreamento do APP, porém essa opção gera a cobrança de uma nova unidade rastreada.</li>
                            </ul>

                            <p>
                                Após a criação do aplicativo, na tela inicial será selecionada a opção de exibir QR Code:
                            </p>

                            <div className="flex justify-center space-y-4 " >
                                <img src={ChecklistCriarOnboard} alt="" />
                            </div>

                            <p>
                                Ao clicar nessa opção, será exibido o QR code de ativação do aplicativo.
                            </p>

                            <div className="flex flex-col items-center space-y-4 " >
                                <img  className="w-80 h-50" src={OnboardQRCode} alt="" />
                                <p className="font-bold text-lg" >
                                    O usuário irá baixar o app na loja Google Play buscando pelo nome SSX Onboard.
                                </p>
                                <a target="_blank" className="bg-blue-500 text-white font-bold p-4 rounded-lg mb-4 block flex justify-center hover:bg-blue-600" href="https://play.google.com/store/apps/details?id=br.com.systemsat.axisonboard&hl=pt_BR">Baixar Aplicativo</a>
                            </div>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Acessando App Onboard</h2>

                            <div className="flex justify-center" >
                                <img src={AcessarOnboard} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}