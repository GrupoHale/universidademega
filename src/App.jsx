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
    </Routes>
  );
}