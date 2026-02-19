import JornadaAusenciaMenu from "../../pages/BaseConhecimento/img/JornadaAusenciaMenu.png"
import CadastrarAusencia3 from "../../pages/BaseConhecimento/img/CadastrarAusencia3.png"

export default function JornadaAusencias() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Controle de ausências</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-4">
                    </p>
                    
                    <p>
                        O <strong>Controle de Ausência</strong> é utilizado para registrar e justificar as ausências dos colaboradores, como consultas médicas, folgas compensadas (via banco de horas), licenças paternidade, entre outros motivos.
                    </p>

                    <p>
                        De acordo com a configuração da escala, algumas ausências podem ser registradas automaticamente pelo sistema. Posteriormente, essas ocorrências podem ser justificadas ou permanecer como faltas não justificadas, conforme a análise da gestão.
                    </p>
                    
                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl">Regras de negócio</h2>

                        <ul>
                            <li>
                                Toda "Falta" registrada conforme a configuração da escala será exibida no menu “Controle de Ausência”, onde poderá ser analisada e justificada.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4" >
                        <h2>Onde registrar a ausência?</h2>

                        <p>
                            Para visualizar este menu, acesse a Administração e localize o menu "Jornada de Trabalho".
                        </p>

                        <img src={JornadaAusenciaMenu} alt="" />

                        <p>
                            Ao acessar uma falta já registrada ou ao cadastrar uma nova ausência, o SSX exibirá a seguinte tela:
                        </p>

                        <img src={CadastrarAusencia3} alt="" />

                        <ul className="space-y-2 list-decimal list-inside space-y-3" >
                            <li><strong>Colaborador:</strong> Campo obrigatório utilizado para identificar o colaborador ausente.</li>

                            <li><strong>Tipo:</strong> Campo obrigatório para selecionar o tipo de ausência, que pode ser:</li>

                                <ul className="list-disc list-inside space-y-1">
                                    <li>Abono</li>
                                    <li>Abono parcial</li>
                                    <li>Falta</li>
                                    <li>Férias</li>
                                    <li>Licença</li>
                                    <li>Falta com abono</li>
                                </ul>

                            <li><strong>Data inicial:</strong> Campo obrigatório para informar a data de início da ausência.</li>
                        
                            <li><strong>Data final:</strong> Campo obrigatório para informar a data final da ausência.</li>

                            <li><strong>Descrição:</strong> Campo opcional de texto livre destinado à descrição detalhada do motivo da ausência.</li>

                            <li><strong>Anexo:</strong> Campo opcional para anexar documentos ou arquivos que comprovem a ausência.</li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    )
}