import TelaOperacionalVideotelemetria from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria.png";
import TelaOperacionalVideotelemetria2 from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria2.png";
import TelaOperacionalVideotelemetria3 from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria3.png";
import GifVideotelemetria from "../../pages/BaseConhecimento/img/GitVideotelemetria.gif";
import MosaicoVideotelemetria from "../../pages/BaseConhecimento/img/MosaicoVideotelemetria.png";
import GaleriaVideotelemetria from "../../pages/BaseConhecimento/img/GaleriaVideotelemetria.png";
import GaleriaVideotelemetria2 from "../../pages/BaseConhecimento/img/GaleriaVideotelemetria2.png";
import SolicitarPlayback from "../../pages/BaseConhecimento/img/SolicitarPlayback.png";
import SolicitarPlayback2 from "../../pages/BaseConhecimento/img/SolicitarPlayback2.png";

export default function Videotelemetria() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Videotelemetria</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Aproveite tecnologia de vídeo e telemetria para análise avançada de comportamento e segurança.
                    </p>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            O módulo de Videotelemetria proporciona uma solução avançada para monitoramento e gestão veicular, integrando-se às câmeras Hikvision e Jimi.
                        </p>
                        <p>
                            Essa funcionalidade permite a visualização em tempo real de diferentes ângulos do veículo, incluindo partes frontais, internas e externas, oferecendo maior controle e segurança operacional.
                        </p>
                        <p>
                            Além disso, as câmeras possuem Inteligência Artificial integrada, capaz de identificar e reportar eventos críticos, como sinais de fadiga do motorista ('bocejar'), uso do cinto de segurança e outras situações que variam conforme o modelo.
                        </p>
                        <p>
                            Essa tecnologia contribui para a prevenção de incidentes e a otimização das operações, tornando o gerenciamento mais eficiente e seguro.
                        </p>
                        <h2 className="font-bold text-xl" >Premissas</h2>
                        <p>
                            Este material apresenta as funcionalidades e os recursos do módulo de Videotelemetria, garantindo uma utilização otimizada e alinhada às necessidades operacionais.
                        </p>
                        <h2 className="font-bold text-xl" >Tela Operacional</h2>
                        <p>
                            O monitoramento ao vivo das câmeras instaladas em um veículo pode ser realizado diretamente pela tela operacional.
                        </p>
                        <p>
                            Nessa interface, um ícone de câmera clicável é exibido ao lado dos veículos que possuem câmera:
                        </p>
                        <img src={TelaOperacionalVideotelemetria} alt="" />
                        <p>
                            Ao clicar no ícone, o sistema tentará estabelecer a conexão com a câmera em até três tentativas.
                        </p>
                        <p>
                            Caso a conexão seja bem-sucedida, será possível visualizar, em tempo real, os ângulos disponíveis captados pela câmera, por um período indeterminado:  
                        </p>
                        <img src={TelaOperacionalVideotelemetria2} alt="" />
                        <p>
                            Além disso, eventos específicos que geram mídias, como 'Distração', podem ser acessados no histórico de posições, permitindo uma análise detalhada de ocorrências registradas, filtrando através da coluna ‘Evento’:
                        </p>
                        <img src={TelaOperacionalVideotelemetria3} alt="" />
                        <h2 className="font-bold text-xl" >Tela de Gerenciamento (Ao Vivo e Playback)</h2>
                        <p>
                            A Tela de Gerenciamento é a principal interface para a administração do módulo de Videotelemetria, oferecendo ferramentas completas para monitoramento, configuração e análise de dados.
                        </p>
                        <p>
                            Por padrão, essa tela apresenta a opção 'Playback' ativada, mas é possível alternar para o modo 'Ao Vivo' conforme a necessidade:
                        </p>
                        <img src={GifVideotelemetria} alt="" />
                        <p>
                            No modo 'Ao Vivo', você pode criar um mosaico com até 16 telas, permitindo a visualização simultânea de diferentes câmeras e ângulos associados à base do cliente.
                        </p>
                        <p>
                            Essa funcionalidade oferece uma visão consolidada e estratégica das operações em tempo real:
                        </p>
                        <img src={MosaicoVideotelemetria} alt="Mosaico Videotelemetria" />
                        <p>
                            Vale destacar que a visualização de cada câmera no mosaico é limitada a 5 minutos, uma medida adotada para proteger o consumo de dados do chip do rastreador e assegurar a estabilidade do sistema.
                        </p>
                        <p>
                            Ao habilitar a opção 'Playback', é disponibilizada a 'Galeria de Mídias', onde é possível filtrar e consultar vídeos que foram enviados para o SSX.
                        </p>
                        <p>
                            Essas mídias podem ser geradas por eventos automáticos, solicitações manuais (Playback) ou violações de regra:
                        </p>
                        <img src={GaleriaVideotelemetria} alt="" />    
                        <p>
                            Também conseguimos realizar algumas opções visando o bom gerenciamento do seu armazenamento no SSX. <br/> Nós podemos:
                            <ul className="space-y-1">
                                <li><strong>Baixar:</strong>mídia para arquivamento externo.</li>
                                <li><strong>Excluir:</strong> sistema para liberar espaço.</li>
                                <li><strong>Arquivar:</strong> proteger a mídia contra exclusão automática, mantendo-a no SSX.</li> 
                            </ul>
                        </p>
                        <strong>(mídias arquivadas continuarão ocupando espaço no armazenamento.</strong>
                        <img src={GaleriaVideotelemetria2} alt="" />
                        <strong>Nesta lista de mídias, conseguimos visualizar um máximo de 1000 mídias.</strong>
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl">Solicitação Manual</h2>

                            <p>
                                O SSX permite solicitar vídeos gravados pelas câmeras instaladas nos veículos clicando no "+". Essas câmeras registram continuamente enquanto estão ligadas e armazenam os arquivos em cartões SD internos.
                            </p>

                            <p>
                                O armazenamento é feito de forma <strong>fragmentada</strong>, ou seja, a gravação não é um único arquivo contínuo — ela é dividida em blocos (fragmentos) que possuem início e fim próprios.
                            </p>
                            <p>
                                Quando solicitamos um vídeo, precisamos informar alguns <strong>parâmetros de busca:</strong>
                            </p>

                            <ul className="list-disc list-inside space-y-1 font-bold">
                                <li>Unidade Rastreada</li>
                                <li>Consulta</li>
                                <li>Data / Hora</li>
                                <li>Tempo</li>
                                <li>Câmera</li>
                                <li>Canal</li>
                            </ul>
                            <p>
                                O SSX, a partir desses parâmetros, identifica o <strong>primeiro fragmento encontrado</strong> dentro do intervalo informado e realiza a extração do vídeo conforme o tipo de pesquisa escolhido. É importante entender que o sistema <strong>não inicia o vídeo exatamente na hora informada</strong>, mas sim no <strong>início do fragmento encontrado</strong> que contenha aquele horário.
                            </p>
                            <h2 className="font-bold text-xl" >Limite de tempo</h2>
                            <p>
                                Cada requisição pode trazer no máximo 5 minutos de vídeo.
                            </p>
                            <p>
                                Caso seja necessário mais tempo, é preciso realizar novas solicitações ajustando os horários.
                            </p>

                            <h2 className="font-bold text-xl" >Tipos de pesquisa disponíveis</h2>
                            <ul className="list-disc list-inside space-y-2">
                                <p className="font-bold">Primeiros minutos</p>
                                <li>Traz os primeiros minutos do <strong>primeiro fragmento encontrado</strong> no intervalo informado</li>
                                <li>Útil quando se deseja verificar o início de um trecho de gravação.</li>

                                <p className="font-bold">Últimos minutos</p>
                                <li>Traz os primeiros minutos do <strong>primeiro fragmento encontrado</strong> no intervalo informado</li>
                                <li>Útil quando o evento pode estar mais próximo do final de uma gravação</li>

                                <p className="font-bold">Todo período</p>
                                <li>Traz a quantidade total de minutos solicitada (até 5 minutos) <strong>a partir do início do fragmento encontrado</strong>. no intervalo informado</li>
                                <li>Útil quando o evento pode estar mais próximo do final de uma gravação.</li>
                            </ul>
                            <div className="space-y-4">
                                <h2 className="font-bold text-xl">O desafio da hora exata</h2>

                                <p>Na prática, um problema comum é não saber exatamente quando começou o fragmento de vídeo.</p>

                                <p>Mesmo que você saiba a hora do evento, se essa hora cair no meio ou no fim de um fragmento, a requisição pode não trazer o trecho desejado. Por isso, é necessário adotar estratégias de busca inteligentes. Mesmo que você saiba a hora do evento, se essa hora cair no meio ou no fim de um fragmento, a requisição pode não trazer o trecho desejado. Por isso, é necessário adotar <strong>estratégias de busca inteligentes</strong>, ajustando o horário inicial e o tipo de pesquisa para cobrir o evento., ajustando o horário inicial e o tipo de pesquisa para cobrir o evento.</p>

                                <h2 className="font-bold text-xl">Estratégia para quem sabe o horário exato do evento</h2>

                                <p>Quando o horário é certo, mas o início do fragmento é desconhecido:</p>

                                <ul className="list-disc list-inside">
                                    <p className="font-bold">Primeira tentativa</p>

                                    <li><strong>Início: </strong>10 minutos antes do evento</li>
                                    <li><strong>Tipo de consulta: Últimos minutos</strong></li>
                                    <li><strong>Objetivo: </strong>Capturar o evento se ele estiver próximo ao fim de um fragmento</li>
                                    <br/>

                                    <p className="font-bold">Segunda tentativa</p>
                                    <li><strong>Início: </strong>5 minutos antes o evento</li>
                                    <li><strong>Tipo de consulta:  </strong>Todo período</li>
                                    <li><strong>Objetivo: </strong>Pegar o evento no meio do fragmento, com 5 minutos contínuos.</li>
                                    <br/>

                                    <p className="font-bold">Terceira tentativa</p>

                                    <li><strong>Início: </strong>Horário exato do evento</li>
                                    <li><strong>Tipo de consulta: </strong> Primeiros minutos</li>
                                    <li><strong>Objetivo: </strong>capturar o evento se ele estiver no início de um novo fragmento.</li>
                                    <br/>
                                </ul>
                                <p>
                                    Seguindo essa sequência, aumenta-se muito a chance de sucesso na captura da mídia, sem precisar adivinhar o ponto exato de início do vídeo.
                                </p>
                                <img src={SolicitarPlayback} alt="" />
                                <p>
                                    Através do menu 'Solicitações de Mídia', conseguimos acompanhar o status dessas solicitações manuais e de mídias geradas por violações de regra, garantindo maior controle e rastreabilidade:
                                </p>
                                <img src={SolicitarPlayback2} alt="" />
                                <div className="space-y-2">
                                    <h2 className="font-bold text-xl">Status de solicitações de mídia</h2>
                                    
                                    <ul className="list-disc list-inside space-y-4">
                                        <li><strong>Baixados: </strong>encontradas e transferidas para o SSX com sucesso.</li>

                                        <li><strong>Pendentes: </strong>Solicitações ainda em andamento, aguardando conclusão.</li>

                                        <li><strong>Não encontrados: </strong>Mídias inexistentes no equipamento de acordo com o filtro aplicado.</li>

                                        <li><strong>Falha: </strong>Solicitações que não puderam ser concluídas devido a problemas na comunicação entre o sistema e o equipamento, resultando na impossibilidade de gerar a mídia.</li>

                                        <li><strong>Cancelados: </strong>Solicitações interrompidas por dois motivos possíveis: expiração do prazo de 7 dias ou falha do rastreador em enviar o arquivo após 12 tentativas, mesmo com o comando aceito.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}