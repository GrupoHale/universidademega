import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import videosData from "./data/videos.json";

import Filters from "./components/Filters";
import VideoCard from "./components/VideoCard";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import BaseDeConhecimento from "./pages/BaseDeConhecimento";
import Educador from "./pages/Educador";

export function VideoContent() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(videosData.map(v => v.category))];

  const filteredVideos = videosData.filter(video => {
    const matchTitle = video.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Todos" || video.category === category;

    return matchTitle && matchCategory;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 z-50">

      </div>
      
      <main className="max-w-7xl mx-auto p-6">
        <Filters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          categories={categories}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}

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