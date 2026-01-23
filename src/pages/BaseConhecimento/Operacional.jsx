export default function Operacional() {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6">Operacional</h1>
                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-bold mb-4">TELA OPERACIONAL</h2>
                    <p className="text-gray-700 mb-4">
                        A tela operacional é o espaço onde o usuário visualiza os veículos de sua própria base de operações e os dados de posição enviados pelos rastreadores.
                    </p>
                    <br />
                    <p className="text-gray-700 mb-4">
                        Esta é uma tela importante no cenário de rastreamento, pois oferece informações detalhadas sobre a localização e o status da unidade rastreada, além de fornecer uma variedade de ações voltadas para a segurança e a gestão dos ativos.
                    </p>
                    <br />
                    <p className="text-gray-700 mb-6">
                        Como mostrado abaixo, a tela é dividida entre o mapa, na parte superior, e a grid, na parte inferior.
                    </p>
                    
                    <img src="./img/Tela operacional editado.PNG" alt="Tela Operacional" className="w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}
