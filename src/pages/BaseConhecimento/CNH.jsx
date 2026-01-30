import CadastrarCNH from "../../pages/BaseConhecimento/img/CadastrarCNH.png";
import VisualizarCNHvencidas from "../../pages/BaseConhecimento/img/VisualizarCNHvencidas.png";

export default function CNH() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">CNHs a Vencer e Vencidas</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Controle de CNH</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Gerencie e acompanhe as carteiras de habilitação dos motoristas, identificando vencimentos e certificando compliance.
                    </p>
                    <div className="space-y-4 bg-white-50 p-4 rounded-lg border-l-4 border-gray-400 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                             Gerenciar uma frota envolve também zelar pela integridade e legalidade da condução dos motoristas. Nesse contexto, acompanhar o status de validade das CNHs é fundamental para manter a operação em conformidade e reduzir riscos.
                        </p>
                        <p>
                            O controle de CNHs a vencer e vencidas permite monitorar de forma automatizada o principal documento legal que comprova a aptidão dos motoristas para conduzir veículos automotores. Essa funcionalidade auxilia o gestor de frota a evitar uma série de riscos operacionais, legais e trabalhistas.
                        </p>
                        <p className="font-bold text-xl" >
                            Entre os principais benefícios do controle estão:
                        </p>
                       <ul className="list-disc list-inside" >
                            <li>
                                Evitar infrações e multas – Impede que motoristas com CNH vencida conduzam veículos, prevenindo infrações gravíssimas conforme o Código de Trânsito Brasileiro (CTB).
                            </li>
                            <li>
                                Prevenir riscos jurídicos e trabalhistas – Reduz a possibilidade de responsabilização da empresa em casos de acidentes envolvendo condutores irregulares.
                            </li>
                            <li>
                                Manter a operação em conformidade legal – Garante que todos os motoristas estejam devidamente habilitados, atendendo às exigências de auditorias e contratos.
                            </li>
                            <li>
                                Proteger a imagem da empresa – Evita situações que possam comprometer a reputação da frota por falhas de controle ou descumprimento de normas.
                            </li>
                            <li>
                                Reduzir riscos operacionais e de segurança – Assegura que apenas motoristas aptos e capacitados estejam à frente dos veículos, promovendo uma condução mais segura.
                            </li>
                       </ul>
                       <h2 className="font-bold text-xl">Regras de negócio</h2>
                       <ul className="list-disc list-inside">
                            <li>
                                Está disponível apenas para clientes Tracking, sem custo adicional.
                            </li>
                            <li>
                                Este painel não gera nenhum tipo de alerta sonoro.
                            </li>
                            <li>
                                É necessário preencher as informações de “Cargo” e “Data de validade” da CNH no cadastro do usuário para que possa aparecer no painel. O sistema não valida automaticamente a CNH pelo seu número, necessitando o preenchimento manual da data de validade.
                            </li>
                            <li>
                               Para que uma CNH apareça no painel, é necessário que a sua validade esteja em uma proximidade de 30 dias.
                            </li>
                       </ul>
                       <h2 className="font-bold text-xl" >Para que tipo de operação ele é indicado?</h2>
                        <p>
                            Ideal para operações logísticas, frotas corporativas, transportadoras e empresas de serviços em campo, onde o controle de motoristas é essencial para manter a conformidade e a continuidade das atividades.
                        </p>
                        <h2 className="font-bold text-xl">Quais são os benefícios de utilização dessa funcionalidade?</h2>
                        <ul className="list-disc list-inside" >
                            <li>
                                Planejamento eficiente: possibilita o agendamento antecipado de renovações, sem comprometer a escala operacional.
                            </li>
                            <li>
                                Automação e praticidade: substitui controles manuais por um monitoramento automatizado e confiável.
                            </li>
                            <li>
                                Conformidade e segurança: garante que apenas motoristas habilitados estejam ativos, reduzindo riscos legais e operacionais.
                            </li>
                        </ul>
                        <h2 className="font-bold text-xl">Como configurar para que as informações apareçam no painel?</h2>
                        <p>
                            Através do cadastro do usuário, em “Dados do(a) colaborador(a)”:
                        </p>
                        <div>
                            É necessário preencher as seguintes informações:
                            <ul className="list-disc list-inside" >
                                <li>
                                    Cargo
                                </li>
                                <li>
                                    1° Habilitação
                                </li>
                                <li>
                                    Número da CNH 
                                </li>
                                <li>
                                    Data de emissão da CNH
                                </li>
                                <li>
                                    Data de validade
                                </li>
                                <li>
                                    Categoria
                                </li>
                                <li>
                                    UF (Estado)
                                </li>
                            </ul>
                        </div>
                        <img src={CadastrarCNH} alt="" />
                        <h2 className="font-bold text-xl">Onde visualizar</h2>
                        <p>
                            Para a visualização deste painel, basta acessar a Tela Inicial de sua base, com uma porcentagem indicando quantos estão próximas a vencer e quais estão vencidas:
                        </p>
                        <img src={VisualizarCNHvencidas} alt=""/>
                        <p><span className="font-bold">Observação: </span>Essa funcionalidade não é integrada com o orgão de trânsito, portanto caso o motorista tenha renovado a CNH será necessário atualizar o cadastro manualmente no sistema.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};