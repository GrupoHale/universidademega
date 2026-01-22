const getcartaoClasses = (cor) => {
    const cores = {
        blue: "bg-blue-50 border-blue-200 hover:bg-blue-100",
        purple: "bg-purple-50 border-purple-200 hover:bg-purple-100",
        green: "bg-green-50 border-green-200 hover:bg-green-100",
        orange: "bg-orange-50 border-orange-200 hover:bg-orange-100",
        red: "bg-red-50 border-red-200 hover:bg-red-100", 
        black: "bg-black-50 border-black-200 hover:bg-black-100"
    };
    return cores[cor];
};

const gettituloClasses = (cor) => {
    const cores = {
        blue: "text-blue-700",
        purple: "text-purple-700",
        green: "text-green-700",
        orange: "text-orange-700",
        red: "text-red-700",
        black: "text-black-700"
    };
    return cores[cor];
};

const getButtonClasses = (cor) => {
    const cores = {
        blue: "bg-blue-600 hover:bg-blue-700",
        purple: "bg-purple-600 hover:bg-purple-700",
        green: "bg-green-6001 hover:bg-green-700",
        orange: "bg-orange-600 hover:bg-orange-700",
        red: "bg-red-600 hover:bg-red-700",
        black: "bg-black-600 hover:bg-black-700"
    };
    return cores[cor];
};

export default function Home2() {
    const cartoes = [
        {
            titulo: "Comece por aqui",
            descricao: "Conheça a plataforma e dê seus primeiros passos",
            icone: "🚀",
            cor: "blue",
            link: "/base-conhecimento"
        },
        {
            titulo: "Conteúdos Avançados",
            descricao: "Módulo de gestão de frota pra quem já sabe o básico",
            icone: "📚",
            cor: "blue",
            link: "/base-conhecimento"
        },
        {
            titulo: "Aplicativos",
            descricao:  "Conheça nossos aplicativos integrados",
            icone: "📱",
            cor: "blue",
            link: "/base-conhecimento"
        },
        {
            titulo: "Confira nossas videoaulas",
            descricao:  "Conteúdos gravados sobre as funcionalidades do sistema",
            icone: "🎥",
            cor: "blue",
            link: "/videos",
        },
        {
            titulo:"Regras",
            descricao:"Aprenda a criar regras personalizadas para auxiliar sua operação.",
            icone:"⚠️",
            cor:"blue",
            link:"/base-conhecimento",
        },
        {
            titulo:"Relatórios",
            descricao:"Entenda como funciona os relatórios e como pode auxiliar em sua operação",
            icone:"📋",
            cor: "blue",
            link:"/base-conhecimento",
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">

            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Fique por dentro de todas as novidades do sistema
                </h1>
                <p className="text-lg text-gray-600">
                    Explore os diferentes módulos e aprenda na sua velocidade
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {cartoes.map((cartao, index) => (
                    <div
                        key={index}
                        className={`${getcartaoClasses(cartao.cor)} border-2 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
                        <div className="text-4xl mb-4">{cartao.icone}</div>
                        <h2 className={`${gettituloClasses(cartao.cor)} text-2xl font-bold mb-3`}>
                            {cartao.titulo}
                        </h2>
                        <p className="text-gray-700 text-base mb-6 leading-relaxed">
                            {cartao.descricao}
                        </p>
                        <a className={`${getButtonClasses(cartao.cor)} text-white px-6 py-2 rounded-lg font-semibold transition-cores duration-200`} href={cartao.link}>Acessar
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}