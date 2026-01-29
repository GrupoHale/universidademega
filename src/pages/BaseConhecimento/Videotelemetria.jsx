import TelaOperacionalVideotelemetria from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria.png";
import TelaOperacionalVideotelemetria2 from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria2.png";
import TelaOperacionalVideotelemetria3 from "../../pages/BaseConhecimento/img/TelaOperacionalVideotelemetria3.png";
import GifVideotelemetria from "../../pages/BaseConhecimento/img/GitVideotelemetria.gif";

export default function Videotelemetria() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Videotelemetria</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Sistema de Videotelemetria</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Aproveite tecnologia de vídeo e telemetria para análise avançada de comportamento e segurança.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <h2>Introdução</h2>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            O módulo de Videotelemetria do SSX proporciona uma solução avançada para monitoramento e gestão veicular, integrando-se às câmeras Hikvision e Jimi.
                        </p>
                        <br/>
                        <p>
                            Essa funcionalidade permite a visualização em tempo real de diferentes ângulos do veículo, incluindo partes frontais, internas e externas, oferecendo maior controle e segurança operacional.
                        </p>
                        <br/>
                        <p>
                            Além disso, as câmeras possuem Inteligência Artificial integrada, capaz de identificar e reportar eventos críticos, como sinais de fadiga do motorista ('bocejar'), uso do cinto de segurança e outras situações que variam conforme o modelo.
                        </p>
                        <br/>
                        <p>
                            Essa tecnologia contribui para a prevenção de incidentes e a otimização das operações, tornando o gerenciamento mais eficiente e seguro.
                        </p>
                        <br/>
                        <h2>Premissas</h2>
                        <br/>
                        <p>
                            Este material apresenta as funcionalidades e os recursos do módulo de Videotelemetria, garantindo uma utilização otimizada e alinhada às necessidades operacionais.
                        </p>
                        <br/>
                        <h2>Tela Operacional</h2>
                        <br/>
                        <p>
                            O monitoramento ao vivo das câmeras instaladas em um veículo pode ser realizado diretamente pela tela operacional.
                        </p>
                        <br/>
                        <p>
                            Nessa interface, um ícone de câmera clicável é exibido ao lado dos veículos que possuem câmera:
                        </p>
                        <br/>
                        <img src={TelaOperacionalVideotelemetria} alt="" />
                        <br/>
                        <p>
                            Ao clicar no ícone, o sistema tentará estabelecer a conexão com a câmera em até três tentativas.
                        </p>
                        <br/>
                        <p>
                            Caso a conexão seja bem-sucedida, será possível visualizar, em tempo real, os ângulos disponíveis captados pela câmera, por um período indeterminado:  
                        </p>
                        <img src={TelaOperacionalVideotelemetria2} alt="" />
                        <br/>
                        <p>
                            Além disso, eventos específicos que geram mídias, como 'Distração', podem ser acessados no histórico de posições, permitindo uma análise detalhada de ocorrências registradas, filtrando através da coluna ‘Evento’:
                        </p>
                        <br/>
                        <img src={TelaOperacionalVideotelemetria3} alt="" />
                        <br/>
                        <h2>Tela de Gerenciamento (Ao Vivo e Playback)</h2>
                        <br/>
                        <p>
                            A Tela de Gerenciamento é a principal interface para a administração do módulo de Videotelemetria, oferecendo ferramentas completas para monitoramento, configuração e análise de dados.
                        </p>
                        <br/>
                        <p>
                            Por padrão, essa tela apresenta a opção 'Playback' ativada, mas é possível alternar para o modo 'Ao Vivo' conforme a necessidade:
                        </p>
                        <br/>
                        <img src={GifVideotelemetria} alt="" />
                        <br/>
                        <p>
                            No modo 'Ao Vivo', você pode criar um mosaico com até 16 telas, permitindo a visualização simultânea de diferentes câmeras e ângulos associados à base do cliente.
                        </p>
                        <br/>
                        <p>
                            Essa funcionalidade oferece uma visão consolidada e estratégica das operações em tempo real:
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}