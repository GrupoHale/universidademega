import GestaoDeMultasImagem from "../../pages/BaseConhecimento/img/GestaoDeMultas.png"
import GestaoDeMultasDashboard from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboard.png"
import GestaoDeMultasDashboardGeral from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardGeral.png"
import GestaoDeMultasDashboardGeral2 from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardGeral2.png"
import GestaoDeMultasDashboardGeral3 from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardGeral3.png"
import GestaoDeMultasDashboardGeral4 from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardGeral4.png"
import GestaoDeMultasDashboardFiltros from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardFiltros.png"
import GestaoDeMultasGrafico from "../../pages/BaseConhecimento/img/GestaoDeMultasGrafico.png"
import GestaoDeMultasGrafico2 from "../../pages/BaseConhecimento/img/GestaoDeMultasGrafico2.png"
import GestaoDeMultasDashboardCondutores from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardCondutores.png"
import GestaoDeMultasDashboardVeiculos from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardVeiculos.png"
import GestaoDeMultasDashboardVeiculos2 from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardVeiculos2.png"
import GestaoDeMultasDashboardLicencas from "../../pages/BaseConhecimento/img/GestaoDeMultasDashboardLicencas.png"
import GestaoDeMultasFrotasFiltro from "../../pages/BaseConhecimento/img/GestaoDeMultasFrotasFiltro.png"
import GestaoDeMultasFrotasFiltro2 from "../../pages/BaseConhecimento/img/GestaoDeMultasFrotasFiltro2.png"
import GestaoDeMultasCadastrarCondutor from "../../pages/BaseConhecimento/img/GestaoDeMultasCadastrarCondutor.png"
import GestaoDeMultasCadastrarCondutor2 from "../../pages/BaseConhecimento/img/GestaoDeMultasCadastrarCondutor2.png"
import GestaoDeMultasNotificacoesFiltro from "../../pages/BaseConhecimento/img/GestaoDeMultasNotificacoesFiltro.png"
import GestaoDeMultasInfracoes from "../../pages/BaseConhecimento/img/GestaoDeMultasInfracoes.png"
import GestaoDeMultasInfracoes2 from "../../pages/BaseConhecimento/img/GestaoDeMultasInfracoes2.png"
import GestaoDeMultasRelatoriosVeiculos from "../../pages/BaseConhecimento/img/GestaoDeMultasRelatoriosVeiculos.jpg"
import GestaoDeMultasRankingCondutores from "../../pages/BaseConhecimento/img/GestaoDeMultasRankingCondutores.png"
import GestaoDeMultasRelatoriosMultas from "../../pages/BaseConhecimento/img/GestaoDeMultasRelatoriosMultas.png"
import GestaoDeMultasRelatoriosMultas2 from "../../pages/BaseConhecimento/img/GestaoDeMultasRelatoriosMultas2.png"
import GestaoDeMultasRelatoriosNotificacoes from "../../pages/BaseConhecimento/img/GestaoDeMultasRelatoriosNotificacoes.jpg"
import GestaoDeMultasNaoPodeFazer from "../../pages/BaseConhecimento/img/GestaoDeMultasNaoPodeFazer.png"

