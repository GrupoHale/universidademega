import RelatorioGeralFiltros from "../../pages/BaseConhecimento/img/RelatorioGeralFiltros.png";
import RelatorioGeralIcones from "../../pages/BaseConhecimento/img/RelatorioGeralIcones.png";
import IconeSeletorColunas from "../../pages/BaseConhecimento/img/IconeSeletorColunas.png";
import IconeExportarExcel from "../../pages/BaseConhecimento/img/IconeExportarExcel.png";
import IconeExportarPDf from "../../pages/BaseConhecimento/img/IconeExportarPDF.png";

export default function RelatorioGeral() {

    const styleColunas = "transition-transform duration-50 hover:text-blue-800 font-bold hover:scale-105";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Relatório Geral</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-black-800">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Gere relatórios abrangentes com dados consolidados de toda a operação.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            O relatório Geral fornece informações detalhadas sobre a localização dos veículos rastreados ao longo do tempo. Com base nas posições enviadas pelo rastreador, você pode visualizar um registro completo de todos os pontos por onde o veículo passou durante o período selecionado.
                        </p>
                        <br/>
                        <p>
                            <span className="font-bold" >Observação: </span>só é possível filtrar um período máximo de 7 dias por vez devido a volume de dados que é gerado nesse relatório.
                        </p>
                        <br/>
                        <p>
                            Ao acessar o relatório irá abrir a tela de filtros onde você pode estar escolhendo os parâmetros do relatório.
                        </p>
                        <br/>
                        <img src={RelatorioGeralFiltros} alt="" />
                        <br/>
                        <p>Após definir os filtros, clique em <span className="font-bold" >Consultar</span></p>
                        <br/>
                        <p><span className="font-bold" >Observação: </span>Para que a descrição do endereço fique aparente em cada linha do relatório é imprescindível que o usuário marque a caixa <span className="font-bold" >Obter Localização</span>, no filtro da consulta.</p>
                        <br/>
                        <p>Após a consulta, com a tabela do relatório já disponível, também é possível filtrar dados específicos em cada coluna.</p>
                        <br/>
                        <h2 className="font-bold" >As colunas da grid desse relatório são:</h2>
                        <ul>
                            <li>- Customizáveis: É possível escolher que colunas ficam na grid.</li>
                            <li>- Ordenáveis: É possível redefinir a ordem das colunas.</li>
                            <li>- Redimensionáveis: É possível ajustar o tamanho de cada coluna.</li>
                        </ul>
                        <br/>
                        <h2>Observação Importante:</h2>
                        <br/>
                        <p>
                            Os relatórios Gerais ficam armazenados e acessíveis por até 3 meses.
                        </p>
                        <br/>
                        <p>
                            Após esse periodo os dados serão removidos do sistema e não poderão mais ser consultados.
                        </p>
                        <br/>
                        <h2 className="font-bold">COLUNAS DO RELATÓRIO GERAL</h2>
                        <br/>
                        <div className="grid grid-cols-3 gap-4 p-5">
                            <li className={styleColunas}>Unidade rastreada</li>
                            <li className={styleColunas}>Data do evento</li>
                            <li className={styleColunas}>Direção</li>
                            <li className={styleColunas}>Bateria Backup</li>
                            <li className={styleColunas}>Nível do tanque</li>
                            <li className={styleColunas}>Sensor</li>
                            <li className={styleColunas}>Nome do evento</li>
                            <li className={styleColunas}>Distância para área geográfica</li>
                            <li className={styleColunas}>Motorista</li>
                            <li className={styleColunas}>Data de atualização</li>
                            <li className={styleColunas}>Velocidade</li>
                            <li className={styleColunas}>Odômetro</li>
                            <li className={styleColunas}>Percentual do tanque</li>
                            <li className={styleColunas}>Filtro do sensor</li>
                            <li className={styleColunas}>Endereço</li>
                            <li className={styleColunas}>Grupo de unidades rastreadas</li>
                            <li className={styleColunas}>Nº ordem rastreador</li>
                            <li className={styleColunas}>Latitude</li>
                            <li className={styleColunas}>Número satelíte</li>
                            <li className={styleColunas}>Horímetro</li>
                            <li className={styleColunas}>Telemetria</li>
                            <li className={styleColunas}>Atuador</li>
                            <li className={styleColunas}>Meio de comunicação</li>
                            <li className={styleColunas}>Unidade organizacional</li>
                            <li className={styleColunas}>Data do GPS</li>
                            <li className={styleColunas}>Longitude</li>
                            <li className={styleColunas}>Bateria principal</li>
                            <li className={styleColunas}>RPM</li>
                            <li className={styleColunas}>Filtro da telemetria</li>
                            <li className={styleColunas}>Filtro do atuador</li>
                        </div>
                            <br/>
                        <p>No cabeçalho do relatório temos alguns icones, onde conseguimos adicionar  ou remover colunas no grid, exportar o relatório via excel e PDF</p>
                        <br/>
                        <img src={RelatorioGeralIcones} alt="" />
                        <br/>
                        <div className="space-y-1">
                            <div className="flex space-y-1.5 space-x-1">
                                <img className="hover:scale-105" src={IconeSeletorColunas} alt="" />
                                <p className="font-bold" >
                                    Seletor de colunas - Adicionar ou remover colunas do grid
                                </p>
                            </div>
                            <div className="flex space-y-1.5 space-x-1" >
                                <img className="hover:scale-105" src={IconeExportarExcel} alt="" />
                                <p className="font-bold" >
                                    Exportar Excel - Exportar o relatório em excel
                                </p>
                            </div>
                            <div className="flex space-y-1.5 space-x-1" >
                                <img className="hover:scale-105" src={IconeExportarPDf} alt="" />
                                <p className="font-bold" >
                                    Exportar PDF - Exportar o relatório em PDF
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}