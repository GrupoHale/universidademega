import SSXMobileIcones from '../../pages/BaseConhecimento/img/SSXMobileIcones.png';
import SSXMobileIcones2 from '../../pages/BaseConhecimento/img/SSXMobileIcones2.png';

export default function SSXMobile() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">SSX Mobile</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Aplicativo Mobile</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Acesse o sistema de rastreamento em qualquer lugar com o aplicativo mobile SSX.
                    </p>
                    <div className="space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium"></p>

                            <img src={SSXMobileIcones} />
                            <h2 className="font-bold text-xl" >Principais icones</h2>
                            <ul>
                                <li>
                                    <strong>Icone de relogio</strong> - Indica se o sinal do rastreador está atualizado.
                                </li>
                                <li>
                                    <strong>Icone de cadeado</strong> - Indica se o veículo está bloqueado ou desbloqueado.
                                </li>
                                <li>
                                    <strong>Icone de âncora</strong> - indica se a âcora está ativa.
                                </li>
                                <li>
                                    <strong>Icone de bateria</strong> - Mostra como está a bateria do rastreador.
                                </li>
                                <li>
                                    <strong>Icone de lupa</strong> - Indica se o compartilhar rastreamento está ativo.
                                </li>
                            </ul>
                        <img  src={SSXMobileIcones2} />
                    </div>
                </div>
            </div>
        </div>
    );
}