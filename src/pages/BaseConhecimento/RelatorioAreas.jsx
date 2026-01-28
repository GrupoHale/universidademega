export default function RelatorioAreas() {

    const styleColunas = "transition-transform duration-50 hover:text-blue-800 font-bold hover:scale-105";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Relatório de Passagem por Áreas</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <p className="text-gray-700 mb-4">
                        Traz o registro de vezes que os veículos da base passaram por uma área criada e configurada com a categoria Relatório de passagem e produção em áreas.
                    </p>
                    <br/>
                    <p>
                        Se você quer um relatório que detalhe o registro cada vez que o veículo passar por uma área ou rota que a central definiu então o relatório Passagem por áreas é recomendado pra você.
                    </p>
                    <br/>
                    <p>
                        Após a consulta, com a tabela do relatório já disponível, também é possível filtrar dados específicos em cada coluna.
                    </p>
                    <br/>
                    <p>
                        Segue abaixo a relação com os nomes das colunas desse relatório.
                    </p>
                    <br/>
                    <h2 className="font-bold" >Observação:</h2>
                    <br/>
                    <p>
                        Os relatórios de Passagem por Áreas ficam armazenados e acessíveis por até 3 meses.
                    </p>
                    <br/>
                    <p>
                        Após esse periodo os dados serão removidos do sistema e não poderão mais ser consultados.
                    </p>
                    <br/>
                    <h2 className="text-2xl font-bold mb-4">COLUNAS DO RELATÓRIO DE PASSAGENS POR ÁREAS</h2>
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
                </div>
            </div>
        </div>
    );
}
