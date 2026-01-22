export default function BaseConhecimento2() {
    const menuItems = {
        "Comece por aqui": [
            "Visão Geral de Rastreamento",
            "Treinamento 1 - básico para funcionar",
            "Treinamento 2 - operacional",
        ],
        "Conteúdos adicionais": [
            "Operacional",
            "Como tratar aertas",
            "Cadastrar pessoas/usuários",
            "Regras",
            "Identificação de motorista",
            "Unidade Organizacional",
            "CNHs a vencer e vencidas",
            "Áreas e rotas geográficas",
        ],
        "Conteúdos avançados": [
            "Jornada de Trabalho",
            "Performance",
            "Logistics",
            "Videotelemetria",
            "Manutenção",
            "Abastecimento",
            "Gestão de Multas",
            "Velocidade na Via",
        ],
        "Aplicativos": [
            "SSX Mobile",
            "SSX Onboard",
        ],
        "Conteúdos especiais": [
            "Macros com SSX Onboard",
            "",
        ],
        "Relatórios": [
            "Relatório Geral",
            "Períodos de utilização BDV",
            "Períodos de utilização consolidado",
            "Relatório de alertas",
            "Relatório de passagem por áreas",
            "Relatórios de mensagem enviadas e recebidas (SSX Onboard)",
            "Relatório de manutenções",
            "Relatório de abastecimentos"
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="flex justify-center text-4xl font-bold mb-12 flex items-center gap-2">
                    Base de conhecimento
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(menuItems).map(([category, items]) => (
                        <div key={category} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
                                📁 {category}
                            </h2>
                            <ul className="space-y-2">
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href="#" 
                                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}