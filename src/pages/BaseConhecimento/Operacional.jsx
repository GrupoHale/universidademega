export default function Operacional() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Operacional</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-4">TELA OPERACIONAL</h2>
                    <p className="text-gray-700 mb-4">
                        A tela operacional é o espaço onde o usuário visualiza os veículos de sua própria base de operações e os dados de posição enviados pelos rastreadores.
                    </p>
                    <br />
                    <p className="text-gray-700 mb-4">
                        Esta é uma tela importante no cenário de rastreamento, pois oferece informações detalhadas sobre a localização e o status da unidade rastreada, além de fornecer uma variedade de ações voltadas para a segurança e a gestão dos ativos.
                    </p>
                    <br />
                    <p className="text-gray-700 mb-6">
                        Como mostrado abaixo, a tela é dividida entre o mapa, na parte superior, e a grid, na parte inferior.
                    </p>
                    
                    <img src="../src/Pages/BaseConhecimento/img/Tela operacional.png" alt="Tela Operacional" className="w-full rounded-lg" />
                    <br/>
                    <p>
                        O grid da tela operacional pode ter até 38 colunas que trazem os dados de posição recebidas das unidades rastreadas.
                    </p>
                    <br />
                        <p> As colunas dessa grid são customizáveis, ordenáveis e redimensionáveis.<p/>
                    <br />
                        Veja na ilustração abaixo o nome de cada ícone da barra de ações na tela Operacional:
                    </p>
                    <br />

                    <img src="../src/Pages/BaseConhecimento/img/Tela operacional (dados).jpg" className="x-full rounded-lg" />
                    <br />
                    <p>
                        1 - Lista de ações: na Lista de ações permite escolher entre as opções de Rastreamento, Histórico de Posições, Viagens e Alertas. Para utilizar qualquer uma dessas ações, é necessário selecionar uma unidade rastreada no grid:
                        • Rastreamento: exibe as informações mais recentes da posição enviada pelo rastreador na grade. Esta opção é automaticamente selecionada ao acessar a tela operacional.
                        • Histórico de posições: exibe o registro cronológico das posições anteriores da unidade rastreada selecionada.
                        • Viagens: permite acompanhar o status e detalhes das viagens realizadas. [Logistics]
                        • Alertas: exibe os alertas gerados para a unidade rastreada durante o período especificado.
                    </p>
                    <br/>
                    <p>
                        2 - Cronômetro de atualização da tela: é um temporizador que indica o tempo necessário para a tela atualizar as informações recebidas do rastreador. Quando o cronômetro zera, todas as informações recebidas desde o fim do último ciclo são atualizadas na tela.
                    </p>
                    <br/>
                    <p>
                        3 - Parar: é um botão que, quando acionado, suspende a contagem regressiva de atualização da tela. Enquanto isso, esse botão se transforma em uma opção "Iniciar". Ao ser pressionado novamente, faz o temporizador retomar a contagem do início.
                    </p>
                    <br/>
                    <p>
                        4 - Atualizar agora: força a atualização da tela imediatamente.
                    </p>
                    <br/>
                    <p>
                        5 - Filtro: é uma função que pode ser utilizada tanto no Rastreamento para exibir outras unidades próximas a um endereço pesquisado, quanto no Histórico de posições para mostrar outros veículos próximos à unidade rastreada selecionada.
                    </p>
                    <br/>
                    <p>
                        6 - Informações da ordem de serviço: fornece detalhes precisos sobre os pontos da viagem, incluindo o nome e endereço do cliente, horários de saída, chegada e permanência (previstos e reais). Além disso, qualquer divergência no atendimento será visível nessa tela. [Logistics].
                    </p>
                    <br/>
                    <p>
                        7 - Informações da viagem: fornecem uma visão abrangente das viagens, incluindo o local de início e término, os horários de saída e chegada, tanto previstos quanto reais, os detalhes do motorista e as informações sobre os itens transportados durante a viagem.[Logistics].
                    </p>
                    <br/>
                    <p>
                        8 - Informações da posição: oferecem detalhes sobre a última posição transmitida pelo rastreador, incluindo o endereço, modelo e ID do rastreador, data e hora do evento e de atualização, velocidade do veículo, horímetro, odômetro, nível da bateria principal e de backup, bem como o status dos sensores e atuadores.
                        (Essas visualização das informações acima está condicionada a capacidade e configuração dos rastreadores.)
                    </p>
                    <br/>
                    <p>
                        9 - Dados da unidade rastreada: exibem informações detalhadas do veículo, incluindo a placa, Renavam, chassi, cor, fabricante e outros detalhes relevantes.
                    </p>
                    <br/>
                    <p>
                        10 - Lista de áreas / rotas: mostra todas as áreas e rotas cadastradas na base de dados, oferecendo a possibilidade de associá-las aos veículos conforme necessário.
                    </p>
                    <br/>
                    <p>
                        11 - Criar viagem expressa: permite a criação de uma viagem não planejada, onde é possível inserir apenas um ponto de atendimento. [Logistics].
                    </p>
                    <br/>
                    <p>
                        12 - Exportar: permite transferir os dados da grid, exibida na tela, para uma planilha eletronica, facilitando a análise e o compartilhamento das informações.
                    </p>
                    <br/>
                    <p>
                        13 - Seletor de colunas: permite armazenar colunas da grade e recuperá-las conforme desejado. Essa ação é realizada arrastando a coluna pelo cabeçalho para o seletor e vice-versa.
                    </p>
                    <br/>
                    <p>
                        14 - Configuração: é uma opção que permite ao usuário ajustar algumas características na tela, personalizando-as de acordo com suas preferências e necessidades específicas.
                    </p>
                    <br/>
                    <p>
                        É possível realizar uma série de procedimentos operacionais relacionados à unidade rastreada clicando na seta localizada à esquerda da linha na grid. (observe ilustração abaixo)
                    </p>
                    <br/>

                    <img src="../src/Pages/BaseConhecimento/img/Tela Operacional (lista de acoes).jpg" className="w-80 rounded-lg" />
                    <br/>
                    <p>
                        1 - Histórico da unidade rastreada: é uma consulta que exibe, em uma grid, todas as posições enviadas pelo rastreador durante o período especificado. Além disso, mostra o trajeto percorrido pela unidade no mapa da tela operacional, permitindo uma visualização detalhada do caminho percorrido. (Clique aqui e confira a regra para consulta do histórico de posições)
                    </p>
                    <br/>
                    <p>
                        2 - Alertas da unidade rastreada: é uma consulta que exibe, em uma grid, todos os alertas gerados pela unidade rastreada durante o período especificado. Esta função permite uma análise detalhada dos eventos e incidentes ocorridos, facilitando a gestão e a resposta a situações críticas.
                    </p>
                    <br/>
                    <p>
                        3 - Consultar endereço: é uma funcionalidade que permite localizar um endereço específico utilizando as coordenadas de latitude e longitude fornecidas. Essa consulta é realizada através do mapa habilitado, proporcionando a visualização precisa do local correspondente às coordenadas.
                    </p>
                    <br/>
                    <p>
                        4 - Mostrar antena LBS: é uma funcionalidade que exibe a antena LBS (Localização Baseada em Serviços) mais próxima da posição atual da unidade rastreada, proporcionando informações precisas sobre a localização relativa à infraestrutura de telecomunicações disponível.
                    </p>
                    <br/>
                    <p>
                        5 - Enviar comando: é uma funcionalidade que permite ao usuário abrir uma lista de comandos disponíveis, selecionar o comando desejado, executar a ação e acompanhar o status de envio e execução do comando.
                    </p>
                    <br/>
                    <p>
                        6 - Compartilhar rastreamento: permite gerar um link temporário, proporcionando acesso a um período específico do histórico e ao rastreamento em tempo real da unidade rastreada.
                    </p>
                    <br/>
                    <p>
                        7 - Ativar âncora: permite à central de rastreamento definir um perímetro de segurança ao redor da unidade rastreada. Se a unidade sair dessa área, o responsável será notificado imediatamente.
                    </p>
                    <br/>
                    <p>
                        8 - Associar regra(s): permite à central de rastreamento vincular regras predefinidas à unidade rastreada, automatizando ações e alertas conforme os critérios estabelecidos.
                    </p>
                    <br/>
                    <p>
                        9 - Modificar status operacional: permite ao usuário alterar o status operacional do veículo, configurando-o como "Disponível" ou "Fora de operação", conforme necessário.
                    </p>
                    <br/>
                    <p>
                        10 - Transformar posição em área: funcionalidade que permite iniciar a criação de uma área geográfica utilizando a posição atual do veículo como ponto de referência.
                    </p>
                    <br/>
                    <p>
                        11 - Editar unidade rastreada: permite ao usuário acessar o cadastro da unidade rastreada, onde é possível realizar alterações nos dados previamente registrados, garantindo a atualização e precisão das informações.
                    </p>
                    <br/>
                    <p>
                        12 - Exportar para o Google: é uma funcionalidade que permite enviar a localização atual da unidade rastreada para uma página do Google Maps, facilitando a visualização e o compartilhamento das informações de localização.
                    </p>
                    <br/>
                    <p>
                        13 - Exportar para o Waze: funcionalidade que permite enviar a localização atual da unidade rastreada para o aplicativo Waze, proporcionando ao usuário a possibilidade de navegar até essa localização diretamente pelo Waze.
                    </p>
                    <br/>
                    <p>
                        14 - Anotações: possibilita ao usuário adicionar uma informação livre, como uma observação ou comentário, na linha correspondente à posição atual da unidade rastreada. Isso permite registrar detalhes relevantes ou contextualizar a informação para referência futura.
                    </p>

                </div>
            </div>
        </div>
    );
}