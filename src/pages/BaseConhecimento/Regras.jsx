import RegrasRisco from "../../pages/BaseConhecimento/img/RegrasRisco.jpg"
import RegrasRisco2 from "../../pages/BaseConhecimento/img/RegrasRisco2.jpg"
import RegrasRisco3 from "../../pages/BaseConhecimento/img/RegrasRisco3.jpg"
import MenuRegras from "../../pages/BaseConhecimento/img/MenuRegras.png"
import RegrasIdeias from "../../pages/BaseConhecimento/img/RegrasIdeias.jpg"
import CadastrarRegra from "../../pages/BaseConhecimento/img/CadastrarRegra.png"
import CadastrarRegra2 from "../../pages/BaseConhecimento/img/CadastrarRegra2.gif"
import CadastrarRegra3 from "../../pages/BaseConhecimento/img/CadastrarRegra3.gif"
import CadastrarRegra4 from "../../pages/BaseConhecimento/img/CadastrarRegra4.gif"
import CadastrarRegra5 from "../../pages/BaseConhecimento/img/CadastrarRegra5.gif"
import CadastrarRegra6 from "../../pages/BaseConhecimento/img/CadastrarRegra6.gif"
import CadastrarRegra7 from "../../pages/BaseConhecimento/img/CadastrarRegra7.gif"
import CadastrarRegra8 from "../../pages/BaseConhecimento/img/CadastrarRegra8.gif"
import CadastrarRegra9 from "../../pages/BaseConhecimento/img/CadastrarRegra9.gif"

