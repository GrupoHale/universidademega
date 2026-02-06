import AbastecimentoMobileOdometro from "../../pages/BaseConhecimento/img/AbastecimentoMobileOdometro.jpg"
import AbastecimentoMobileMenu from "../../pages/BaseConhecimento/img/AbastecimentoMobileMenu.jpg"
import CadastrarAbastecimentoMobile from "../../pages/BaseConhecimento/img/CadastrarAbastecimentoMobile.jpg"
import CadastrarAbastecimentoMobile2 from "../../pages/BaseConhecimento/img/CadastrarAbastecimentoMobile2.jpg"
import EditarAbastecimento from "../../pages/BaseConhecimento/img/EditarAbastecimento.png"
import EditarAbastecimento2 from "../../pages/BaseConhecimento/img/EditarAbastecimento2.png"
import EditarAbastecimento3 from "../../pages/BaseConhecimento/img/EditarAbastecimento3.png"

export default function AbastecimentoMobile() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 py-12">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Abastecimento via SSX Mobile</h1>
                    <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 rounded-full"></div>
                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 border border-slate-200 border-l-4 border-l-blue-500">
                    <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed text-lg">
                            A funcionalidade de registro de abastecimentos, já disponível na versão web do SSX e no aplicativo Onboard, agora também pode ser utilizada no SSX Mobile!

                            Com essa atualização, os usuários terão ainda mais autonomia para realizar lançamentos de abastecimentos diretamente pelo aplicativo, de forma prática, rápida e segura.
                        </p>
                        
                        <div className=" space-y-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                            <p className="text-gray-700 leading-relaxed font-medium">
                            </p>

                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl" >Cadastrar abastecimentos</h2>

                                <p>Para acessar os abastecimentos, abra o menu lateral no aplicativo e clique na opção <strong>Abastecimentos</strong></p>

                                <img className="h-100 w-80" src={AbastecimentoMobileMenu} alt="" />
                            </div>

                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl">Visualização de Odômetro e Horímetro no SSX Mobile</h2>

                                <p>
                                    Por padrão, o aplicativo exibe o <strong>Dashboard com dados de odômetro (km)</strong>. Se o cliente quiser visualizar os dados por <strong>horímetro (horas)</strong>, é necessário <strong>selecionar essa opção manualmente na tela.</strong>
                                </p>

                                <img className="w-100 h-80" src={AbastecimentoMobileOdometro} alt="" />

                                <ul className="list-decimal list-inside space-y-2" >
                                    <li>Abastecimentos por odômetro</li>
                                    <li>Abastecimentos por horímetro</li>
                                    <li>Média da eficiência dos veículos filtrados</li>
                                    <li>Desempenho em relação ao período anterior filtrado.</li>
                                </ul>

                                <p>
                                    <strong>Exemplo:</strong> Suponha que o período filtrado seja de 06/10 a 10/10 (6 dias).
                                </p>

                                <p>
                                    Nesse caso, o sistema realizará a comparação com o período imediatamente anterior, de 30/09 a 05/10 (também com 6 dias), garantindo uma análise equilibrada entre intervalos de mesma duração.
                                </p>
                            </div>
                            <div className="space-y-4" >
                                <h2 className="font-bold text-xl" >Cadastrando abastecimento</h2>

                                <p>
                                    Ao selecionar a opção <strong>Abastecimento</strong> no menu, clique no '<strong>+</strong>' para cadastrar um novo abastecimento
                                </p>

                                <img  className="w-80" src={CadastrarAbastecimentoMobile} alt="" />

                                <p>
                                    Preencha os campos com as informações do abastecimento e clique em <strong>Salvar</strong>
                                </p>

                                <img className="w-80" src={CadastrarAbastecimentoMobile2} alt="" />
                            </div>
                            <div className="space-y-4">
                                <h2 className="font-bold text-xl" >📱 Para editar ou excluir um registro de abastecimento no aplicativo SSX Mobile, siga os passos abaixo:</h2>

                                <ul className="list-decimal list-inside space-y-2" >
                                    <li>Acesse o menu <strong>Abastecimento</strong> no app SSX Mobile.</li>
                                    <img className="h-80"  src={EditarAbastecimento} alt="" />

                                    <li>Altere a visualização para o modo <strong>Detalhado</strong></li>
                                    <img className="h-80" src={EditarAbastecimento2} alt="" />

                                    <li>Toque no registro e escolha a ação: <strong>Editar</strong> ou <strong>Excluir</strong>
                                    </li>
                                    <img  className="h-80" src={EditarAbastecimento3} alt="" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
