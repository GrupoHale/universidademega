import PerformanceSegura from "../../pages/BaseConhecimento/img/PerformanceSegura.png";
import PerformanceEconomica from "../../pages/BaseConhecimento/img/PerformanceEconomica.png";
import AcessarFormulaAvaliacao from "../../pages/BaseConhecimento/img/AcessarFormulaAvaliacao.png";
import CriarFormulaAvaliacao from "../../pages/BaseConhecimento/img/CriarFormulaAvaliacao.png";
import ConfigFormulaAvaliacao from "../../pages/BaseConhecimento/img/ConfigFormulaAvaliacao.png";
import ConfigFormulaAvaliacao2 from "../../pages/BaseConhecimento/img/ConfigFormulaAvaliacao2.png";
import EventosDirecaoSegura from "../../pages/BaseConhecimento/img/EventosDirecaoSegura.png";
import RegrasDeAvaliacao from "../../pages/BaseConhecimento/img/RegrasDeAvaliacao.png";
import AssociarMotoristaAvaliacao from "../../pages/BaseConhecimento/img/AssociarMotoristaAvaliacao.png";
import MetaConsumo3 from "../../pages/BaseConhecimento/img/MetaConsumo3.png";
import CadastrarMetaConsumo from "../../pages/BaseConhecimento/img/CadastrarMetaConsumo.png";
import PerformanceDashboard from "../../pages/BaseConhecimento/img/PerformanceDashboard.png";
import PerformanceDashboard2 from "../../pages/BaseConhecimento/img/PerformanceDashboard2.png";
import PerformanceDashboard3 from "../../pages/BaseConhecimento/img/PerformanceDashboard3.png";
import PerformanceFormulaPontos from "../../pages/BaseConhecimento/img/PerformanceFormulaPontos.png";
import PerformancePontuacaoFinal from "../../pages/BaseConhecimento/img/PerformancePontuacaoFinal.png";
import PerformanceSSXOnboard from "../../pages/BaseConhecimento/img/PerformanceSSXOnboard.png";

