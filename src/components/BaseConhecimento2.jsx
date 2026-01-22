export default function BaseConhecimento2() {
    const menuItems = {
        "Comece por aqui": [
            { label: "Visão Geral de Rastreamento", href: "/base-de-conhecimento/visao-geral" },
            { label: "Treinamento 1 - básico para funcionar", href: "/base-de-conhecimento/treinamento-1" },
            { label: "Treinamento 2 - operacional", href: "/base-de-conhecimento/treinamento-2" },
        ],
        "Conteúdos adicionais": [
            { label: "Operacional", href: "/base-de-conhecimento/operacional" },
            { label: "Como tratar aertas", href: "/base-de-conhecimento/tratar-alertas" },
            { label: "Cadastrar pessoas/usuários", href: "/base-de-conhecimento/cadastrar-usuarios" },
            { label: "Regras", href: "/base-de-conhecimento/regras" },
            { label: "Identificação de motorista", href: "/base-de-conhecimento/identificacao-motorista" },
            { label: "Unidade Organizacional", href: "/base-de-conhecimento/unidade-organizacional" },
            { label: "CNHs a vencer e vencidas", href: "/base-de-conhecimento/cnh" },
            { label: "Áreas e rotas geográficas", href: "/base-de-conhecimento/areas-rotas" },
        ],
        "Conteúdos avançados": [
            { label: "Jornada de Trabalho", href: "/base-de-conhecimento/jornada-trabalho" },
            { label: "Performance", href: "/base-de-conhecimento/performance" },
            { label: "Logistics", href: "/base-de-conhecimento/logistics" },
            { label: "Videotelemetria", href: "/base-de-conhecimento/videotelemetria" },
            { label: "Manutenção", href: "/base-de-conhecimento/manutencao" },
            { label: "Abastecimento", href: "/base-de-conhecimento/abastecimento" },
            { label: "Gestão de Multas", href: "/base-de-conhecimento/multas" },
            { label: "Velocidade na Via", href: "/base-de-conhecimento/velocidade" },
        ],
        "Aplicativos": [
            { label: "SSX Mobile", href: "/base-de-conhecimento/ssx-mobile" },
            { label: "SSX Onboard", href: "/base-de-conhecimento/ssx-onboard" },
        ],
        "Conteúdos especiais": [
            { label: "Macros com SSX Onboard", href: "/base-de-conhecimento/macros-onboard" },
        ],
        "Relatórios": [
            { label: "Relatório Geral", href: "/base-de-conhecimento/relatorio-geral" },
            { label: "Períodos de utilização BDV", href: "/base-de-conhecimento/periodos-bdv" },
            { label: "Períodos de utilização consolidado", href: "/base-de-conhecimento/periodos-consolidado" },
            { label: "Relatório de alertas", href: "/base-de-conhecimento/relatorio-alertas" },
            { label: "Relatório de passagem por áreas", href: "/base-de-conhecimento/relatorio-areas" },
            { label: "Relatórios de mensagem enviadas e recebidas (SSX Onboard)", href: "/base-de-conhecimento/relatorio-mensagens" },
            { label: "Relatório de manutenções", href: "/base-de-conhecimento/relatorio-manutencoes" },
            { label: "Relatório de abastecimentos", href: "/base-de-conhecimento/relatorio-abastecimentos" },
        ]
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 flex items-center justify-center gap-2">
                    Base de Conhecimento
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
                                            href={item.href} 
                                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors"
                                        >
                                            {item.label}
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