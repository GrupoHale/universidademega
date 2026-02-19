import DashboardJornada from "../../pages/BaseConhecimento/img/DashboardJornada.png"


export default function JornadaAcompanhamento() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Acompanhamento das jornadas em tempo real</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-4">
                    </p>
                    
                    <div className="space-y-4" >
                        <p>
                            No <strong>paínel de Jornadas em Aberto</strong>, disponível na tela inicial do <strong>SSX</strong>, é possível acompanhar em tempo real o período de trabalho dos colaboradores.
                        </p>

                        <p>
                            Essa funcionalidade oferece à central uma visão clara sobre <strong>quais colaboradores estão em operação, em qual etapa da jornada se encontram e quanto tempo dedicam ao trabalho e ao descanso</strong>.
                        </p>

                        <p>
                            Com essas informações, a gestão se torna mais eficiente, permitindo <strong>maior controle operacional, melhoria no planejamento das equipes e redução de falhas no cumprimento das jornadas</strong>.
                        </p>
                    </div>
                    <div className="space-y-4" >
                        <h2>Regras de negócio</h2>

                        <ul className="list-disc list-inside" >
                            <li>No painel de Jornadas em Aberto, sempre será exibida a última jornada registrada pelo colaborador. Quando o mesmo colaborador inicia uma nova jornada, ela substitui automaticamente a anterior, garantindo que o painel apresente apenas a jornada mais recente e ativa.</li>
                        </ul>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Onde visualizar?</h2>

                        <p>
                            Para visualizar este painel, acesse a tela inicial da sua base e localize o painel “Jornadas em Aberto”.
                        </p>

                        <img src={DashboardJornada} alt="" />
                        <p>
                            Caso o painel não esteja visível, <strong>utilize a opção de restaurar painéis</strong> para que ele volte a ser exibido na tela inicial.
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl" >Significado das colunas do painel jornadas em aberto</h2>

                       <p>
                            <strong>Colaborador:</strong> Informa o nome do colaborador que fez a jornada de trabalho
                       </p>

                       <p>
                            <strong>Vigência:</strong> Data da vigência da jornada. Que a jornada foi iniciada.
                       </p>
    
                        <p>
                            <strong>Dia da semana:</strong> Dia da semana da que foi iniciada a jornada.
                        </p>

                        <p>
                            <strong>Tipo:</strong> Indica a natureza da jornada que pode ser: Abono / Abono parcial / Falta / Férias / Folga / Jornada / Licença / Falta com abono
                        </p>

                        <p>
                            <strong>Data inicial:</strong> Data e hora em que a jornada foi iniciada.
                        </p>

                        <p>
                            <strong>Data final:</strong> Data e hora em que a jornada foi finalizada.
                        </p>

                        <p>
                            <strong>Maior etapa (h): </strong> Mostra o tempo da etapa que teve a maior duração dentro da jornada.
                        </p>

                        <p>
                            <strong>Operação:</strong> Tempo de operação da jornada contando condução e espera.
                        </p>

                        <p>
                            <strong>Trabalho previsto:</strong> Tempo de trabalho previsto para a jornada de acordo com a escala associada ao colaborador. 
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl text-blue-700" >Etapa Atual</h2>

                        <p>
                            <strong>Nome:</strong>Nome da etapa atual em que o colaborador se encontra.
                        </p>

                        <p>
                            <strong>Início:</strong> Data e hora em que se iniciou a etapa atual.
                        </p>

                        <p>
                            <strong>Tempo:</strong> Quantidade de dias/horas/minutos/segundos em que o colaborador se encontra na etapa atual.
                        </p>      
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl text-blue-700" >Trabalho</h2>

                        <p>
                            <strong>Condução diurna:</strong> Traz o tempo de condução ocorrida na respectiva jornada, dentro do horário configurado como sendo diurno na escala;
                        </p>

                        <p>
                            <strong>Condução noturna:</strong> Traz o tempo de condução ocorrida na respectiva jornada, dentro do horário configurado como sendo noturno na escala;
                        </p>

                        <p>
                            <strong>Total condução: </strong>Traz o tempo total de condução ocorrida na respectiva jornada (condução diurna + noturna)
                        </p>

                        <p>
                            <strong>Abono:</strong> Tempo da jornada que recebeu abono, seja total ou parcial na respectiva data. Informação lançada no controle de ausência.
                        </p>

                        <p>
                            <strong>Espera diurna:</strong> Traz o tempo de espera ocorrida na respectiva jornada, dentro do horário configurado como sendo diurno na escala
                        </p>

                        <p>
                            <strong>Espera noturna:</strong> Traz o tempo de espera ocorrida na respectiva jornada, dentro do horário configurado como sendo noturno na escala
                        </p>

                        <ul className="space-y-2" >
                            <p className="font-bold text-xl text-blue-700">Total espera:</p>

                            <li>- Se escala estiver com a espera configurada como “Hora indenizatória” e a caixa de seleção do campo “Completar horas de condução com tempo de espera” FOR MARCADA, essa coluna trará o tempo da espera necessário para completar o tempo previsto de trabalho da jornada;</li>

                            <li>- Se escala estiver com a espera configurada como “Hora indenizatória” e a caixa de seleção do campo “Completar horas de condução com tempo de espera” NÃO FOR MARCADA, essa coluna não trará dados;</li>

                            <li>- Se escala estiver com a espera configurada como “Hora trabalhada” essa coluna trará as horas totais de espera da jornada</li>
                        </ul>

                        <p>
                            <strong>Total diurno:</strong> Traz o total de trabalho diurno da jornada (condução + espera (se a configuração da escala for por hora trabalhada)
                        </p>

                        <p>
                            <strong>Total noturno: </strong> Traz o total de trabalho noturno da jornada (condução + espera (se a configuração da escala for por hora trabalhada)
                        </p>

                        <p>
                            <strong>Total trabalho:</strong> Traz a soma dos totais diurno e noturno da jornada (se a configuração da escala for por hora trabalhada)
                        </p>

                        <p>
                            <strong>Maior condução:</strong> Tempo máximo de condução contínua atingida na jornada
                        </p>

                        <p>
                            <strong>Espera curta:</strong> Traz a soma das esperas curtas ocorridas durante a respectiva jornada
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl text-blue-700" >Descanso Intrajornada</h2>

                        <p>
                            <strong>Refeição:</strong> Tempo de refeição registrada na jornada
                        </p>
                        
                        <p>
                            <strong>Descanso:</strong> Tempo de descanso registrado na jornada
                        </p>

                        <p>
                            <strong>Espera longa: </strong>Traz o tempo total de espera longa ocorrido na respectiva jornada. Considerado espera longa quando {">"}= ao limite configurado na escala. (Padrão 02:00)
                        </p>

                        <p>
                            <strong>Total: </strong>Total do tempo de espera intrajornada excluindo a coluna “Refeição residual” que está dentro do combo, mas não contabiliza como espera
                        </p>

                        <p>
                            <strong>Entre jornadas:</strong> Traz o tempo de descanso ocorrido entre a jornada atual e a última feita (Data inicial atual - Data final anterior)
                        </p>

                        <p>
                            <strong>Descanso obrigatório até:</strong> Informa até que data e hora o colaborador é obrigado a descansar para poder iniciar a próxima jornada de acordo com o configurado na escala. Tempo padrão 11h (nova regra que exige ser de 11h ininterruptas)
                        </p>

                        <p>
                            <strong>Extra 50% (ou nome cadastrado em Geral/Configurações):</strong> Traz valor de tempo de trabalho que ocorrer a partir do previsto na escala.
                        </p>

                        <ul className="space-y-2" >
                            <li>• Se com banco de horas - tempo que ultrapassar o previsto + máximo banco de horas diário configurado na escala;</li>

                            <li>• Se sem banco de horas e com espera indenizatória - Todo tempo de condução além do previsto na escala;</li>

                            <li>• Se sem banco de horas e com espera trabalhada - Todo tempo de trabalho (condução e espera) além do previsto na escala;</li>

                            <li>• Se dia da jornada tiver alguma configuração no calendário de folga.</li>
                        </ul>

                        <p>
                            <strong>Extra 100% (ou nome cadastrado em Geral/Configurações):</strong> Traz tempo de condução se dia da jornada tiver alguma configuração em calendário de folgas
                        </p>

                        <p>
                            <strong>Banco de horas:</strong> Traz o tempo de trabalho (condução + espera) da jornada que passou do previsto na escala, quando a mesma é configurada para ter banco de horas e a espera como hora trabalhada
                        </p>

                        <p>
                            <strong>Encerrada?:</strong> Traz a informação se a respectiva jornada foi encerrada ou não
                        </p>
                    </div>

                    <div className="space-y-4" >
                        <h2 className="font-bold text-xl text-blue-700 " >Alertas de Jornada</h2>

                        <p>
                            <strong>Condução contínua:</strong> Traz a informação se a jornada gerou alerta de tempo máximo de condução contínua conforme configurado na escala
                        </p>

                        <p>
                            <strong>Limite condução diária:</strong> Traz a informação se a jornada gerou alerta de tempo máximo de condução diária conforme configurado na escala
                        </p>

                        <p>
                            <strong>Descanso entre jornadas:</strong> Traz a informação se a jornada gerou alerta de tempo de descanso entre jornadas obrigatório não foi respeitado
                        </p>

                        <p>
                            <strong>Descanso obrigatório:</strong> Traz a informação se a jornada gerou alerta de tempo de descanso obrigatório não foi respeitado
                        </p>

                        <p>
                            <strong>Refeição:</strong> Traz a informação se a jornada gerou alerta de tempo de refeição configurado na escala não foi respeitado
                        </p>

                        <p>
                            <strong>Operação prevista excedida:</strong> Traz a informação se a jornada gerou aleta de tempo previsto de operação foi excedido
                        </p>

                        <p>
                            <strong>Período de fechamento:</strong> Traz o nome do período de fechamento que se enquadra a respectiva jornada. Se jornada estiver em aberto, campo aparece vazio
                        </p>

                        <p>
                            <strong>Tempo de utilização:</strong>  Tempo de utilização do veículo durante a respectiva jornada.
                        </p>

                        <p>
                            <strong>Veículo:</strong> Veículo que foi utilizado na jornada, quando houver
                        </p>

                        <p>
                            <strong>Cargo: </strong> Nome do cargo do colaborador da jornada
                        </p>

                        <p>
                            <strong>Escala:</strong> Nome da escala associada ao colaborador da respectiva jornada
                        </p>

                        <p>
                            <strong>Folga:</strong> Exibe se era um dia de folga e mesmo assim teve jornada. Colaborador trabalhou em um dia que era folga
                        </p>

                        <p>
                            <strong>Alterada:</strong> Exibe se a jornada foi alterada ou não.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}