export default function Performance() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Performance</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Monitore e analise métricas de performance de motoristas e para otimização contínua.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400 mb-6">
                        <p>
                            O módulo Performance permite monitorar o comportamento dos motoristas e veículos de uma frota. Seu objetivo é fornecer indicadores para tomada de decisão, através de recursos e dados de direção segura, econômica e consumo dos veículos, de maneira que o gestor da frota e até o próprio condutor consiga:
                        </p>
                        <br />
                        <p>
                            🔍 Avaliar o desempenho na condução dos veículo.
                        </p>
                        <br />
                        <p>
                            ⚠️ Atuar na prevenção de acidentes.
                        </p>
                        <br />
                        <p>
                            ⛽ Gerenciar o consumo de combustível individual e da frota.
                        </p>
                        <br />
                        <p>
                            📱📊 Disponibilizar ao motorista o acompanhamento de seu resultado dentro do ranking.
                        </p>
                        <br />
                        <p>
                            Na <span className="font-bold">direção segura</span>, como principais fontes de informação deste tipo de comportamento, temos os eventos:
                        </p>
                        <br/>
                        <img src={PerformanceSegura} alt="Performance Direção Segura" />
                        <br />
                        <p>
                            Na <span className="font-bold">direção econômica</span> o foco está em verificar, o tempo de condução em cada faixa de RPM* como por exemplo:
                        </p>
                        <br/>
                        <img src={PerformanceEconomica} alt="Performance Direção Economica" />
                        <br />

                        <p>
                            <span className="font-bold" >Observação: </span> no início de qualquer intervalo de avaliação (período designado no dashboard) o motorista começa com 100 pontos e vai perdendo esses pontos de acordo com as infrações que vai cometendo dentro da configuração de direção segura e econômica.
                        </p>
                        <h2>Confira os passos para elaborar a avaliação de motoristas</h2>
                        <br />
                        <h2>1° Passo</h2>
                        <p>
                            Criar as regras que serão utilizadas para avaliar os motoristas sob o aspecto de direção segura.
                        </p>
                        <br />
                        <h2>2° Passo</h2>
                        <p>
                            Já ter cadastrado as pessoas(motoristas) que serão avaliadas pelo Performance. Isso porque é a partir da identificação do motorista que ele começa a ser avaliado, ou seja, sem identificação, sem performance.
                        </p>
                        <br />
                        <p>
                            Se a identificação do motorista for realizada por iButton ou RFID esse usuário não precisa ter um perfil de acesso atrelado, contudo se a identificação ocorrer por Onboard então um perfil deve ser vinculado no usuário.
                        </p>
                        <br />
                        <h2>3° Passo</h2>
                        <p>
                            Criar a fórmula que vai avaliar o motorista.
                        </p>
                        <br />
                        <h2>3.1 Passo</h2>
                        <p>
                            Acesse a Administração , em seguida clique em Fórmulas de avaliação que fica no menu Avaliação dos Motoristas
                        </p>
                        <img src={AcessarFormulaAvaliacao} alt="" />
                        <br />
                        <p>Clique no sinal de '<span className="font-bold" >+</span>' para criar uma formula de avaliacao.</p>
                        <img src={CriarFormulaAvaliacao} alt="" />
                        <br />
                        <p>
                            Nessa primeira tela de configuração da fórmula são definidos os parâmetros que irão ser utilizados para avaliação da condução econômica. Para que o Performance funcione sob este aspecto é, necessário que o rastreador esteja integrado com a rede CAN do veículo e colete as faixas de RPM ou que ele seja capaz de obter o número do RPM nas posições e que as faixas de RPM estejam configuradas no SSX.
                        </p>
                        <br />
                        <img src={ConfigFormulaAvaliacao} alt="" />
                        <br />
                        <img src={ConfigFormulaAvaliacao2} alt="" />
                        <br />
                        <h2>5.2 Passo</h2>
                        <p>
                            Em Regras para avaliação vamos escolher as regras que serão consideradas na fórmula de avaliação
                        </p>
                        <img src={EventosDirecaoSegura} alt="" />
                        <img src={RegrasDeAvaliacao} alt="" />
                        <br />
                        <p>
                            Para cada regra é necessário definir quantos pontos o motorista irá perder por infração cometida. Esse é um ponto crucial na formatação desse modelo de avaliação porque o frotista deve levar em consideração alguns aspectos de sua operação como por exemplo o tipo de veículo utilizado, tipo de carga transportada, valor da carga e até características do itinerário do transporte. Uma boa prática é padronizar infrações em níveis onde teríamos infração leve, grave e gravíssima.
                        </p>
                        <br />
                        <h2>5.3 Passo</h2>
                        <p>
                            Associar a fórmula ao(s) usuário(s) com cargo de motorista
                        </p>
                        <img src={AssociarMotoristaAvaliacao} alt="" />
                        <br />
                        <h2>6° Passo</h2>
                        <p>
                            Configurar a Meta de Consumo
                        </p>
                        <br />
                        <p>
                            Essa metodologia compara o desempenho real de um veículo (com base na eficiência registrada) com uma meta previamente definida, considerando a base da economia como ponto de referência. O objetivo é verificar, em termos percentuais, o quanto o veículo se aproximou ou se distanciou da meta estipulada de consumo de combustível.
                        </p>
                        <br />
                        <p>
                            No dashboard do Performance há uma área chamada Meta de Consumo, que pode ser calculada por distância ou horas*.
                        </p>
                        <br />
                        <p>
                            <span className="font-bold" >Observação: </span> para utilizar essa ferramenta é imprescindível que o rastreador colete as informações de consumo de combustível geradas pela rede CAN e as envie para o SSX, levando em consideração que para o cálculo da meta de consumo são necessários os dados: Base da Economia, Meta e Eficiência
                        </p>
                        <br />
                        <h2 className="font-bold" >Mas Onde e Como a Gente Registra Essas Medidas Estruturais?</h2>
                        <br />
                        <img src={MetaConsumo3} alt="" />
                        <p>
                            Na tela de meta de consumo é possível criar diferentes metas, que logicamente devem estar de acordo com o tipo, modelo e/ou porte do veículo.
                        </p>
                        <br />
                        <p>
                            Siga as etapas abaixo para cadastrar uma meta de consumo:
                        </p>
                        <img src={CadastrarMetaConsumo} alt="" />
                        <br />
                        <p>
                            Sugerimos que a Base da economia seja a eficiência média do veículo e que a meta indique o ponto de consumo que se quer atingir.
                        </p>
                        <br />
                        <p>
                            Logo, se a eficiência de consumo de combustível do veículo for igual a base da economia ele atingiu 0% da meta de consumo, não melhorou e nem piorou nada.
                        </p>
                        <p>
                            Se a eficiência dele for igual a meta de consumo, então ele atingiu 100% da meta.
                        </p>
                        <br />
                        <p>
                            Ou seja, a base está para 0% e a meta está para 100%.
                        </p>
                        <br />
                        <p>
                            Após a criação da meta de consumo é imprescindível vinculá-la no cadastro do(s) veículo(s)
                        </p>
                        <br />
                        <h1>7° Passo</h1>
                        <p>
                            Aguardar a consolidação dos dados para começar a obter os resultados no Dashboard de avaliação e demais relatórios.
                        </p>
                        <br />
                        <h2>Dashboard</h2>
                        <p>
                            Disponibiliza painéis gráficos que mostram o resultado das avaliações baseadas em condução segura e econômica, além de possuir uma seção voltada para o controle do consumo de combustível em comparação a uma meta pré-definida pelo gestor da frota.
                        </p>
                        <br />
                        <img src={PerformanceDashboard} alt="" />
                        <img src={PerformanceDashboard2} alt="" />
                        <br />
                        <p>
                            Quanto a análise dos dados do ranking de motoristas apresentado no Dashboard, existe uma lógica de equivalência que permite a comparação justa entre os motoristas.
                        </p>
                        <p>
                            Sabendo que os motoristas podem percorrer quilometragens diferentes entre si em seus expedientes de trabalho, ou até mesmo trabalhar quantidades diferentes de horas, o Performance equipara a avaliação de todos eles em 100 Km. Logo, independente do tempo de trabalho ou quilometragem percorrida, eles sempre serão mensurados na medida de 100 Km.
                        </p>
                        <p>
                            No exemplo abaixo o motorista Alexandre perdeu 15 pontos, em 4 quilometro e 11 metros percorridos(informação extraída do BDV), por infrações de aceleração brusca no período filtrado no relatório.
                        </p>
                        <img src={PerformanceDashboard3} alt=""/>
                        <br/>
                        <h2 className="font-bold">Então temos: </h2>
                        <br/>
                        <img src={PerformanceFormulaPontos} alt="" />
                        <br/>
                        <h2 className="font-bold" >Cálculo da Pontuação Final do Motorista:</h2>
                        <img src={PerformancePontuacaoFinal} alt="" />
                        <br/>
                        <h2 className="font-bold" >Avaliação Do Motorista No Aplicativo Onboard</h2>
                        <br/>
                        <img src={PerformanceSSXOnboard} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
