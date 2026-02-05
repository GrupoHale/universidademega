import AbastecimentoParcial from "../../pages/BaseConhecimento/img/AbastecimentoParcial.png"
import AbastecimentoTanqueCheio from "../../pages/BaseConhecimento/img/AbastecimentoTanqueCheio.png"
import SelecionarCalculoEficiecia from "../../pages/BaseConhecimento/img/SelecionarCalculoEficiencia.png"
import CalculoParcial from "../../pages/BaseConhecimento/img/CalculoParcial.jpg"
import CalculoTanqueCheio from "../../pages/BaseConhecimento/img/CalculoTanqueCheio.jpg"
import CalculoAutonomia from "../../pages/BaseConhecimento/img/CalculoAutonomia.png"

export default function Eficiencia() {
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Eficiência</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className=" space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Eficiência veicular é a relação entre o desempenho do veículo (distância percorrida ou tempo de uso) e o consumo de combustível. No SSX, essa métrica é expressa em:
                        </p>
                        
                        <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-700 leading-relaxed font-medium">
                            </p>

                            <div className="space-y-4">
                                <h2 className="font-bold text-xl">O que é eficiência?</h2>

                                <p>
                                    Eficiência veicular é a relação entre o desempenho do veículo (distância percorrida ou tempo de uso) e o consumo de combustível. No SSX, essa métrica é expressa em:
                                </p>
                                
                                <ul>
                                    <li><strong>Km/L</strong> – quando a medição é feita por distância percorrida.</li>

                                    <li><strong>L/h </strong> – quando a medição é feita por tempo de motor ligado.</li>
                                </ul>

                                <p>
                                    Essa métrica é fundamental para entender se os veículos estão operando dentro de padrões aceitáveis de consumo. Controlar a eficiência ajuda a:
                                </p>

                                <ul>
                                    <li>Reduzir os custos com combustível;</li>
                                    <li>Detectar falhas de manutenção;</li>
                                    <li>Avaliar o comportamento de condução dos motoristas;</li>
                                    <li>Planejar ações corretivas ou preventivas.</li>
                                </ul>
                            </div>

                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl" >Como o SSX calcula a eficiência?</h2>

                                <p>
                                    O cálculo de eficiência no SSX é realizado com base na configuração definida no cadastro do veículo, podendo ser de dois tipos:
                                </p>

                                <div className="grid grid-cols-2" >
                                    <div className="space-y-4" >
                                        <img src={AbastecimentoParcial} alt="" />
                                        <p>
                                            Nesta configuração, a eficiência é calculada a cada abastecimento, considerando:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2">
                                            <li>A distância percorrida desde o último abastecimento;</li>
                                            <li>A quantidade de litros registrada no abastecimento atual.</li>
                                        </ul>
                                        <p>
                                            Além disso, é possível definir quantos abastecimentos serão considerados para consolidar o cálculo da eficiência.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <img src={AbastecimentoTanqueCheio} alt="" />   
                                        <p>
                                            Neste modo, a eficiência só é calculada quando for informado que o tanque foi completado. Nesse caso, o sistema considera:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2" >
                                            <li>A distância percorrida desde o último abastecimento em que o tanque foi preenchido até o abastecimento atual;</li>
                                            <li>O total de litros consumidos nesse intervalo.</li>
                                        </ul>

                                        <p>
                                            A tela abaixo mostra o campo do cadastro de veículo no SSX onde é possível definir o parâmetro utilizado para o cálculo da eficiência
                                        </p>
                                    </div>
                                </div>

                                    <img src={SelecionarCalculoEficiecia} alt="" />
                            </div>

                            <div className="space-y-4">
                                <h2>Regras de negócio</h2>

                                <p>
                                    Para que o sistema calcule a eficiência de um veículo, algumas regras de negócio precisam ser atendidas.
                                </p>

                                <p className="font-bold">
                                    ✅ Pré-requisitos para o cálculo:
                                </p>

                                <ul className="list-decimal list-inside space-y-2" >
                                    <li>Dois ou mais registros de abastecimento devem estar cadastrados no sistema.</li>
                                    <li>Com exceção dos casos em que o abastecimento do fluido for <strong>Arla</strong>, o tipo de combustível não irá interferir no cálculo da eficiência — ou seja, o sistema continuará realizando o cálculo normalmente mesmo que o veículo abasteça com Álcool em um dia e com Gasolina no outro.</li>
                                    <li><strong>A distância percorrida</strong> entre um abastecimento e outro, deve ser:</li>
                                </ul>
                                <ul className="list-disc list-inside space-y-2" >
                                    <li><strong>Maior que ZERO</strong> (Essa informação está disponível no <strong>Relatório de Abastecimento</strong>, coluna “Distância do último abastecimento (Odo)”.)</li>
                                    <li><strong>Menor que a autonomia do veículo</strong></li>
                                </ul>
                            </div>
                            <div>
                                <h2>Fórmula de eficiência</h2>

                                <p>
                                    Como já mencionado anteriormente a fórmula se baseia conforme o tipo de configuração utilizada no cadastro do veículo:
                                </p>
                                
                                <img src={CalculoParcial} alt="" />
                                <img src={CalculoTanqueCheio} alt="" />
                            </div>

                            <div className="space-y-4" >
                                <h2>Cálculo da autonomia</h2>

                                <p>
                                    A autonomia do veículo é utilizada para validar a consistência dos registros de abastecimento, assegurando que a distância informada seja compatível com a capacidade real de deslocamento do veículo com o tanque cheio. Por esse motivo ela deve ser menor do a distância percorrida.
                                </p>

                                <p className="font-bold text-xl" >
                                    Fórmula:
                                </p>
                                
                                <img src={CalculoAutonomia} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}