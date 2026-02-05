import CadastrarPostoAbastecimento from "../../pages/BaseConhecimento/img/CadastrarPostoAbastecimento.png"
import CadastrarPostoAbastecimento2 from "../../pages/BaseConhecimento/img/CadastrarPostoAbastecimento2.png"
import CadastrarAbastecimento from "../../pages/BaseConhecimento/img/CadastrarAbastecimento.png"
import CadastrarAbastecimento2 from "../../pages/BaseConhecimento/img/CadastrarAbastecimento2.png"

export default function AbastecimentoWeb() {
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Abastecimento via Web</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                        </p>
                        
                        <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-700 leading-relaxed font-medium">
                            </p>
                            
                            <div className="space-y-4" > 
                                <h2 className="font-bold text-xl" >1° ETAPA: Cadastrar o posto de abastecmento</h2>

                                <img src={CadastrarPostoAbastecimento} alt="" />

                                <p>
                                    Vamos começar cadastrando os postos de abastecimento. Esse procedimento visa proporcionar um controle mais rigoroso sobre os postos autorizados para abastecimento da frota.
                                </p>

                                <p>
                                    <strong>Observação:</strong> O cadastro de postos é opcional. Os motoristas ainda têm a liberdade de abastecer em postos não autorizados, se necessário.
                                </p>

                                <img src={CadastrarPostoAbastecimento2} alt="" />

                                <p>
                                    Neste cadastro, podemos utilizar os métodos:
                                </p>

                                <div className="grid grid-cols-2 shadow-lg space-x-2">
                                    <p className="font-bold h-14 bg-slate-800 text-white flex justify-center text-xl items-center" >
                                        1,2 e 3, onde:
                                    </p>
                                    <p className="font-bold h-14 bg-slate-800 text-white flex justify-center text-xl items-center" >
                                        1, 4 e 5, onde:
                                    </p>
                                    <div className="p-1 space-y-1 text-lg bg-white">
                                        <ul className="list-decimal list-inside">
                                            <li>Defina o nome do posto</li>
                                            <li>Indique o CEP</li>
                                            <li>Clique na seta para a direita para apontar no mapa o local</li>
                                        </ul>
                                    </div>
                                    <div className="p-1 space-y-1 text-lg bg-white ">
                                        <ul className="list-decimal list-inside">
                                            <li>Defina o nome do posto</li>
                                            <li>Pesquise o Endereço e selecione o local no mapa</li>
                                            <li>Clique na seta para a esquerda para o preenchimento automático dos dados à esquerda</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h2 className="font-bold text-xl" >ETAPA 2: Cadastrar o abastecimento</h2>
                                    
                                    <img src={CadastrarAbastecimento} alt="" />
                                    <img src={CadastrarAbastecimento2} alt="" />      

                                    <ul className="list-decimal list-inside space-y-2">
                                        <li>Selecione o Veículo abastecido</li>
                                        <li>Selecione o tipo de Fluido (combustível)</li>
                                        <li>Indique a data do abastecimento</li>
                                        <li>O sistema irá indicar o odômetro do abastecimento anterior a partir do segundo abastecimento</li>
                                        <li>Indique os litros abastecidos</li>
                                        <li>Informe o valor pago por litro</li>
                                        <li>Informe o odômetro no momento do abastecimento ( se seu rastreador trouxer essa informação será preenchido automaticamente)</li>
                                        <li>Selecione o posto de abastecimento criado previamente</li>
                                        <li>Selecione o motorista responsável pelo abastecimento (nesse item apenas terão usuários criados com o cargo tendo a função de motorista)</li>
                                        <li>Marque esse box se o tanque foi cheio</li>
                                        <li>Será calculado automaticamente a partir dos campos de litros abastecidos e valor por litro</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}