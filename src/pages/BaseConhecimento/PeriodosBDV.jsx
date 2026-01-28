import PeriodoDeUtilizacao from "../../pages/BaseConhecimento/img/PeriodoDeUtilizacao.jpg";
import FaixaVelocidades from "../../pages/BaseConhecimento/img/FaixaVelocidades.jpg";
import RelatorioBDVColunas from "../../pages/BaseConhecimento/img/RelatorioBDVColunas.jpg";
import FiltroParaColunas from "../../pages/BaseConhecimento/img/FiltroParaColunas.jpg";

export default function PeriodosBDV() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Períodos de Utilização BDV</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <p className="text-gray-700 mb-4">
                        Imagine-se como gestor de uma frota: veículos espalhados em diferentes cidades, enfrentando rotas desafiadoras e a necessidade constante de atualização de recursos. Como você controla tudo isso? É aqui que entra o BDV – Boletim Diário Veicular, um dos relatórios mais completos e personalizáveis ​​do SSX.
                    </p>
                    <br/>
                    <p>
                        O BDV organiza as informações em períodos de utilização. Mas o que isso significa? Cada período começa quando a ignição do veículo é ligada e termina quando ela é desligada. Simples, certo?
                    </p>
                    <br/>
                    <img src={PeriodoDeUtilizacao} alt="" />
                    <br/>
                    <p>
                        Mas você pode personalizar essa condicional, que define quando começa e termina um período, por:
                    </p>
                    <br/>
                    <p>
                        <span className="font-bold" >:: Parado:</span> Inverte a configuração padrão registrando os intervalos em que o veículo está com a ignição desligada.
                    </p>
                    <br/>
                    <p>
                        <span className="font-bold" >:: RPM: </span> Utiliza a rotação do motor como referência para início e fim de um período, ideal para situações mais técnicas ou específicas.
                    </p>
                    <br/>
                    <h2 className="font-bold" >Colunas que Contam uma História</h2>
                    <br/>
                    <p>O Relatório BDV possui <span className="font=bold" >97 colunas de dados</span>, cada uma revelando aspectos únicos do comportamento do veículo. Dentre as informações, destacamos:</p>
                    <br/>
                    <div className="flex flex-col gap-1" >
                        <li><span className="font-bold">Trajeto do Período: </span> Endereço inicial e final do percurso.</li>
                        <li><span className="font-bold">Quilometragem Percorrida: </span> Para medir eficiência e desgaste.</li>
                        <li><span className="font-bold">Duração do Período: </span> Quanto tempo o veículo foi utilizado em um período utilizado.</li>
                        <li><span className="font-bold">Velocidade Máxima e Mínima: </span> Indicadores diretos de segurança e conduta.</li>
                        <li><span className="font-bold">Faixas de Velocidade: </span>Quanto tempo o veículo passou em cada uma das quatro faixas predefinidas:</li>
                    </div>
                    <br/>
                    <img src={FaixaVelocidades} alt="" />
                    <br/>
                    <p>
                        Essas colunas não apenas fornecem dados, mas desenvolvem o perfil de utilização de cada veículo, ajudando a identificar padrões e anomalias.
                    </p>
                    <br/>
                    <img src={RelatorioBDVColunas} alt="" />
                    <br/>
                    <h2>Personalização e Usabilidade na Grid</h2>
                    <br/>
                    <h2>
                        A verdadeira mágica do BDV está na sua flexibilidade:
                    </h2>
                    <br/>
                    <div className="flex flex-rol gap-4">
                        <li><span className="font-bold">Customização: </span> Escolha as colunas que são importantes para você. Não precisa se preocupar em lidar com dados que não fazem sentido para sua análise.</li>
                        <li><span className="font-bold">Ordenação e Redimensionamento: </span>Ordenação e Redimensionamento: Reorganize as colunas da maneira que achar melhor e ajuste seus tamanhos para facilitar a visualização.</li>
                    </div>
                    <br/>
                    <p>
                        Essa funcionalidade transforma o BDV em uma ferramenta intuitiva e adaptada ao seu estilo de trabalho.
                    </p>
                    <br/>
                    <h2>Dados Telemétricos Avançados ou BDV</h2>
                    <br/>
                <p>
                    Cerca de <span className="font-bold"> 60% das informações do BDV</span> são obtidas diretamente do sistema de diagnóstico do veículo <span className="font-bold" >(Rede CAN)</span>. É como se o veículo falasse, reportando dados precisos sobre seu desempenho. No entanto, para aproveitar todo o potencial do BDV, é essencial que o rastreador utilizado seja compatível com essa tecnologia.
                </p>
                <br/>
                <p>
                    Além disso, os dados são consolidados automaticamente, desde que o rastreador envie as informações de telemetria como velocidade e odômetro por exemplo.
                </p>
                <br/>
                <h2>Exportação e Filtros Poderosos</h2>
                <br/>
                <p>
                    Após a consulta no BDV, o relatório pode ser exportado em PDF ou Excel, facilitando o compartilhamento e a análise posterior. E, para refinar ainda mais sua pesquisa, o BDV oferece a possibilidade de filtrar dados em cada coluna. Isso significa que você pode focar exatamente no que precisa, sem perder tempo navegando por informações irrelevantes.
                </p>
                <br/>
                <img src={FiltroParaColunas} alt="" />
                <br/>
                <h2 className="font-bold" >Por que o BDV é o relatório certo para sua frota?</h2>
                <br/>
                <p>
                    Se você precisa de uma visão completa e específica do desempenho de sua frota, o BDV é uma solução.
                    Com ele, você pode:
                </p>
                <br/>
                <ul className="font-bold">
                    <li>🗺️ Monitorar trajetórias em detalhes;</li>
                    <li>📊 Identificar padrões de comportamento;</li>
                    <li>💸 Reduzir custos operacionais;</li>
                    <li>🛡️ Garantir segurança e eficiência;</li>
                </ul>
                <br/>
                <p>Ele combina </p>
                <br/>
                <ul className="font-bold" >
                    <li>📘 Profundidade de Dados: Informações fornecidas sobre cada veículo.</li>
                    <li>🛠️ Flexibilidade: Personalização total para atender às suas necessidades.</li>
                    <li>⚡ Praticidade: Exportação e filtros que tornam a análise rápida e eficiente.</li>
                </ul>
                <br/>
                <p>
                    Não importa se sua frota opera em ambiente urbano, rodoviário ou misto, o BDV é o aliado estratégico que transforma dados em decisões inteligentes.
                </p>
                <br/>
                <h2 className="font-bold" >Observação: </h2>
                <br/>
                <p>
                    Os relatórios BDV ficam armazenados e acessíveis de acordo com o prazo estabelecido no contrato de cada cliente.
                </p>
                <br/>
                <p>
                    Por isso, é fundamental verificar os termos contratuais para garantir o acesso as suas informações, visto que, após período acordado, os dados serão removidos do sistema e não poderão mais ser consultados.
                </p>
                <br/>
                <h2 className="font-bold">Conclusão</h2>
                <br/>
                <p>
                    O BDV é mais do que um recurso técnico. Ele é a ponte entre a complexidade da gestão de frotas e a simplicidade das decisões bem fundamentadas. Imagine o impacto de identificar padrões de uso, ajustar comportamentos de motoristas e melhorar custos com dados detalhados e acessíveis.
                </p>
                <br/>
                <p>
                    Se você ainda não utiliza o BDV no SSX, agora é o momento de explorar suas possibilidades. Afinal, na gestão de frotas, a informação é o combustível do sucesso.
                </p>
                <br/>
                <h2 className="font-bold" >Abaixo você encontra a explicação de cada coluna do BDV</h2>
                <br/>
                <div>
                   <details>
                      <summary>Unidade rastreada</summary>
                      <p>Nome que identifica o veículo dentro do sistema SSX.</p>
                   </details>
                  
                  <details>
                    <summary>Motorista</summary>
                    <p>Nome do condutor identificado durante o período de utilização.</p>
                  </details>

                  <details>
                    <summary>Data inicial</summary>
                    <p>Data e hora em que o veículo iniciou o período de utilização.</p>
                  </details>

                  <details>
                    <summary>Data Final</summary>
                    <p>Data e hora em que o veículo encerrou o período de utilização.</p>
                  </details>

                  <details>
                    <summary>Tempo parado</summary>
                    <p>Tempo em que o veículo ficou parado no último período sem utilização (desligado).</p>
                  </details>

                  <details>
                    <summary>Distância (GPS)</summary>
                    <p>Distância percorrida calculada com base nos dados de GPS recebidos do rastreador.</p>
                  </details>

                  <details>
                    <summary>Distância (Odo)</summary>
                    <p>Distância percorrida calculada a partir do odômetro do veículo.</p>
                  </details>
                  
                  <details>
                    <summary>Distância (%)</summary>
                    <p>Percentual da distância percorrida em relação ao total consolidado.</p>
                  </details>
                  
                  <details>
                    <summary>Duração (%)</summary>
                    <p>Percentual do tempo de operação em relação ao total consolidado.</p>
                  </details>

                  <details>
                    <summary>Duração (Dt)</summary>
                    <p>Tempo total de utilização do veículo durante o período.</p>
                  </details>
                  
                  <details>
                    <summary>Endereço inicial</summary>
                    <p>Local de partida do veículo no início do período.</p>
                  </details>

                  <details>
                    <summary>Endereço final</summary>
                    <p>Local de chegada do veículo ao fim do período.</p>
                  </details>

                  <details>
                    <summary>Eficiência (km/l)</summary>
                    <p>Média de quilômetros percorridos por litro de combustível durante o período.</p>
                  </details>

                  <details>
                    <summary>Eficiência (l/h)</summary>
                    <p>Média de litros consumidos por hora de funcionamento do veículo.</p>
                  </details>

                  <details>
                    <summary>Unidade organizacional</summary>
                    <p>Nome da unidade organizacional que o veículo pertence.</p>
                  </details>

                  <details>
                    <summary>Consumo (l)</summary>
                    <p>Quantidade total de combustível consumido em litros.</p>
                  </details>

                  <details>
                    <summary>Consumo ideal (l)</summary>
                    <p>Valor calculado que representa o consumo esperado segundo o padrão de eficiência.</p>
                  </details>

                  <details>
                    <summary>Consumo inicial</summary>
                    <p>Quantidade de combustível registrada no início do período.</p>
                  </details>

                  <details>
                    <summary>Consumo final</summary>
                    <p>Quantidade de combustível registrada ao final do período.</p>
                  </details>

                  <details>
                    <summary>Consumo motor ocioso</summary>
                    <p>Estimativa de combustível consumido enquanto o motor esteve ligado, porém com o veículo parado.</p>
                  </details>

                  <details>
                    <summary>Odômetro inicial</summary>
                    <p>Mostra o registro do odômetro da unidade rastreada no início do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Odômetro final</summary>
                    <p>Mostra o registro do odômetro da unidade rastreada ao final do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Motor ocioso (T)</summary>
                    <p>Indica o tempo total em que o veículo permaneceu parado com o motor ligado durante o período de utilização.</p>
                  </details>

                  <details>
                    <summary>Motor ocioso (%)</summary>
                    <p>Mostra o percentual de tempo em que o veículo ficou com o motor ocioso em relação ao período de utilização.</p>
                  </details>
                  
                  <details>
                    <summary>Distância para área geográfica inicial</summary>
                    <p>Exibe a distância entre o local onde o veículo iniciou o período de utilização e a área geográfica mais próxima configurada no sistema.</p>
                  </details>

                  <details>
                    <summary>Distância para área geográfica final</summary>
                    <p>Exibe a distância entre o local onde o veículo encerrou o período de utilização e a área geográfica mais próxima configurada no sistema.</p>
                  </details>

                  <details>
                    <summary>Distância produtiva (km)</summary>
                    <p>Indica a distância percorrida enquanto uma entrada do rastreador permaneceu ativada, representando operação produtiva.</p>
                  </details>

                  <details>
                    <summary>Distância tração</summary>
                    <p>Mostra a distância percorrida enquanto o veículo esteve sob aceleração, ou seja, em tração efetiva.</p>
                  </details>

                  <details>
                    <summary>Distância velocidade baixa</summary>
                    <p>Mostra a distância percorrida enquanto o veículo manteve velocidade considerada baixa.</p>
                  </details>

                  <details>
                    <summary>Economia (R$)</summary>
                    <p>Representa o valor economizado ou gasto a mais em combustível, comparado à meta de eficiência configurada.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 10-20%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 10% e 20%.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 21-40%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 21% e 40%.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 41-60%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 41% e 60%.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 61-80%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 61% e 80%.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 81-90%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 81% e 90%.</p>
                  </details>

                  <details>
                    <summary>Faixa de pedal 91-120%</summary>
                    <p>Indica o tempo em que o motorista pressionou o pedal do acelerador entre 91% e 120%.</p>
                  </details>

                  <details>
                    <summary>Gasto combustível movimento</summary>
                    <p>Mostra o valor gasto com combustível durante o movimento do veículo, calculado com base no consumo em litros e no preço informado no campo Preço do combustível da tela de filtros.</p>
                  </details>

                  <details>
                    <summary>Gasto combustível ocioso</summary>
                    <p>Mostra o valor gasto com combustível enquanto o motor permaneceu ocioso, calculado com base no consumo em litros e no preço informado no campo Preço do combustível da tela de filtros.</p>
                  </details>

                  <details>
                    <summary>Gasto combustível total</summary>
                    <p>Mostra o valor total gasto com combustível no período, considerando o consumo em litros e o preço informado no campo Preço do combustível da tela de filtros.</p>
                  </details>
                  
                  <details>
                    <summary>Horímetro</summary>
                    <p>Mostra o tempo total de utilização da unidade rastreada no período, calculado pela diferença entre o horímetro inicial e o horímetro final.</p>
                  </details>

                  <details>
                    <summary>Grupo de unidades rastreadas</summary>
                    <p>Exibe o nome do grupo de unidades rastreadas ao qual o veículo pertence.</p>
                  </details>

                  <details>
                    <summary>Horímetro</summary>
                    <p>Mostra o tempo total de utilização da unidade rastreada no período, calculado pela diferença entre o horímetro inicial e o horímetro final.</p>
                  </details>

                  <details>
                    <summary>Horímetro inicial</summary>
                    <p>Registra o valor do horímetro primário no início do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Horímetro final</summary>
                    <p>Registra o valor do horímetro primário ao final do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Horímetro 2</summary>
                    <p>Indica o tempo total de utilização de uma atividade secundária na unidade rastreada, calculado pela diferença entre o horímetro 2 inicial e o horímetro 2 final.</p>
                  </details>

                  <details>
                    <summary>Horímetro 2 inicial</summary>
                    <p>Registra o valor inicial do horímetro secundário no início do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Horímetro 2 final</summary>
                    <p>Registra o valor final do horímetro secundário ao término do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Horímetro 3</summary>
                    <p>Indica o tempo total de utilização de uma atividade terciária na unidade rastreada, calculado pela diferença entre o horímetro 3 inicial e o horímetro 3 final.</p>
                  </details>

                  <details>
                    <summary>Horímetro 3 inicial</summary>
                    <p>Registra o valor inicial do horímetro terciário no início do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Horímetro 3 final</summary>
                    <p>Registra o valor final do horímetro terciário ao término do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Matrícula</summary>
                    <p>Mostra a matrícula do motorista informada no cadastro de pessoa do sistema.</p>
                  </details>

                  <details>
                    <summary>Meta consumo (%)</summary>
                    <p>Exibe o percentual de consumo de combustível da unidade rastreada em relação à meta de consumo definida para o período.</p>
                  </details>

                  <details>
                    <summary>Nº do Renavam</summary>
                    <p>Mostra o número da ordem do rastreador responsável pelo registro do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Nº ordem rastreador</summary>
                    <p>Indica o número da ordem do rastreador que registrou o período de utilização</p>
                  </details>

                  <details>
                    <summary>Passageiro</summary>
                    <p>Indica a quantidade de passageiros embarcados durante o período.</p>
                  </details>

                  <details>
                    <summary>Quantidade de frenagem</summary>
                    <p>Mostra o número de vezes em que o pedal de freio foi pressionado no período.</p>
                  </details>

                  <details>
                    <summary>Movimento sem tração</summary>
                    <p>Mostra o tempo em que o veículo esteve em movimento sem aceleração — ou seja, quando o motor estava ligado, mas o deslocamento ocorria apenas pela inércia ou descidas, sem tração ativa.</p>
                  </details>

                  <details>
                    <summary>Marcha lenta</summary>
                    <p>Indica o tempo em que o motor permaneceu ligado com o veículo parado e sem aceleração.</p>
                  </details>

                  <details>
                    <summary>Parado acelerando</summary>
                    <p>Mostra o tempo em que o veículo esteve parado, mas com o motor em rotação acima da marcha lenta, indicando que o acelerador estava sendo pressionado.</p>
                  </details>

                  <details>
                    <summary>RPM (máx.)</summary>
                    <p>Mostra o valor máximo de rotação do motor atingido durante o período de utilização.</p>
                  </details>

                  <details>
                    <summary>RPM (médio)</summary>
                    <p>Mostra o valor médio de rotação do motor durante o período de utilização.</p>
                  </details>

                  <details>
                    <summary>RPM alto</summary>
                    <p>Mostra o tempo em que o motor operou acima da faixa econômica de rotação, indicando maior consumo de combustível.</p>
                  </details>

                  <details>
                    <summary>RPM baixo</summary>
                    <p>Mostra o tempo em que o motor operou abaixo da faixa econômica de rotação, também indicando maior consumo de combustível.</p>
                  </details>

                  <details>
                    <summary>Econômica</summary>
                    <p>Indica o tempo em que o motor operou em uma faixa de rotação eficiente, com bom equilíbrio entre torque e consumo de combustível.</p>
                  </details>

                  <details>
                    <summary>Super econômica</summary>
                    <p>Mostra o tempo em que o motor operou com rotação mínima ideal para manter o veículo em movimento com altíssima eficiência de combustível.</p>
                  </details>

                  <details>
                    <summary>Violação de RPM</summary>
                    <p>Exibe o tempo em que o motor ultrapassou o limite máximo de rotação recomendado.</p>
                  </details>

                  <details>
                    <summary>Outras faixas</summary>
                    <p>Mostra o tempo em que o motor operou fora das faixas principais de rotação monitoradas.</p>
                  </details>
                  
                  <details>
                    <summary>Tanque inicial</summary>
                    <p>Exibe o nível de combustível ao final do período de utilização, conforme leitura enviada pelo rastreador (em percentual ou valor inteiro).</p>
                  </details>
                  
                  <details>
                    <summary>Temp. máxima do frigorífico 1</summary>
                    <p>Mostra a temperatura máxima registrada na câmara frigorífica monitorada pela saída primária.</p>
                  </details>

                  <details>
                    <summary>Temp. máxima do frigorífico 2</summary>
                    <p>Mostra a temperatura máxima registrada na câmara frigorífica monitorada pela saída secundária.</p>
                  </details>

                  <details>
                    <summary>Temp. máxima do frigorífico 3</summary>
                    <p>Mostra a temperatura máxima registrada na câmara frigorífica monitorada pela saída terciária.</p>
                  </details>

                  <details>
                    <summary>Temp. média do frigorífico 1</summary>
                    <p>Mostra a temperatura média registrada na câmara frigorífica monitorada pela saída primária.</p>
                  </details>

                  <details>
                    <summary>Temp. média do frigorífico 2</summary>
                    <p>Mostra a temperatura média registrada na câmara frigorífica monitorada pela saída secundária.</p>
                  </details>
                  
                  <details>
                    <summary>Temp. média do frigorífico 3</summary>
                    <p>Mostra a temperatura média registrada na câmara frigorífica monitorada pela saída terciária.</p>
                  </details>

                  <details>
                    <summary>Temp. mínima do frigorífico 1</summary>
                    <p>Mostra a temperatura mínima registrada na câmara frigorífica monitorada pela saída primária.</p>
                  </details>

                  <details>
                    <summary>Temp. mínima do frigorífico 2</summary>
                    <p>Mostra a temperatura mínima registrada na câmara frigorífica monitorada pela saída secundária.</p>
                  </details>

                  <details>
                    <summary>Temp. mínima do frigorífico 3</summary>
                    <p>Mostra a temperatura mínima registrada na câmara frigorífica monitorada pela saída terciária.</p>
                  </details>
                  
                  <details>
                    <summary>Tempo acima da velocidade</summary>
                    <p>Mostra o tempo em que o veículo permaneceu acima do limite de velocidade dentro do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Tempo de frenagem</summary>
                    <p>Indica o tempo total em que o pedal de freio permaneceu pressionado durante a viagem.</p>
                  </details>

                  <details>
                    <summary>Tempo EcoRoll</summary>
                    <p>Mostra o tempo em que o veículo operou na faixa de rotação EcoRoll, ou seja, deslocando-se com o motor desacoplado para maior economia de combustível.</p>
                  </details>

                  <details>
                    <summary>Tempo inércia</summary>
                    <p>Mostra o tempo em que o veículo permaneceu na faixa de rotação “Inércia”, ou seja, deslocando-se sem aceleração ativa.</p>
                  </details>

                  <details>
                    <summary>Tempo Retarder</summary>
                    <p>Indica o tempo em que o veículo operou com o sistema de frenagem auxiliar (Retarder) acionado, dentro da faixa de RPM correspondente.</p>
                  </details>
                  
                  <details>
                    <summary>Distância EcoRoll</summary>
                    <p>Exibe a distância percorrida pelo veículo enquanto estava na faixa de rotação EcoRoll, onde o motor se desacopla para economizar combustível.</p>
                  </details>

                  <details>
                    <summary>Distância inércia</summary>
                    <p>Mostra a distância percorrida pelo veículo na faixa de inércia, quando se desloca sem aceleração ativa.</p>
                  </details>

                  <details>
                    <summary>Distância Retarder</summary>
                    <p>Mostra a distância percorrida enquanto o sistema Retarder esteve em funcionamento.</p>
                  </details>
                  
                  <details>
                    <summary>Tempo faixa velocidade 1</summary>
                    <p>Indica o tempo total em que o veículo permaneceu na faixa de velocidade de 0 a 40 km/h, conforme configuração do SSX.</p>
                  </details>

                  <details>
                    <summary>Tempo faixa velocidade 2</summary>
                    <p>Indica o tempo total em que o veículo permaneceu na faixa de velocidade de 41 a 70 km/h, conforme configuração do SSX.</p>
                  </details>

                  <details>
                    <summary>Tempo faixa velocidade 3</summary>
                    <p>Indica o tempo total em que o veículo permaneceu na faixa de velocidade de 71 a 90 km/h, conforme configuração do SSX.</p>
                  </details>

                  <details>
                    <summary>Tempo faixa velocidade 4</summary>
                    <p>Indica o tempo total em que o veículo permaneceu acima de 90 km/h, conforme configuração do SSX.</p>
                  </details>

                  <details>
                    <summary>Tempo produtivo</summary>
                    <p>Representa o tempo em que o veículo ficou parado com o motor ligado, mas com uma entrada do rastreador acionada, indicando atividade produtiva.</p>
                  </details>
                  
                  <details>
                    <summary>Tempo tolerância</summary>
                    <p>Mostra o tempo em que o veículo permaneceu dentro da tolerância configurada para faixas de RPM consideradas ruins.</p>
                  </details>

                  <details>
                    <summary>Tempo velocidade baixa</summary>
                    <p>Mostra o tempo em que o veículo trafegou em velocidades baixas durante o período de utilização.</p>
                  </details>
                  
                  <details>
                    <summary>Vel. máxima</summary>
                    <p>Exibe a velocidade máxima atingida pela unidade rastreada dentro do período de utilização.</p>
                  </details>
                  
                  <details>
                    <summary>Vel. média em movimento</summary>
                    <p>Mostra a velocidade média calculada a partir dos dados de odômetro, considerando apenas momentos em que o veículo estava em movimento (velocidade acima de zero).</p>
                  </details>

                  <details>
                    <summary>Vel. média GPS</summary>
                    <p>Mostra a velocidade média calculada com base nos dados de geolocalização (GPS) durante o período de utilização.</p>
                  </details>

                  <details>
                    <summary>Vel. média odômetro</summary>
                    <p>Exibe a velocidade média calculada a partir da telemetria do odômetro ao longo do período de utilização.</p>
                  </details>

                  <details>
                    <summary>Peso médio (t)</summary>
                    <p>Mostra o peso médio total do veículo (veículo + carga) dentro do período de utilização.</p>
                  </details>
                </div>
                </div>
            </div>
        </div>
    );
}