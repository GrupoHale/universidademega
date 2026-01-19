var data = new Date();
var ano = data.getFullYear();

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white p-6 text-center col-span-full mt-10" >
            <p className="text-white" >© {ano} Grupo Hale • Todos os direitos reservados </p>
        </footer>
    );
};