export default function Regras() {

    const scaleIMG = "transition-transform duration-300 hover:scale-105"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Regras</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                    <div className=" space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                        <p className="text-gray-700 mb-4">
                        </p>

                        <p>
                            Garanta a segurança, eficiência e controle total da sua frota com as Regras do SSX. Receba alertas automáticos sobre eventos críticos – como excesso de velocidade, saída de rota ou bateria violada – e tome decisões rápidas para evitar riscos e otimizar operações.

                        </p>

                        <p>
                            Configure regras personalizadas de acordo com suas necessidades, seja para a central ou para o cliente, e tenha total controle sobre o que acontece em tempo real. Prevenção, agilidade e adaptabilidade ao seu alcance!
                        </p>

                        <div className="flex justify-center gap-10" >
                            <img  className={scaleIMG} src={RegrasRisco} alt="" />
                            <img  className={scaleIMG} src={RegrasRisco2} alt="" />
                            <img  className={scaleIMG} src={RegrasRisco3} alt="" />
                        </div>

                        <p>
                            Com as regras, tanto a central quanto o cliente ganham autonomia para definir exatamente o que deve ser acompanhado. Comece agora a monitorar com inteligência e eficiência!
                        </p>


                        <p>
                            Abaixo algumas ideias para regras que você pode querer utilizar:
                        </p>

                        <img src={RegrasIdeias} alt="" />

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Etapas da criação de uma regra</h2>

                        <h3 className="font-bold text-lg" >Para iniciar o cadastro de uma regra siga conforme o passo a passo abaixo:</h3>

                        <p>
                            Ao acessar a tela de regras perceba, que conforme a imagem ilustrativa acima, são listadas todas as regras já criadas na sua central, e você consegue visualizar e filtrar por regras críticas, se estão ativas ou não, unidade organizacional, modo de violação e por grupo.
                        </p>

                        <img src={MenuRegras} alt="" />

                        <p>
                            Ao acessar a tela de Regras clique no símbolo de + para iniciar o cadastro de uma nova regra:
                        </p>

                        <img src={CadastrarRegra} alt="" />

                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >PRIMEIRA TELA DE CADASTRO</h2>

                        <p>
                            Após clicar no + você entrará na primeira tela da criação de regra conforme imagem da ilustração abaixo:
                        </p>

                        <img src={CadastrarRegra2} alt="" />

                        <p>
                            Após realizar a configuração dos campos desejados clique em Salvar e siga para etapa de condições;
                        </p>

                        <ul className="list-decimal list-inside space-y-2" >
                            <h3 className="font-bold text-xl" >Confira cada campo enumerado:</h3>
                            <li><strong>Nome:</strong> Defina o nome da regra de acordo com as condições do evento da regra criada (Como será identificada nos relatórios, alertas e notificações);</li>
                            <li><strong>Unidade Organizacional:</strong> Selecione a unidade organizacional em que a regra será criada;</li>
                            <li><strong>Grupo:</strong> Campo opcional para agrupar regras de mesma afinidade (Essa prática facilita na hora de tirar o relatório de alertas e notificações para um grupo de regras. Ex.: Excesso de Velocidade);</li>
                            <li><strong>Vigência:</strong> Campo opcional para definir que a regra só funcionará por um período;</li>
                            <li><strong>Fuso Horário:</strong> É configuração obrigatória quando a Vigência, no campo anterior, é utilizada;</li>
                            <li><strong>País:</strong> É configuração obrigatória quando a Vigência, no campo anterior, é utilizada;</li>
                            <li><strong>Horário de Verão:</strong> É configuração obrigatória quando a Vigência, no campo anterior, é utilizada;</li>
                            <li><strong>Requer Tratamento:</strong> Marque essa opção significa que a violação dessa regra irá gerar um alerta e entrará no painel de alertas sem tratamento. Se desmarcado, apenas alimentará o relatório de alertas e notificações;</li>
                            <li><strong>Categoria do Chamado:</strong> É configuração obrigatória, quando o Requer Tratamento for habilitado. Podem ser criadas categorias com respectivas prioridades no SSX, facilitando o tratamento de acordo com a urgência;</li>
                            <li><strong>Tolerância:</strong> É o intervalo de tempo no qual uma ação pode ocorrer sem que seja considerada uma violação da regra estabelecida;</li>
                            <li><strong>Descrição:</strong> Campo opcional que pode servir para que os usuários compreendam a finalidade da regra e saibam como proceder em caso de violação;</li>
                        </ul>
                    </div>

                    <div>
                        <h2>Condições</h2>

                        <h3>Essa é a tela onde você irá configurar os parâmetros a serem controlados na regra;</h3>

                        <img src={CadastrarRegra3} alt="" />
                        
                    </div>


                    <div className="space-y-4">
                        <h2 className="font-bold text-xl" >ASSOCIAR ÁREA(S) E ROTA(S) À REGRA</h2>

                        <p>
                            Nessa tela é possível que você configure uma área de violação, ou até mesmo configurar para ser alertado na entrada ou saída dessa área;
                        </p>

                        <img src={CadastrarRegra9} alt="" />
                    </div>

                    <div className="space-y-4">
                        <h2 className="font-bold text-xl" >PERÍODO DE ATIVAÇÃO DA REGRA</h2>

                        <p>
                            Nessa tela você pode definir períodos de ativação, ou seja, intervalos de tempo em dias específicos em que a regra deverá funcionar;
                        </p>

                        <img src={CadastrarRegra4} alt="" />

                        <p>
                            Nessa tela você pode configurar períodos de ativação da regra, tanto em dias diferentes como em períodos dentro do mesmo dia, caso a função não vá ser utilizada, basta pular essa página sem preencher nenhuma informação.
                        </p>

                        <p>
                            Após realizar a configuração dos campos desejados clique em <strong>Salva</strong>
                        </p>
                    </div>
                    
                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >ASSOCIAR UNIDADE(S) RASTREADA(S) À REGRA</h2>

                        <p>
                            Nessa tela que você irá associar os veículos que serão controlados através da regra;
                        </p>

                        <img src={CadastrarRegra5} alt="" />

                        <ul className="list-decimal list-inside space-y-2" > 
                            <li><strong>Na ilustração ao lado (direito):</strong> Você consegue visualizar os filtros dos veículos que estão associados e os que não estão;</li>
                            <li><strong>Na ilustração ao lado (esquerdo):</strong> Você consegue associar automaticamente todos os veículos listados à regra e também desassociá-los.</li>

                            <p className="font-bold">
                                Nos casos em que o parâmetro de violação é um evento de controle, estarão listados apenas os veículos com rastreador compatível com a regra.
                            </p>
                        </ul>

                        <p>
                            Após realizar a configuração dos campos desejados clique em Salvar siga para a etapa de Notificação da Regra
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >NOTIFICAÇÃO DA REGRA</h2>

                        <p>
                            Nessa tela você irá configurar quais os meios pelo qual o cliente ou a central serão notificados;
                        </p>

                        <img src={CadastrarRegra6} alt="" />

                        <ul className="list-decimal list-inside space-y-2" >
                            <li><strong>Configurar o e-mail de notificação:</strong> No caso de notificação por e-mail, você pode inserir o texto que será enviado no corpo do e-mail;</li>
                            <li><strong>Dados da unidade rastreada:</strong> Ao marcar essa caixa você garante que além da violação serão informados os dados da unidade rastreada (recomendado).</li>
                            <li><strong>Dados do motorista:</strong> Ao marcar essa segunda opção, se houver motorista identificado, essa informação será incluída na notificação.</li>
                            <li><strong>Exibir mapa da posição:</strong> Nessa opção você garante que a localização onde ocorreu a violação será enviada na notificação;</li>
                            <li><strong>Enviar link da solicitação de playback da violação:</strong> Ao marcar essa opção, toda vez que a regra for violada em um veículo com câmera o SSX poderá enviar um link para acesso da mídia de violação da regra no e-mail configurado;</li>
                            <li><strong>Texto da notificação por SMS e Push:</strong> Nesse campo você pode colocar um texto personalizado no corpo da notificação que chegará por SMS e/ou Push, por exemplo: “Sua ignição foi ligada!”, “Você passou de 100km/h”.</li>
                            <li><strong>Texto de notificação do motorista:</strong> Você pode inserir um texto quando quiser notificar o motorista pelo aplicativo SSX Onboard.</li>
                        </ul>

                        <p>
                            Após realizar a configuração dos campos desejados clique em Salvar e siga para etapa Ações Automáticas da Regra
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >AÇÕES AUTOMÁTICAS DA REGRA</h2>

                        <h3>Nesse campo você pode configurar uma ação automática para execução do rastreador;</h3>

                        <img src={CadastrarRegra7} alt="" />

                        <p>
                            No momento em que o veículo violar a regra você pode configurar uma ação automática de atuação, ou seja, será enviado um comando ao rastreador para ativar ou desativar o que for configurado na saída do equipamento, exemplo: bloqueio, buzzer, sirene, trava do baú e etc.
                        </p>
                        
                        <ul>
                            <li><strong>Atuador:</strong> Você irá selecionar neste campo o atuador (bloqueio, buzzer, sirene etc.).</li>
                            <li><strong>Comando:</strong> Selecionar se o comando é para ativar ou desativar e depois clicar no “+” e salvar.</li>
                        </ul>

                        <p className="font-bold text-red-600" >
                            *Recomendamos muita cautela na configuração de ações automáticas, como por exemplo no caso de comando de bloqueio, pois dependendo da situação, pode causar um acidente.
                        </p>

                        <p>
                            Após realizar a configuração dos campos desejados clique em Salvar e siga para a etapa Solicitar Playback das Regras;
                        </p>

                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >SOLICITAR PLAYBACK DAS REGRAS</h2>

                        <p>
                            Neste espaço, você pode selecionar qual(is) câmera(s) devera(ão) ser incluída(s) na solicitação automática de Playback feita pelo SSX ao rastreador, caso uma regra configurada seja violada.;
                        </p>

                        <img src={CadastrarRegra8} alt="" />

                        <p>
                            Após selecionar as câmeras desejadas clique em Salvar e fechar.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}
