import PeriodoDeUtilizacaoConsolidado from "../../pages/BaseConhecimento/img/PeriodoDeUtilizacaoConsolidado.png";
import PeriodoDeUtilizacaoConsolidado2 from "../../pages/BaseConhecimento/img/PeriodoDeUtilizacaoConsolidado2.png";

export default function PeriodosConsolidado() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Períodos de Utilização Consolidado</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <p className="text-gray-700 mb-4">
                        Assim como o BDV, mostra os dados dos períodos utilização dos veículos da base de forma consolidada por dia, mês ou de todo período filtrado.
                    </p>
                    <p>
                        Para acessar o relatório de Períodos de Utilização Consolidado, abre o menu de relatórios e seleciona a opção "Períodos de Utilização Consolidado".
                    </p>
                    <img src={PeriodoDeUtilizacaoConsolidado} alt="" />
                    <p>
                        Esse relatório é bem parecido com o relatório de Períodos de Utilização do BDV, mas com algumas diferenças importantes:
                    </p>
                    <p>
                        Nesse relatório você consegue informações consolidada do periodo de utilização do veículo de acordo com o tipo de consolidação:
                    </p>
                    <ul>
                        <li><span className="font-bold">Diária:</span> O sistema irá mostrar os dados consolidados por dia de acordo com o periodo filtrado no relatório. Exemplo: Se o periodo configurado for de 10 dias, o sistema irá trazer o relatório com as informações de uso do veículo dia por dia.</li>

                        <li><span className="font-bold">Mensal:</span> O sistema irá mostrar os dados consolidados por mês de acordo com o periodo filtrado no relatório. Exemplo: Se periodo configurado for de 10 meses, o sistema irá trazer o relatório com as informações de uso do veículo mês por mês.</li>

                        <li><span className="font-bold">Todo o periodo:</span> O sistema irá mostrar os dados consolidados para todo o período selecionado.</li>
                    </ul>
                    <img src={PeriodoDeUtilizacaoConsolidado2} alt="" />
                    <p>
                        Após a consulta, com a tabela do relatório já disponível, também é possível filtrar dados específicos em cada coluna.
                    </p>
                    <h2 className="font-bold text-xl">Observação: </h2>
                    <p>
                        Os relatórios de Períodos de Utilização Consolidado ficam armazenados e acessíveis por até 3 meses.
                    </p>
                    <p>
                        Após esse periodo os dados serão removidos do sistema e não poderão mais ser consultados.
                    </p>
                </div>
            </div>
        </div>
    );
}
