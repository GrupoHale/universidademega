export default function SSXOnboard() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-emerald-900">SSX Onboard</h1>
                <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-600">
                    <h2 className="text-2xl font-bold mb-6 text-emerald-800">Sistema Onboard</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Utilize o sistema onboard instalado nos veículos para comunicação e dados em tempo real.
                    </p>
                    <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            O Onboard é um aplicativo desenvolvido para oferecer múltiplas funcionalidades para auxiliar na gestão operacional de veículos e motoristas de uma frota, conforme os módulos habilitados na plataforma.
                        </p>
                        <br/>
                        <p>
                            Seu principal objetivo é promover uma maior integração entre a central de monitoramento e o condutor do veículo.
                        </p>
                        <br/>
                        <p>Com ele, é possível:</p>
                        <li>
                            <ul>Identificar o motorista</ul>
                            <ul>Trocar mensagens entre o motorista e a central</ul>
                            <ul>Registrar as etapas da jornada do motorista (Jornada de Trabalho)</ul>
                            <ul>Acompanhar o resultado no ranking de motoristas (Performance)</ul>
                            <ul>Executar entregas, coletas e/ou serviços (Logistics)</ul>
                            <ul>Criar checklists personalizados</ul>
                            <br/>
                            <p>
                                OBSERVAÇÃO: A utilização do Onboard está condicionada a ativação apenas com Jornada de Trabalho, Logistics e/ou Performance ativo na base. O app está disponível apenas para Android.
                            </p>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    );
}
