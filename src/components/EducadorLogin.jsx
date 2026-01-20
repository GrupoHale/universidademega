export default function EducadorLogin () {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-200">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                
                {/* Logo / Título */}
                <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-800">Acesso ao sistema</h1>
                <p className="text-sm text-slate-500 mt-1">Entre com suas credenciais</p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 
                                focus:outline-none focus:ring-2 focus:ring-slate-900"/>
                </div>

                {/* Senha */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Senha</label>
                    <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 
                                focus:outline-none focus:ring-2 focus:ring-slate-900"/>
                </div>

                {/* Lembrar / Esqueci */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="rounded border-slate-300" />Lembrar-me</label>

                    <a href="#" className="text-slate-900 font-medium hover:underline">Esqueci a senha</a>
                </div>

                {/* Botão */}
                <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-3 rounded-lg 
                            font-semibold hover:bg-slate-800 transition">Entrar</button>
                </form>
                </div>
            </div>
        </>
    );
};