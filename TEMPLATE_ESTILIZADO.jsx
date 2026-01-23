// Template padrão melhorado para páginas de Base de Conhecimento
// Copie e adapte este código para as demais páginas

export default function NomedaPagina() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-blue-900">Título da Página</h1>
                
                <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                    {/* Parágrafo de introdução */}
                    <h2 className="text-2xl font-bold mb-6 text-blue-800">Seção Principal</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Parágrafo introdutório principal com contexto sobre o tema.
                    </p>
                    
                    {/* Parágrafo destacado */}
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Informação importante que precisa ser destacada.
                        </p>
                    </div>
                    
                    {/* Lista de itens numerados com cards */}
                    <div className="space-y-4 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-bold text-blue-900 mb-2">1 - Primeiro Item:</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Descrição detalhada do primeiro item ou funcionalidade.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-500">
                            <h3 className="font-bold text-blue-900 mb-2">2 - Segundo Item:</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Descrição detalhada do segundo item ou funcionalidade.
                            </p>
                        </div>
                    </div>
                    
                    {/* Parágrafo simples */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Parágrafo adicional com conteúdo relevante.
                    </p>
                </div>
            </div>
        </div>
    );
}

/*
GUIA DE CORES POR CATEGORIA:
- Azul (blue): Informações gerais e básicas
- Verde (green): Sucesso e conteúdos avançados
- Laranja (orange): Alertas e tratamento
- Roxo (purple): Usuários e cadastros
- Vermelho (red): Regras importantes
- Amarelo (yellow): Avisos e destaques

CLASSES TAILWIND ÚTEIS:
- text-gray-700: Cor de texto padrão
- leading-relaxed: Espaçamento entre linhas
- text-lg: Tamanho maior
- font-medium: Texto um pouco mais pesado
- font-bold: Texto negrito
- mb-6: Margem inferior grande
- p-4: Padding padrão
- p-8: Padding grande
- rounded-lg: Bordas arredondadas
- border-l-4: Borda esquerda grossa
- shadow-lg: Sombra grande
- bg-gradient-to-b: Gradiente vertical (top to bottom)
- space-y-4: Espaço vertical entre elementos filhos
*/
