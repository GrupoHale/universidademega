import { Link } from "react-router-dom";

export default function BaseConhecimento2() {
    const menuItems = {
        "Comece por aqui": [
            { label: "Visão Geral de Rastreamento", path: "/base-conhecimento/visao-geral" },
            { label: "Treinamento 1 - básico para funcionar", path: "/base-conhecimento/treinamento-1" },
            { label: "Treinamento 2 - operacional", path: "/base-conhecimento/treinamento-2" },
        ],
        "Conteúdos adicionais": [
            { label: "Operacional", path: "/base-conhecimento/operacional" },
            { label: "Como tratar alertas", path: "/base-conhecimento/tratar-alertas" },
            { label: "Cadastrar pessoas/usuários", path: "/base-conhecimento/cadastrar-usuarios" },
            { label: "Regras", path: "/base-conhecimento/regras" },
            { label: "Identificação de motorista", path: "/base-conhecimento/identificacao-motorista" },
            { label: "Unidade Organizacional", path: "/base-conhecimento/unidade-organizacional" },
            { label: "CNHs a vencer e vencidas", path: "/base-conhecimento/cnh" },
            { label: "Áreas e rotas geográficas", path: "/base-conhecimento/areas-rotas" },
        ],
        "Conteúdos avançados": [
            { label: "Jornada de Trabalho", path: "/base-conhecimento/jornada-trabalho" },
            { label: "Performance", path: "/base-conhecimento/performance" },
            { label: "Logistics", path: "/base-conhecimento/logistics" },
            { label: "Videotelemetria", path: "/base-conhecimento/videotelemetria" },
            { label: "Manutenções", path: "/base-conhecimento/manutencao" },
            { label: "Abastecimento", path: "/base-conhecimento/abastecimento" },
            { label: "Gestão de Multas", path: "/base-conhecimento/multas" },
            { label: "Velocidade na Via", path: "/base-conhecimento/velocidade" },
        ],
        "Aplicativos": [
            { label: "SSX Mobile", path: "/base-conhecimento/ssx-mobile" },
            { label: "SSX Onboard", path: "/base-conhecimento/ssx-onboard" },
        ],
        "Conteúdos especiais": [
            { label: "Macros com SSX Onboard", path: "/base-conhecimento/macros-onboard" },
        ],
        "Relatórios": [
            { label: "Relatório Geral", path: "/base-conhecimento/relatorio-geral" },
            { label: "Períodos de utilização BDV", path: "/base-conhecimento/periodos-bdv" },
            { label: "Períodos de utilização consolidado", path: "/base-conhecimento/periodos-consolidado" },
            { label: "Relatório de alertas", path: "/base-conhecimento/relatorio-alertas" },
            { label: "Relatório de passagem por áreas", path: "/base-conhecimento/relatorio-areas" },
            { label: "Relatório de mensagem enviadas e recebidas (SSX Onboard)", path: "/base-conhecimento/relatorio-mensagens" },
            { label: "Relatório de manutenções", path: "/base-conhecimento/relatorio-manutencoes" },
            { label: "Relatório de abastecimentos", path: "/base-conhecimento/relatorio-abastecimentos" },
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
                                        <Link 
                                            to={item.path} 
                                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}