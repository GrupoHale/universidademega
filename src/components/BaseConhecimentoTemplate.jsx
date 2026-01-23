// Template melhorado para páginas de Base de Conhecimento
// Importe este componente nas páginas individuais

export function PageTemplate({ title, children }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-blue-900">{title}</h1>
                <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function SectionBox({ children, type = "info" }) {
    const colors = {
        info: "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-500 text-blue-900",
        warning: "bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-400 text-yellow-900",
        success: "bg-gradient-to-r from-green-50 to-green-100 border-green-500 text-green-900",
        alert: "bg-gradient-to-r from-red-50 to-red-100 border-red-500 text-red-900"
    };
    
    return (
        <div className={`${colors[type]} p-5 rounded-lg border-l-4 mb-4`}>
            {children}
        </div>
    );
}

export function ContentParagraph({ children }) {
    return (
        <p className="text-gray-700 mb-4 leading-relaxed text-lg">
            {children}
        </p>
    );
}

export function HighlightParagraph({ children }) {
    return (
        <p className="text-gray-700 mb-6 leading-relaxed text-lg bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            {children}
        </p>
    );
}

export function ItemBox({ number, title, children }) {
    return (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border-l-4 border-blue-500 mb-4">
            <h3 className="font-bold text-blue-900 mb-2">{number} - {title}:</h3>
            <p className="text-gray-700 leading-relaxed">
                {children}
            </p>
        </div>
    );
}
