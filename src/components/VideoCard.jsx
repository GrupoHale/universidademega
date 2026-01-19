export default function VideoCard({ video }) {
  return (
    <div className="bg-white rounded-xl shadow overflow-hidden">
      <iframe
        className="w-full h-48"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        allowFullScreen
      />

      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
          {video.category}
        </span>

        <h2 className="text-lg font-semibold mt-2">
          {video.title}
        </h2>

        <p className="text-gray-600 text-sm">
          {video.description}
        </p>
        <div className="flex justify-end mt-4">
          <a className="bg-blue-900 text-white px-3 py-2 rounded mt-1 inline-block hover:bg-blue-700" href="">Ver mais</a>
        </div>
      </div>
    </div>
  );
}