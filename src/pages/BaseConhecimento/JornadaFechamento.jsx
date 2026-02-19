export default function JornadaFechamento() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Periodo de fechamento</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700"da>Introdução</h2>
                    <p className="text-gray-700 mb-4">
                    </p>    
                    <div>
                        <p>
                            O <strong>Período de Fechamento</strong> é utilizado para consolidar oficialmente a jornada de trabalho dos colaboradores. Após realizar todos os ajustes necessários — como correções de ponto, justificativas de ausência e validações de registros — o fechamento reúne e calcula todas as horas trabalhadas, gerando um <strong>relatório final e unificado</strong> do período.
                        </p>
                        
                        <p>
                            Para garantir a organização cronológica, o sistema só permite iniciar um <strong>novo período de fechamento</strong> a partir do dia seguinte ao término do último período concluído.
                        </p>

                        <p className="font-bold">Exemplo: </p>
                        <p>
                            Se o fechamento anterior ocorreu de 28/12 a 27/01, o próximo período será iniciado automaticamente em 28/01 e seguirá até 27/02.
                        </p>

                        <p>
                            Esse termo funciona como um registro oficial e comprobatório, garantindo <strong>transparência, conformidade e rastreabilidade</strong> em todas as modificações efetuada.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}