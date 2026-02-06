import { Link } from "react-router-dom";

export default function GestaoMultas() {

    const styleLink = "bg-blue-500 text-white font-bold p-4 rounded-lg mb-4 block flex justify-center  hover:bg-blue-600"

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Gestão de Multas</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="space-y-4 bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <h2 className="text-2xl font-bold mb-6 text-blue-700">Controle de Infrações</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                        Identifique, analise e gerencie multas e infrações de trânsito da sua frota.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-6">
                        <p className="text-gray-700 leading-relaxed font-medium">
                        </p>

                        <div className="space-y-4">
                            <h2 className="font-bold text-xl">Premissas</h2>

                            <p>
                                Este material foi criado para servir como guia na utilização do módulo de Gestão de Multas, proporcionando uma experiência que atenda aos objetivos operacionais e gerenciais desta ferramenta incrível.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-bold text-xl" >Público Alvo</h2>

                            <p>
                                O módulo de multas foi desenvolvido para clientes pessoa jurídica que desejam gerenciar as multas e infrações de seus motoristas, além de tomar decisões estratégicas com base em análises de dados. Seu valor é potencializado pela administração de uma grande quantidade de veículos, geralmente referida como frota.
                            </p>

                            <Link className={styleLink} to="/base-conhecimento/gestao-de-multas">Aprenda Sobre o Gestão de multas</Link>
                        </div>

                        <div className="space-y-4" >
                            <h2 className="font-bold text-xl" >FAQ - Gestão de Multas</h2>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">1 - O pagamento dos licenciamentos é reconhecido de forma automática ou devem ser regularizados manualmente?</summary>
                                <p className="text-blue-700">São reconhecidos automaticamente.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">2 - Todos os pagamentos de Multas, IPVA e demais taxas são reconhecidos de forma automáticas se pagos diretamente pelo boleto que está disponível no sistema?</summary>
                                <p className="text-blue-700">O IPVA e os Licenciamentos são reconhecidos pela plataforma, independentemente de terem sido pagos por meio dela ou não. Já em relação às multas, alguns órgãos permitem o reconhecimento automático, enquanto outros não.</p>
                                <p className="text-blue-700">Por isso, a recomendação é que o controle de pagamento de multas seja feito manualmente, seja por meio da importação de uma base via Excel ou pelo registro individual de cada multa.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">3 - O que seria a opção Licenças no cadastro do veículo na plataforma? Caso não tenha nada anexado e cadastrado isso vai colocar o veículo como se estivesse com alguma restrição?</summary>
                                <p className="text-blue-700">Esse campo é utilizado para cadastrar qualquer outra licença exibida no dashboard “Licenças”.</p>
                                <p className="text-blue-700">O Cronotacógrafo é atualizado automaticamente por meio da integração com o Inmetro, mas qualquer outra licença pode ser incluída manualmente (com data de emissão e vencimento) e monitorada no dashboard, que apresenta tanto as licenças vencidas nos últimos 6 meses quanto as que irão vencer nos próximos 6 meses.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">4 - Como posso definir quais notificações é possível indicar de forma legal ao órgão ou todas são disponíveis?</summary>
                                <p className="text-blue-700">Todas as notificações permitem a indicação do condutor, desde que estejam dentro do prazo legal estabelecido para essa solicitação.</p>
                                <p className="text-blue-700">Com exceção do DETRAN RS que somente aceita indicação com o formulário original em papel, com a assinatura física original do condutor idêntica a da CNH.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">5 - O que caracteriza um condutor como tendo informações incompletas? seria por faltar qualquer dado simples ou apenas informações-chave? Por exemplo, a ausência de um complemento no endereço já o tornaria "incompleto"?</summary>
                                <p className="text-blue-700">Só é possível cadastrar condutores que atendam a um mínimo de completude cadastral:</p>
                                <p className="text-blue-700">➨ Importação via planilha: exige Nome e CPF para consulta da CNH.</p>
                                <p className="text-blue-700" >➨ Cadastro manual: exige Nome, CPF, Número da CNH, UF da CNH e Categoria da CNH.</p>
                                <p className="text-blue-700" >Esse conjunto mínimo garante o registro do condutor indicado na notificação para fins internos, ou possibilita o fornecimento das informações obrigatórias durante a indicação pela plataforma para realização da indicação online.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">6 - Após indicar o condutor ao órgão, eu vou precisar repetir o mesmo processo manualmente de indica-lo a notificação ou o sistema irá reconhercer automáticamente</summary>
                                <p className="text-blue-700">Recomendamos que a indicação seja feita pelo módulo Gestão de Multas. Assim, você poderá registrar a indicação no sistema, gerar o formulário padrão e utilizá-lo para formalizar o processo junto ao órgão competente.</p>
                            </details>

                            <details className="mb-2 cursor-pointer">
                                <summary className="font-bold">7 - O órgão atuador atualiza informações de condutor indicado para a plataforma ou isso é somente cadastrado manualmente?</summary>
                                <p className="text-blue-700">Apenas manualmente.</p>
                            </details>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
