export default function ManutenncaoBasica() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Manutenção Básica</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full">
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Manutenção Básica</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                       O módulo de Manutenção é uma ferramenta crucial para o gerenciamento eficiente dos serviços e peças dos veículos.
                    </p>
                    <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Este módulo permite o gerenciamento de manutenções básicas, que são processos únicos e pontuais. Após a conclusão dos serviços necessários, o controle é encerrado, e o veículo é considerado em conformidade até que surja uma nova necessidade de manutenção.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}