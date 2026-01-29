import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import videosData from "./data/videos.json";

import MenuLateral from "./components/Menu";
import Filters from "./components/Filters";
import VideoCard from "./components/VideoCard";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import BaseDeConhecimento from "./pages/BaseConhecimento";
import Educador from "./pages/Educador";

import VisaoGeral from "./pages/BaseConhecimento/VisaoGeral";
import Treinamento1 from "./pages/BaseConhecimento/Treinamento1";
import Treinamento2 from "./pages/BaseConhecimento/Treinamento2";
import Operacional from "./pages/BaseConhecimento/Operacional";
import TratarAlertas from "./pages/BaseConhecimento/TratarAlertas";
import CadastrarUsuarios from "./pages/BaseConhecimento/CadastrarUsuarios";
import Regras from "./pages/BaseConhecimento/Regras";
import IdentificacaoMotorista from "./pages/BaseConhecimento/IdentificacaoMotorista";
import UnidadeOrganizacional from "./pages/BaseConhecimento/UnidadeOrganizacional";
import CNH from "./pages/BaseConhecimento/CNH";
import AreasRotas from "./pages/BaseConhecimento/AreasRotas";
import JornadaTrabalho from "./pages/BaseConhecimento/JornadaTrabalho";
import Performance from "./pages/BaseConhecimento/Performance";
import Logistics from "./pages/BaseConhecimento/Logistics";
import Videotelemetria from "./pages/BaseConhecimento/Videotelemetria";
import Manutencao from "./pages/BaseConhecimento/Manutencao";
import Abastecimento from "./pages/BaseConhecimento/Abastecimento";
import GestaoMultas from "./pages/BaseConhecimento/GestaoMultas";
import Velocidade from "./pages/BaseConhecimento/Velocidade";
import SSXMobile from "./pages/BaseConhecimento/SSXMobile";
import SSXOnboard from "./pages/BaseConhecimento/SSXOnboard";
import MacrosOnboard from "./pages/BaseConhecimento/MacrosOnboard";
import RelatorioGeral from "./pages/BaseConhecimento/RelatorioGeral";
import PeriodosBDV from "./pages/BaseConhecimento/PeriodosBDV";
import PeriodosConsolidado from "./pages/BaseConhecimento/PeriodosConsolidado";
import RelatorioAlertas from "./pages/BaseConhecimento/RelatorioAlertas";
import RelatorioAreas from "./pages/BaseConhecimento/RelatorioAreas";
import RelatorioMensagens from "./pages/BaseConhecimento/RelatorioMensagens";
import RelatorioManutencoes from "./pages/BaseConhecimento/RelatorioManutencoes";
import RelatorioAbastecimentos from "./pages/BaseConhecimento/RelatorioAbastecimentos";

import { Menu } from "lucide-react";

export function VideoContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 10;

  const categories = ["Todos", ...new Set(videosData.map(v => v.category))];

  const filteredVideos = videosData.filter(video => {
    const matchTitle = video.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Todos" || video.category === category;

    return matchTitle && matchCategory;
  });

  // Calcular paginação
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;
  const paginatedVideos = filteredVideos.slice(startIndex, endIndex);

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 z-50">

      </div>
      
      <main className="max-w-7xl mx-auto p-6">
        <Filters
          search={search}
          setSearch={handleSearchChange}
          category={category}
          setCategory={handleCategoryChange}
          categories={categories}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        {/* Navegador de páginas */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-slate-900 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-slate-700"
            >
              Anterior
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded ${
                    currentPage === page
                      ? 'bg-slate-900 text-white'
                      : 'bg-gray-300 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-slate-900 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-slate-700">
              Próximo
            </button>
          </div>
        )}

        <div className="mt-4 text-center text-gray-600">
          Página {currentPage} de {totalPages} • Total de {filteredVideos.length} vídeos
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/base-conhecimento" element={<BaseDeConhecimento />} />
      <Route path="/educador" element={<Educador />} />
      
      <Route path="/base-conhecimento/visao-geral" element={<VisaoGeral />} />
      <Route path="/base-conhecimento/treinamento-1" element={<Treinamento1 />} />
      <Route path="/base-conhecimento/treinamento-2" element={<Treinamento2 />} />
      <Route path="/base-conhecimento/operacional" element={<Operacional />} />
      <Route path="/base-conhecimento/tratar-alertas" element={<TratarAlertas />} />
      <Route path="/base-conhecimento/cadastrar-usuarios" element={<CadastrarUsuarios />} />
      <Route path="/base-conhecimento/regras" element={<Regras />} />
      <Route path="/base-conhecimento/identificacao-motorista" element={<IdentificacaoMotorista />} />
      <Route path="/base-conhecimento/unidade-organizacional" element={<UnidadeOrganizacional />} />
      <Route path="/base-conhecimento/cnh" element={<CNH />} />
      <Route path="/base-conhecimento/areas-rotas" element={<AreasRotas />} />
      <Route path="/base-conhecimento/jornada-trabalho" element={<JornadaTrabalho />} />
      <Route path="/base-conhecimento/performance" element={<Performance />} />
      <Route path="/base-conhecimento/logistics" element={<Logistics />} />
      <Route path="/base-conhecimento/videotelemetria" element={<Videotelemetria />} />
      <Route path="/base-conhecimento/manutencao" element={<Manutencao />} />
      <Route path="/base-conhecimento/abastecimento" element={<Abastecimento />} />
      <Route path="/base-conhecimento/multas" element={<GestaoMultas />} />
      <Route path="/base-conhecimento/velocidade" element={<Velocidade />} />
      <Route path="/base-conhecimento/ssx-mobile" element={<SSXMobile />} />
      <Route path="/base-conhecimento/ssx-onboard" element={<SSXOnboard />} />
      <Route path="/base-conhecimento/macros-onboard" element={<MacrosOnboard />} />
      <Route path="/base-conhecimento/relatorio-geral" element={<RelatorioGeral />} />
      <Route path="/base-conhecimento/periodos-bdv" element={<PeriodosBDV />} />
      <Route path="/base-conhecimento/periodos-consolidado" element={<PeriodosConsolidado />} />
      <Route path="/base-conhecimento/relatorio-alertas" element={<RelatorioAlertas />} />
      <Route path="/base-conhecimento/relatorio-areas" element={<RelatorioAreas />} />
      <Route path="/base-conhecimento/relatorio-mensagens" element={<RelatorioMensagens />} />
      <Route path="/base-conhecimento/relatorio-manutencoes" element={<RelatorioManutencoes />} />
      <Route path="/base-conhecimento/relatorio-abastecimentos" element={<RelatorioAbastecimentos />} />
    </Routes>
  );
}