export default function GestaoDeMultas() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Gestão de Multas </h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Controle de Infrações</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Identifique, analise e gerencie multas e infrações de trânsito da sua frota.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                        </p>

                        <div className="space-y-4">
                            <h2 className="font-bold text-xl" >Introdução</h2>

                            <p>
                                O Gestão de Multas é uma ferramenta que, em relação a multas e notificações:
                            </p>

                            <img src={GestaoDeMultasImagem} alt="" />

                            <p>
                                No entanto, sua principal vantagem é antecipar o recebimento de multas e notificações, o que permite um tratamento eficiente dessas pendências.
                            </p>

                            <h3 className="font-bold text-xl" >O processo de infrações funciona da seguinte forma:</h3>

                            <p>
                                Você tem o fato gerador que é uma violação que ocorreu e foi aplicada por um agente autuador ou por um radar de alguma via.
                            </p>

                            <p>
                                Essa informação chega no órgão principal que se chama RENAINF e posteriormente chega no órgão autuador regional, que pode ser uma prefeitura, Detran, Dnit ou DER, para só depois disso chegar no cliente final com um tempo médio de 30 dias.
                            </p>

                            <p>
                                Como o Gestão de Multas está no estágio inicial desse processo, ele consegue antecipar as informações de multas e notificações para as empresas participantes em um prazo máximo de 7 dias.
                            </p>

                            <h3 className="font-bold text-xl">Case do produto</h3>

                            <p>
                                Uma das maiores dores das empresas de transporte acontece quando um condutor é desligado da empresa, dali a um, dois meses começam a chegar algumas infrações que foram cometidas por ele e que a empresa precisa absorver esse custo porque ele já foi desligado e ela não tem mais como reaver esse valor.
                            </p>

                        </div>

                        <div className="space-y-4" >
                            <h2>Órgãos associados ao módulo Gestão de Multas</h2>

                            <ul className="list-disc list-inside space-y-2 ">
                                <li>PRF (Polícia Rodoviária Federal)</li>
                                <li>DERs (Departamentos Estaduais de Estradas de Rodagem)</li>
                                <li>DNIT (Departamento Nacional de Infraestrutura de Transportes)</li>
                            </ul>

                            <p>
                                Além desses, o módulo também abrange multas emitidas por prefeituras municipais. Como existem mais de 5 mil prefeituras no Brasil, não possuímos uma listagem exata de cada uma delas. No entanto, nossa cobertura contempla quase a totalidade das autuações municipais, por meio de:
                            </p>

                            <ul className="list-disc list-inside space-y-2" >
                                <li>Integração com o Renainf (Registro Nacional de Infrações de Trânsito), que centraliza multas interestaduais e municipais registradas pelos Detrans de cada Estado</li>
                                <li>Consultas diretas a bancos de dados estaduais</li>
                                <li>Integração com o SNE (Sistema de Notificação Eletrônica), que concentra autuações de diversos órgãos que aderiram ao sistema</li>
                            </ul>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Dashboards</h2>

                            <p>
                                Os dashboards vão te dar uma visão consolidada e gráfica para você ter um panorama rápido dentro de cada cenário explorado.
                            </p>

                            <img src={GestaoDeMultasDashboard} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2>Dashboard Geral</h2>

                            <p>
                                Ǫuando é feito o acesso ao módulo de gestão de multas você entra no Dashboard Geral que já exibe alguns totais:
                            </p>

                            <img src={GestaoDeMultasDashboardGeral} alt="" />

                            <p className="font-bold text-xl flex justify-center" >Abaixo</p>

                            <img src={GestaoDeMultasDashboardGeral2} alt="" />

                            <p className="font-bold text-xl flex justify-center">Mais abaixo</p>

                            <div className="grid grid-cols-2 space-y-4" >
                                <p>
                                    No lado esquerdo temos o ranking das <strong>infrações</strong> por tipo de enquadramento, relacionando valor e quantidade total das multas.
                                    <br />
                                    <strong className="bg-red-200" >Clicando aqui nos três pontinhos você pode exportar esses dados para uma planilha ou imagem.</strong>
                                </p>
                                
                                <p>
                                    Já do lado direito é mostrada a quantidade de <strong>infrações</strong> do mês atual segmentada pela data de vencimento.
                                </p>

                            </div>

                            <img src={GestaoDeMultasDashboardGeral3} alt="" />

                            <div className="space-y-4" >
                            
                                <h3 className="font-bold text-xl flex justify-center" >Um pouco mais abaixo</h3>

                            </div>


                            <div className="grid grid-cols-2">
                                <p>
                                    No lado esquerdo temos o ranking das <strong>notificações</strong> por tipo de enquadramento, relacionando valor e quantidade total das notificações.
                                    <br />
                                    <strong className="bg-red-200" >Clicando aqui nos três pontinhos você pode exportar esses dados para uma planilha ou imagem.</strong>
                                </p>

                                <p>
                                    Já do lado direito é mostrada a quantidade de <strong>notificações</strong> do mês atual segmentada pela data de vencimento.
                                </p>

                            </div>

                            <img src={GestaoDeMultasDashboardGeral4} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Dashboard Multas</h2>

                            <p>
                                Aqui de cara você já consegue fazer alguns filtros.
                            </p>

                            <img src={GestaoDeMultasDashboardFiltros} alt="" />

                            <p>
                                Rolando mais pra baixo nós temos um quadro gráfico dos meses e quantidade percentual de multas recebidas que dá uma visão importante, que é entender qual é o momento que a sua operação tomou mais multas.
                            </p>

                            <img src={GestaoDeMultasGrafico} alt="" />

                            <p>
                                Seguindo em frente mais abaixo temos um gráfico de curvas traçando o volume de multas recebidas dentro do período filtrado.
                            </p>

                            <img src={GestaoDeMultasGrafico2} alt="" />

                            <p>
                                Esses dados também podem ser exportados de acordo com o formato desejado.
                            </p>
                        </div>

                        <div className="space-y-4"  >
                            <h2 className="font-bold text-xl" >DashBoard Condutores</h2>

                            <p>
                                Essa tela já abre com um ranking de condutores de acordo com os pontos perdidos na CNH, também como um gráfico de barras expondo a quantidade de CNH com vencimento nos próximos 6 meses.
                            </p>

                            <img src={GestaoDeMultasDashboardCondutores} alt="" />

                            <p>
                                Mais abaixo são exibidos os cursos realizados pelos condutores de acordo com o que está cadastrado no perfil do condutor.
                            </p>
                        </div>
                        
                        <div className="space-y-4" >
                            <h2>Dashboard de Veículos</h2>

                            <p>
                                No dashboard de veículos você tem esse gráfico de rosca com o panorama comparativo dos veículos com e sem restrição.
                            </p>

                            <p>
                                Ao lado mostra a divisão gráfica com os motivos dessas restrições. (Essas restrições podem ser furto, roubo, Renajud ou outros...)
                            </p>
                            
                            <img src={GestaoDeMultasDashboardVeiculos} alt="" />

                            <p>
                                Mais abaixo a plataforma já traz um panorama comparativo de débitos de acordo com o valor das multas e do lado mostrará quais são os tipos de débitos, se é IPVA, se é licenciamento ou se é Dpvat.
                            </p>

                            <img src={GestaoDeMultasDashboardVeiculos2} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Dashboard de Licenças</h2>

                            <p>
                                No dashboard de licenças são exibidos, por padrão, a quantidade de veículos com Cronotacôgrafo, outras licenças podem ser adicionadas manualmente.
                            </p>

                            <p>
                                E a relação de licenças vencidas e a vencer aqui no gráfico do lado direito.
                            </p>
                            
                            <p className="bg-red-200 font-bold" >
                                Cronotacôgrafo: É a caixa preta do veículo (é um instrumento que registra quanto tempo está rodando, velocidade entre outras informações)
                            </p>

                            <img src={GestaoDeMultasDashboardLicencas} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Frotas</h2>

                            <h3 className="font-bold text-lg" >Veículos</h3>

                            <p>
                                Na parte superior da tela temos o ícone de download para exportar uma planilha com todos os dados que têm nos veículos e a seção de filtros.
                            </p>

                            <img src={GestaoDeMultasFrotasFiltro} alt="" />

                            <p>
                                Na parte inferior da tela temos a lista de veículos com informações de registro.
                            </p>

                            <p>
                                Você pode acessar o perfil de um veículo clicando na placa.
                            </p>

                            <img src={GestaoDeMultasFrotasFiltro2} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Condutores</h2>

                            <p>
                                Essa tela dá a opção de cadastrar os condutores, exportar os dados desses motoristas, importar um arquivo com os dados dos condutores
                            </p>

                            <img src={GestaoDeMultasCadastrarCondutor} alt="" />
                            
                            <p>
                                Também é mostrada a relação dos condutores com informações como CPF, CNH, Pontuação da CNH e empresas por exemplo.
                            </p>

                            <img src={GestaoDeMultasCadastrarCondutor2} alt="" />
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >Multas</h2>

                            <h3 className="font-bold text-lg" >Notificações</h3>

                            <p>
                                É tudo aquilo que é antes de virar multa, ou seja, é aquele prazo que o regulador dá para indicar o condutor ou recorrer da multa.
                            </p>

                            <p>
                                A gente consegue fazer uma série de filtros na parte superior e mais abaixo vem a grid das notificações.
                            </p>

                            <img src={GestaoDeMultasNotificacoesFiltro} alt="" />

                            <p>
                                Você pode acessar o detalhamento da notificação basta clicar em cima do número do AIT ou no ícone no final da linha na grade.
                            </p>

                            <p className="bg-red-200" >
                                A notificação serve para informar o proprietário de uma infração de trânsito cometida com seu veículo.
                            </p>

                            <h3>Infrações</h3>

                            <p>
                                Essa tela é muito parecida com a de notificações, o que muda é que já virou infração e aí não dá para recorrer nem indicar o condutor, mas a construção da página é muito similar.
                            </p>

                            <p>
                                A coluna AIT (Auto de Infração de Trânsito) pode estar sinalizada com os seguintes ícone:
                            </p>
                    
                            <img src={GestaoDeMultasInfracoes} alt="" />

                            <p>
                                Para baixar o boleto basta acessar a infração clicando no código AIT ou no ícone no final da linha na grade, localizar a seção Anexos e clicar no botão de donwload.
                            </p>

                            <img src={GestaoDeMultasInfracoes2} alt="" />

                            <p className="bg-red-200" >
                                A multa tem a finalidade de aplicar uma punição ao motorista responsável por desrespeitar alguma lei de trânsito.
                            </p>
                        </div>

                        <div className="space-y-4" >

                            <h2 className="font-bold text-xl" >Relatórios</h2>

                            <h3 className="font-bold text-lg" >Veículos</h3>

                            <p>
                                Nesse relatório a gente consegue visualizar os veículos que mais estão tomando multas também como o valor total das multas.
                            </p>

                            <p>
                                Ele também mostra o panorama dos licenciamentos.
                            </p>

                            <img src={GestaoDeMultasRelatoriosVeiculos} alt="" />

                            <h3 className="font-bold text-lg" >Condutores</h3>

                            <p>
                                Aqui em condutores de acordo com o que a gente vai cadastrando, indicando e registrando os pontos perdidos, vai gerando dados aqui no Ranking por pontuação na CNH e no Ranking de condutores indicados.
                            </p>

                            <img className="flex justify-center"  src={GestaoDeMultasRankingCondutores} alt="" />

                            <h3 className="font-bold text-lg" >Nultas</h3>

                            <p>
                                Em multas ele me traz o gráfico com o código das infrações e o valor total das multas e um outro gráfico com a relação entre multas pagas e não pagas nos últimos 6 meses, concluindo mais abaixo com um relatório de multas canceladas.
                            </p>

                            <img src={GestaoDeMultasRelatoriosMultas} alt="" />
                            <img src={GestaoDeMultasRelatoriosMultas2} alt="" />

                            <h3 className="font-bold text-lg" >Notificações</h3>

                            <p>
                                O relatório de notificações nos mostra um ranking das notificações por código de infração e ao lado um comparativo de entre notificações indicadas e não indicadas.
                            </p>

                            <img src={GestaoDeMultasRelatoriosNotificacoes} alt="" />
                        </div>

                        <div>
                            <img src={GestaoDeMultasNaoPodeFazer} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}