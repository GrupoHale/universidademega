import RelatorioDeAlertas2 from "../../pages/BaseConhecimento/img/RelatorioDeAlertas2.png";
import RelatorioDeAlertas from "../../pages/BaseConhecimento/img/RelatorioDeAlertas.png";
import RelatorioGeralIcones from "../../pages/BaseConhecimento/img/RelatorioGeralIcones.png";
import IconeSeletorColunas from "../../pages/BaseConhecimento/img/IconeSeletorColunas.png";
import IconeExportarExcel from "../../pages/BaseConhecimento/img/IconeExportarExcel.png";
import IconeExportarPDf from "../../pages/BaseConhecimento/img/IconeExportarPDF.png";

export default function RelatorioAlertas() {
    
const styleColunas = "transition-transform duration-50 hover:text-blue-800 font-bold hover:scale-105";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Relatório de Alertas</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <br/>
                    <p className="text-gray-700 mb-4">
                       
                    </p>
                    <p>
                        Para acessar o relatório é bem simples, basta abrir o menu de relatórios e selecionar <span className="font-bold">Alertas e notificações</span>
                    </p>
                    <br/>
                    <img src={RelatorioDeAlertas2} alt="" />
                    <br/>
                    <p>
                         Esse relatório exibe o histórico das regras violadas de acordo com os filtros realizados pelo usuário, independente se a regra requer tratamento ou não.
                    </p>
                    <br/>
                    <p>
                        Nele também é possível identificar o local onde a regra foi violada, a duração, distância percorrida entre outros dados disponíveis.
                    </p>
                    <br/>
                    <p>
                        As colunas desse relatório são customizáveis, ordenáveis e redimensionáveis.
                    </p>
                    <br/>
                    <h2>Veja abaixo a visualização desse relatório com algumas regras violadas.</h2>
                    <img src={RelatorioDeAlertas} alt="" />
                    <br/>
                    <p>
                        Se você quer um relatório que informe todos os alertas e notificações geradas num período selecionado, com os respectivos nomes das regras violadas, data e hora das ocorrências, se foram tratadas ou não, entre outras informações então o relatório Alertas e Notificações servirá para você.
                    </p>
                    <br/>
                    <p>
                        Após a consulta, com a tabela do relatório já disponível, também é possível filtrar dados específicos em cada coluna.
                    </p>
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
                    <br/>
                    <p>
                        Segue abaixo a relação com os nomes das colunas desse relatório.
                    </p>
                    <br/>
                    <br/>
                    <h2 className="font-bold">COLUNAS DO RELATÓRIO DE ALERTAS E NOTIFICAÇÕES</h2>
                    <div className= "grid grid-cols-3 gap-4 p-5">
                        <li className={styleColunas}>Unidade Rastreada</li>
                        <li className={styleColunas}>Grupo de unidades rastreadas</li>
                        <li className={styleColunas}>Distância para área geográfica inicial</li>
                        <li className={styleColunas}>Limite para abrir</li>
                        <li className={styleColunas}>Ticket</li>
                        <li className={styleColunas}>Usuário responsável</li>
                        <li className={styleColunas}>Grupo de regras</li>
                        <li className={styleColunas}>Odômetro inicial</li>
                        <li className={styleColunas}>Latitude final</li>
                        <li className={styleColunas}>Latitude </li>
                        <li className={styleColunas}>Finalização da ocorrência</li>
                        <li className={styleColunas}>Telemetrias (minima, máxima e média)</li>
                        <li className={styleColunas}>Motorista</li>
                        <li className={styleColunas}>Local inicio</li>
                        <li className={styleColunas}>Distância para área geográfica final</li>
                        <li className={styleColunas}>Limite para fechar</li>
                        <li className={styleColunas}>Categoria do chamado</li>
                        <li className={styleColunas}>Eventos de controle</li>
                        <li className={styleColunas}>Velocidade máxima</li>
                        <li className={styleColunas}>Odômetro final</li>
                        <li className={styleColunas}>Longitude inicial</li>
                        <li className={styleColunas}>Entradas</li>
                        <li className={styleColunas}>Hora da ocorrência</li>
                        <li className={styleColunas}>Cliente</li>
                        <li className={styleColunas}>Local fim</li>
                        <li className={styleColunas}>Unidade Organizacional</li>
                        <li className={styleColunas}>Tempo para abrir</li>
                        <li className={styleColunas}>Nível</li>
                        <li className={styleColunas}>Nome da regra</li>
                        <li className={styleColunas}>Velocidade considerada</li>
                        <li className={styleColunas}>Distância</li>
                        <li className={styleColunas}>Longitude final</li>
                        <li className={styleColunas}>Saídas</li>
                        <li className={styleColunas}>Situação do chamado</li>
                        <li className={styleColunas}>Requer tratamento</li>
                        <li className={styleColunas}>Modo violação</li>
                        <li className={styleColunas}>Duração do chamado</li>
                        <li className={styleColunas}>Data criação</li>
                        <li className={styleColunas}>Status do chamado</li>
                        <li className={styleColunas}>Data da ocorrência</li>
                        <li className={styleColunas}>Velocidade da via</li>
                        <li className={styleColunas}>Latitude inicial</li>
                        <li className={styleColunas}>Duração</li>
                        <li className={styleColunas}>Áreas e rotas geográficas</li>
                        <li className={styleColunas}>N° ordem rastreador</li>
                    </div>
                </div>
            </div>
        </div>
    );
}