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
                        <h2>1 - Como solicitar playback?</h2>
                        <br/>
                        <p>
                            Passo 1 - Acesse a tela de gerenciamento da Videotelemetria
                            Passo 2 - Mude função para ver a tela de Playback
                            Passo 3 - No canto superior direito clique no +
                            Passo 4 - Quando a tela de solicitação abrir defina: - Unidade Rastreada - Tipo de consulta - Filtro de datas - Minutos - Câmera
                            Passo 5 - Para concluir a requisição clique em Solicitar mídia.
                            Essa solicitação funciona como um comando no sistema, que tenta se comunicar com a câmera a cada 5 minutos para baixar os vídeos. Se após 7 dias os vídeos não forem carregados, o comando é automaticamente cancelado
                        </p>
                        <br/>
                        <h2>Como ver a midia de um playback já requisitado?</h2>
                        <br/>
                        <p>
                            Você pode ver um vídeo de playback de duas formas, pela Galeria de Mídias ou pela tela de Solicitações de mídias:
                            Pela galeria de mídias:
                            Passo 1 - Acesse a tela de gerenciamento da Videotelemetria
                            Passo 2 - Mude função para ver a tela de Playback
                            Passo 3 - Nos menus de filtros da lateral direita marque a caixa box “Somente playbacks”
                            Passo 4 - Clique em “Consultar”
                            Pela tela de Solicitações de mídias:
                            Passo 1 - Acesse a tela de gerenciamento da Videotelemetria
                            Passo 2 - Mude função para ver a tela de Playback
                            Passo 3 - Entre na tela “Solicitações de mídias”
                            Passo 4 - Localize a mídia desejada na grid
                            Passo 5 - Clique na seta de contexto no início da linha
                            Passo 6 - Clique em “Ver mídias”
                        </p>
                        <h2>Como baixar um video gravado na galeria</h2>
                        <br/>
                        <p>
                            Passo 1 - Acesse a tela de gerenciamento da Videotelemetria
                            Passo 2 - Mude função para ver a tela de Playback
                            Passo 3 - Realize o filtro e busque a mídia desejada
                            Passo 4 - Clique no menu de contexto da mídia que é representado por uma setinha Clique em “Baixar”
                        </p>
                        <h2>Onde vejo a quantidade de espaço utilizado com armazenamento de mídias?</h2>
                        <br/>
                        <p>
                            Você pode ver a quantidade de espaço utilizado no dashboard Média de dias de armazenamento na coluna “Total de armazenamento (GB)”.
                        </p>
                        <h2>O que acontece quando o armazenamento atinge seu limite?</h2>
                        <br/>
                        <p>
                            Quando o armazenamento atinge seu limite, as novas gravações substituem automaticamente as mídias mais antigas.
                        </p>
                        <br/>
                        <h2>É possível aumentar o tempo que o video fica na tela de gerenciamento da videotelemetria?</h2>
                        <p>
                            Não é possível modificar a duração em que o streaming ao vivo permanece aberto na tela de Videotelemetria, sendo a configuração padrão de 5 minutos. A visão do streaming ao vivo sem limitação de tempo é possível na tela operacional.
                        </p>
                        <br/>
                        <h2>Qual é o significado de cada resultado em uma solicitação de playback?</h2>
                        <p>
                            Baixados: Mídias encontradas e transferidas para o SSX com sucesso.
                            Pendentes: Solicitações ainda em andamento, aguardando conclusão.
                            Não encontrados: Mídias inexistentes no equipamento de acordo com o filtro aplicado.
                            Falha: Solicitações que não puderam ser concluídas devido a problemas na comunicação entre o sistema e o equipamento, resultando na impossibilidade de gerar a mídia.
                            Cancelados: Solicitações interrompidas por dois motivos possíveis: expiração do prazo de 7 dias ou falha do rastreador em enviar o arquivo após 12 tentativas, mesmo com o comando aceito.
                        </p>
                        <br/>
                        <h2>Qual o significado das colunas do dashboard Média de dias de armazenamento?</h2>
                        <p>
                            Cliente: Nome do cliente associado à unidade rastreada.
                            Unidade Rastreada: Identificação da unidade rastreada.
                            Total de mídias: Quantidade total de arquivos de mídia (vídeos/imagens) armazenados pela unidade rastreada.
                            Dias de armazenamento: Quantidade média de dias em que as mídias desse veículo ficam armazenadas no sistema.
                            Mídia mais antiga: Data da mídia mais antiga armazenada.
                            Unidade Organizacional: Unidade organizacional onde este veículo e cliente pertencem.
                            Grupo: Grupo de unidades rastreadas que este veículo pertence.
                            ------------------------------ Mídias de playback ------------------------------
                            Quantidade: Quantidade de mídias advindas de playback.
                            Armazenamento (GB): Quantidade de armazenamento, em GB, que estas mídias ocupam.
                            ------------------------------ Mídias de eventos ------------------------------
                            Quantidade: Quantidade de mídias advindas de eventos.
                            Armazenamento (GB): Quantidade de armazenamento, em GB, que estas mídias ocupam.
                            ------------------------------ Mídias de violações------------------------------
                            Quantidade: Quantidade de mídias advindas de violações.
                            Armazenamento (GB): Quantidade de armazenamento, em GB, que estas mídias ocupam.
                            ------------------------------ Mídias de arquivadas ------------------------------
                            Quantidade: Quantidade de mídias arquivadas.
                            Armazenamento (GB): Quantidade de armazenamento, em GB, que estas mídias ocupam.
                            Total de armazenamento (GB): Soma total do espaço ocupado por todas as mídias da unidade rastreada.
                            Armazenamento padrão (GB): Espaço de armazenamento contratado como padrão para o cliente.
                            Armazenamento extra (GB): Espaço adicional de armazenamento concedido ao cliente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}