import { Unlink2Icon } from "lucide-react";

export default function SSXOnboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">SSX Onboard</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Aplicativo mobile para motoristas</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        O SSX Onboard é um aplicativo mobile desenvolvido para motoristas, que visa melhorar a comunicação e a gestão operacional entre a central de monitoramento e os condutores dos veículos rastreados.
                    </p>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            O Onboard é um aplicativo desenvolvido para oferecer múltiplas funcionalidades para auxiliar na gestão operacional de veículos e motoristas de uma frota, conforme os módulos habilitados na plataforma.
                        </p>
                        <p>
                            Seu principal objetivo é promover uma maior integração entre a central de monitoramento e o condutor do veículo.
                        </p>
                        <p>Com ele, é possível:</p>
                        <ul className="list-disc list-inside">
                            <li>Identificar o motorista</li>
                            <li>Trocar mensagens entre o motorista e a central</li>
                            <li>Registrar as etapas da jornada do motorista (Jornada de Trabalho)</li>
                            <li>Acompanhar o resultado no ranking de motoristas (Performance)</li>
                            <li>Executar entregas, coletas e/ou serviços (Logistics)</li>
                            <li>Criar checklists personalizados</li>
                        </ul>
                        <div>
                            <h2 className="font-bold text-xl" >Observação</h2>
                            <p>
                                A utilização do Onboard está condicionada a ativação apenas com Jornada de Trabalho, Logistics e/ou Performance ativo na base. O app está disponível apenas para Android.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
