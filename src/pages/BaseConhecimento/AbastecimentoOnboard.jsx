import CadastrarAtributos from "../../pages/BaseConhecimento/img/CadastrarAtributos.png"
import CadastrarAtributos2 from "../../pages/BaseConhecimento/img/CadastrarAtributos2.png"
import CadastrarMensagem from "../../pages/BaseConhecimento/img/CadastrarMensagem.png"
import CadastrarGrupoMensagens from "../../pages/BaseConhecimento/img/CadastrarGrupoMensagens.png"
import CadastrarGrupoMensagens2 from "../../pages/BaseConhecimento/img/CadastrarGrupoMensagens2.png"
import CadastrarGrupoMensagens3 from "../../pages/BaseConhecimento/img/CadastrarGrupoMensagens3.png"
import VincularGrupoOnboard from "../../pages/BaseConhecimento/img/VincularGrupoOnboard.png"
import VincularGrupoOnboard2 from "../../pages/BaseConhecimento/img/VincularGrupoOnboard2.png"

export default function AbastecimentoOnboard() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Abastecimento via SSX Onboard</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Os Atributos de mensagens são as perguntas do formulário que deverão ser respondidas pelo motorista no aplicativo Onboard para o cadastro automático, no SSX, dos abastecimentos.
                        </p>
                        
                        <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-700 leading-relaxed font-medium">
                            </p>

                            <div className="space-y-4">
                                <h2 className="font-bold text-xl">1°Etapa: Cadastrar os atributos</h2>

                                <img src={CadastrarAtributos} alt="" />

                                <p>
                                    Os Atributos de mensagens são as perguntas do formulário que deverão ser respondidas pelo motorista no aplicativo Onboard para o cadastro automático, no ssx, dos abastecimentos.
                                </p>

                                <p>
                                    Pontos importantes:
                                </p>

                                <ul>
                                    <li>Para que o cadastro do abastecimento seja realizado automaticamente no sistema após o envio da mensagem pelo onboard, é imprescindível que a mensagem contenha <strong>os cinco itens obrigatórios que serão listados abaixo</strong>.</li>
                                    
                                    <li>Todos os demais itens presentes na mensagem, <strong>incluindo fotos</strong>, poderão ser visualizados no <strong>relatório de mensagens.</strong></li>
                                </ul>

                                <p>
                                    Se o veículo <strong>não estiver identificado</strong> no onboard, será necessário incluir o atributo <strong>QR Code do veículo</strong> para garantir o correto processamento do abastecimento.
                                </p>

                                <div>
                                    <h2 className=" font-bold flex justify-center text-lg border-solid border-black border bg-slate-800 text-white" >TIPO DO ATRIBUTO</h2>
                                    <p className=" flex justify-center text-lg border-solid border-black border">Custo total do abastecimento</p>
                                    <p className=" flex justify-center text-lg border-solid border-black border">Custo/preço do combustível por litro</p>
                                    <p className=" flex justify-center text-lg border-solid border-black border" >Odômetro</p>
                                    <p className=" flex justify-center text-lg border-solid border-black border" >Quantidade combustível (litro)</p>
                                    <p className=" flex justify-center text-lg border-solid border-black border" >Tipo de combustível</p>
                                </div>

                                <p>
                                    Com a tela aberta clique no “<strong>+</strong>” para cadastrar os atributos citados acima:
                                </p>

                                <img src={CadastrarAtributos2} alt="" />

                                <ul className="list-decimal list-inside space-y-2" >
                                    <li>A descrição é onde deve ser inserida a pergunta</li>
                                    <li>No tipo é definida a estrutura da resposta</li>
                                    <li>Em opção devem ser estabelecidas as alternativas da resposta, separadas por “<strong>;</strong>“</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-bold text-xl" >Cadastrar a mensagem</h2>

                                <p>
                                    As <strong>mensagens</strong> são estruturas utilizadas para agrupar os atributos cadastrados na fase anterior e para determinar algumas configurações de comunicação, como o ponto de origem das mensagens e o local de exibição das respostas no SSX, além de definir se cada resposta é obrigatória ou não.
                                </p>

                                <img src={CadastrarMensagem} alt="" />

                                <ul className="list-decimal list-inside space-y-2" >
                                    <li>Escolha a opção <strong>Equipamento para o portal</strong></li>
                                    <li>Em <strong>Mensagens</strong> digite o nome do abastecimento</li>
                                    <li>Em <strong>Subgrupo</strong> coloque a opção <strong>Informativo</strong></li>
                                    <li>Em <strong>Tipo</strong> coloque a opção <strong>Informativo</strong></li>
                                    <li>Marque a caixa box para gerar o aviso de recebimento</li>
                                    <li>Marque a caixa box para ter as respostas no chat</li>
                                    <li>Selecione o atributo</li>
                                    <p>
                                        Defina se a resposta é obrigatória marcando a caixa box.
                                    </p>
                                    <p>
                                        7.1 Depois clique no + para adicionar a pergunta na lista do formulário
                                    </p>
                                </ul>

                                <p>
                                    <strong>Atenção:</strong> todos os atributos devem ser inseridos na mesma mensagem.
                                </p>

                                <p>
                                    Clique em <strong>Salvar e fechar</strong> para concluir a criação da mensagem.
                                </p>

                            </div>

                            <div className="space-y-4" >
                                <h2>3° Etapa: Cadastrar o grupo de mensagens</h2>

                                <p>
                                    O Grupo de mensagens é uma organização sistêmica que agrupa as mensagens a serem utilizadas em um mesmo aplicativo.
                                </p>

                                <img src={CadastrarGrupoMensagens} alt="" />

                                <p>
                                    O <strong>Grupo de mensagens</strong> é uma organização sistêmica que agrupa as mensagens a serem utilizadas em um mesmo aplicativo.
                                </p>

                                <img src={CadastrarGrupoMensagens2} alt="" />
                                
                                <p>
                                    1. Defina um nome para esse grupo e clique em salvar
                                </p>

                                <img src={CadastrarGrupoMensagens3} alt="" />

                                <p>
                                    2. Vá na opção equipamento para o portal
                                </p>

                                <p>
                                    3. Selecione a mensagem Abastecimento criada previamente
                                </p>

                                <p>
                                    4. Adicione a mensagem e clique em salvar e fechar
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2>4° Etapa: Vincular o grupo ao aplicativo que irá utilizar</h2>

                                <img src={VincularGrupoOnboard} alt="" />

                                <p>
                                    É necessário vincular o <strong>grupo de mensagens</strong> que contém o Abastecimento aos <strong>aplicativos que terão acesso</strong> a esse preenchimento. Para isso, vá até o grupo de mensagens no aplicativo e selecione na lista.
                                </p>

                                <img src={VincularGrupoOnboard2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}