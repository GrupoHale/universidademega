import { Link } from "react-router-dom";

export default function Abastecimento() {
    
    const styleLink = "bg-blue-500 text-white font-bold p-4 rounded-lg mb-4 block flex justify-center  hover:bg-blue-600"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Abastecimento</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Introdução</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        A função de Abastecimento permite registrar e monitorar detalhadamente cada abastecimento, oferecendo relatórios completos que ajudam a identificar excessos, padrões de consumo e oportunidades de economia. Com esses dados, é possível reduzir custos, evitar fraudes e melhorar o controle operacional, fortalecendo a gestão financeira e a competitividade da sua frota.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">

                        </p>
                        
                        <div className="flex space-x-4" >
                            <Link className={styleLink} to={"/base-conhecimento/abastecimento-web"} >Abastecimento via Web</Link>
                            <Link className={styleLink} to={"/base-conhecimento/abastecimento-onboard"} >Abastecimento via Onboard</Link>
                            <Link className={styleLink} to="/base-conhecimento/abastecimento-mobile" >Abastecimento via SSX Mobile</Link>
                            <Link className={styleLink} to={"/base-conhecimento/abastecimento-eficiencia"} >Entenda a eficiênca no SSX</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
