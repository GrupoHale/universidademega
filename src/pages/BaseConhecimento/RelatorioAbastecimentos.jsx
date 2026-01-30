export default function RelatorioAbastecimentos() {

    const styleColunas = "transition-transform duration-50 hover:text-blue-800 font-bold hover:scale-105";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Relatório de Abastecimentos</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <p className="text-gray-700 mb-4">
                        Exibe as informações dos abastecimentos registrados pelo aplicativo Onboard. A visão dos dados é dividida por unidade rastreada contudo também é possível ver resultados consolidados como a quantidade em litros, o valor total gasto e eficiência.
                    </p>
                    <p>
                        Se você quer visualizar o controle de custos com combustível, acompanhar a eficiência de cada veículo e gerir o consumo da frota, utilize esse relatório.
                    </p>
                    <p>
                        Ele está disponível no formato de tabela e pode ter até 23 colunas relacionadas em sua grid.
                    </p>
                    <p>
                        Após a consulta, com a tabela do relatório já disponível, também é possível filtrar dados específicos em cada coluna.
                    </p>
                    <p>
                        Segue abaixo a relação com os nomes das colunas desse relatório.
                    </p>
                    <h2 className="font-bold text-xl">Observação: </h2>
                    <p> 
                        Os relatórios Gerais ficam armazenados e acessíveis por até 3 meses.
                    </p>
                    <p>
                        Após esse periodo os dados serão removidos do sistema e não poderão mais ser consultados.
                    </p>
                    <h2>COLUNAS DO RELATÓRIO DE ABASTECIMENTO DE VEÍCULOS</h2>
                    <div className="grid grid-cols-3 gap-4 p-5">
                       <li className={styleColunas}>Data do abastecimento</li>
                       <li className={styleColunas}>Total</li>
                       <li className={styleColunas}>Horas de trabalho</li>
                       <li className={styleColunas}>Acima da capacidade</li>
                       <li className={styleColunas}>Eficiência Km/L</li>
                       <li className={styleColunas}>Identifica do frentista</li>
                       <li className={styleColunas}>Fluído</li>
                       <li className={styleColunas}>Meta de consumo</li>
                       <li className={styleColunas}>Horímetro</li>
                       <li className={styleColunas}>Posto Bloqueado</li>
                       <li className={styleColunas}>Distância do ultimo abastecimento (Odo)</li>
                       <li className={styleColunas}>Data de cadastro</li>
                       <li className={styleColunas}>Quantidade (L)</li>
                       <li className={styleColunas}>Odômetro</li>
                       <li className={styleColunas}>Modelo do veículo</li>
                       <li className={styleColunas}>Veículo ativo</li>
                       <li className={styleColunas}>Responsável pelo abastecimento</li>
                       <li className={styleColunas}>Usuário do cadastro</li>
                       <li className={styleColunas}>Valor / L</li>
                       <li className={styleColunas}>Eficiência L/Hr</li>
                       <li className={styleColunas}>Unidade Organizacional</li>
                       <li className={styleColunas}>Tanque completo</li>
                       <li className={styleColunas}>Posto de abastecimento</li>
                    </div>
                </div>
            </div>
        </div>
    );
}
