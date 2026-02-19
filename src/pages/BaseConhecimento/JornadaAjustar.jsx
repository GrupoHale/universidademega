import AjustarJornadaMenu from "../../pages/BaseConhecimento/img/AjustarJornadaMenu.png"
import AjustarJornada3 from "../../pages/BaseConhecimento/img/AjustarJornada3.jpg"
import CadastrarMotivo2 from "../../pages/BaseConhecimento/img/CadastrarMotivo2.jpg"
import AjustarJornada4 from "../../pages/BaseConhecimento/img/AjustarJornada4.png"
import TermoAjusteEscala2 from "../../pages/BaseConhecimento/img/TermoAjusteEscala2.png"

export default function JornadaAjustar() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Ajustar jornadas de trabalho</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-4">
                    </p>
                    <div className="space-y-4" >
                        <p>
                            O Ajuste de Jornada é utilizado quando é necessário corrigir ou atualizar manualmente os registros de jornada de um colaborador.
                        </p>

                        <p>
                            Essa ação é aplicada em situações como quando o sistema não reconhece corretamente o início ou o fim da jornada, ou quando existe uma justificativa formal para realizar a alteração.
                        </p>

                        <p>
                            Ao finalizar o ajuste, o sistema gera um <strong>Termo de Ajuste de Jornada</strong>, documento que deve ser assinado pelo colaborador para confirmar que a alteração reflete fielmente o que ocorreu na jornada.
                        </p>

                        <p>
                            Esse termo funciona como um registro oficial e comprobatório, garantindo <strong>transparência, conformidade e rastreabilidade</strong> em todas as modificações efetuada.
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2>Regras de Negócio</h2>
                        
                        <ul>
                            <li>
                                Todas as jornadas realizadas pelos colaboradores serão exibidas neste menu, onde também é possível cadastrar uma nova jornada, quando necessário.
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4" >
                        <h2>Onde ajustar?</h2>

                        <p>
                            Para visualizar este menu, acesse a Administração e localize o menu "Jornada de Trabalho".
                        </p>

                        <p>
                            Em seguida, entre no submenu "Ajustar jornadas de trabalho".
                        </p>

                        <img src={AjustarJornadaMenu} alt="" />

                        <p>
                            Ao acessar uma jornada já registrada ou ao cadastrar uma nova jornada clicando no "+", o SSX exibirá a seguinte tela:
                        </p>

                        <img src={AjustarJornada3} alt="" />

                        <ul>
                            <li><strong>Função:</strong> Campo obrigatório utilizado para selecionar a etapa da Jornada que será adicionada (Condução, Espera, Descanso, Refeição e Fim de Jornada).</li>

                            <li><strong>Data:</strong> Campo obrigatório para informar data e hora da realização da etapa.</li>

                            <li><strong>Veículo:</strong> Campo opcional para informar o veículo utilizado na Jornada.</li>

                            <li><strong>Motivo do ajuste:</strong> Campo obrigatório para informar o motivo da alteração da jornada.</li>
                        </ul>

                        <p>
                            Importante: É necessário criar motivos com a função "Ajuste de jornada de trabalho" selecionado:
                        </p>

                        <img src={CadastrarMotivo2} alt="" />

                        <p>
                            Ao realizar o ajuste de jornada, é possível imprimir o termo de ajuste de jornada de trabalho para que o colaborador assine.
                        </p>

                        <img src={AjustarJornada4} alt="" />

                        <p>
                            O documento será gerado com o texto de observação e a cidade informados na escala do colaborador, além do CPF, caso esteja preenchido em seu cadastro.
                        </p>

                        <img src={TermoAjusteEscala2} alt="" />

                    </div>

                </div>
            </div>
        </div>
    )
}