import { Link } from "react-router-dom";

export default function JornadaTrabalho() {

    const styleLink = "bg-blue-500 text-white items-center font-bold p-4 rounded-lg mb-4 block flex justify-center  hover:bg-blue-600"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Jornada de Trabalho</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        
                    </p>
                    <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            A Jornada de Trabalho no SSX é um módulo desenvolvido para facilitar o gerenciamento do tempo de trabalho dos motoristas, garantindo conformidade com as normas trabalhistas e promovendo maior transparência na operação. Com ele, é possível monitorar de forma automatizada a carga horária, intervalos, horas extras e períodos de descanso, otimizando processos e reduzindo riscos para a empresa.
                        </p>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="space-y-7">
                                <h2 className="font-bold text-xl text-blue-700">CARACTERÍSTICAS</h2>
                                <p>
                                   ➤ Controle preciso do início e término de turnos, configuração de escalas, cálculo automatizado de horas extras, banco de horas e períodos de descanso obrigatório conforme a legislação vigente.
                                </p>

                                <p>
                                    ➤ Criação de registros detalhados, prontos para auditoria e cumprimento das obrigações trabalhistas.
                                </p>

                                <p>
                                    ➤ O Dashboard Operacional permite acompanhar cada etapa da jornada dos motoristas, facilitando a tomada de decisões.
                                </p>

                                <p>
                                    ➤ Compatível com teclado, periféricos e o aplicativo Onboard, garantindo flexibilidade na operação.
                                </p>

                                <p>
                                    ➤ O módulo está disponível no pacote SSX Pro que requer o acesso Tracking, junto da ativação do módulo.
                                </p>

                            </div>

                            <div className="space-y-7">
                                <h2 className="font-bold text-xl text-blue-700">VANTAGENS</h2>
                                <p>
                                    ➤ Diferente de sistemas que exigem registros manuais ou planilhas, nosso módulo automatiza 100% do cálculo da jornada, reduzindo erros e garantindo conformidade legal sem esforço adicional.
                                </p>

                                <p>
                                    ➤ Enquanto muitas soluções apenas geram relatórios pós-turno, o Dashboard Operacional oferece um acompanhamento ao vivo, permitindo ajustes imediatos na operação.
                                </p>

                                <p>
                                    ➤ Diferente de outras plataformas, nosso sistema é compatível com diversos periféricos e conta com o Onboard, um app gratuito que se adapta a cada empresa.
                                </p>

                                <p>
                                    ➤ Nossa solução unifica registros de ponto, escalas e tempo de trabalho em um só ambiente digital, facilitando a administração e auditoria.
                                </p>
                            </div>

                            <div className="space-y-7">
                                <h2 className="font-bold text-xl text-blue-700">BENEFÍCIOS</h2>
                                <p>
                                    ➤ Minimiza riscos jurídicos ao garantir total conformidade com a legislação.
                                </p>

                                <p>
                                    ➤ Automatiza a folha de ponto e gera relatórios prontos para arquivamento, liberando tempo da equipe para tarefas estratégicas.
                                </p>

                                <p>
                                    ➤ Elimina retrabalho e minimiza falhas humanas, resultando em uma gestão mais eficiente e econômica.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl flex justify-center">Implantação</h2>
                            <div className="grid grid-cols-3 gap-5" >
                                <Link className={styleLink}  to="/base-conhecimento/jornada-trabalho-onboard" >Jornada de trabalho com onboard e/ou RFID</Link>
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-teclado" >Jornada de trabalho com o teclado</Link>
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-posicao" >Jornada de trablaho por posição</Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="font-bold text-xl flex justify-center" >Pós-implatanção</h2>
                            <div className="grid grid-cols-4 gap-5" >
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-acompanhar" >Acompanhamento das jornadas em tempo real</Link>
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-ausencias" >Controle de ausências</Link>
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-ajuste" >Ajustar jornadas de trabalho</Link>
                                <Link className={styleLink} to="/base-conhecimento/jornada-trabalho-fechamento" >Período de fechamento</Link>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}
