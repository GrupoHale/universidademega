var data = new Date();
var ano = data.getFullYear();

export default function Footer() {
    return (
        <footer>
            <p className="text-white" >© {ano} Grupo Hale • Todos os direitos reservados </p>
        </footer>
    );
};