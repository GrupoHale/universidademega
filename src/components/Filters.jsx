export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  categories
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <input
        className="flex-1 p-3 border rounded bg-blue-0 text-black-700 placeholder:text-gray-600"
        placeholder="Pesquisar"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <select
        className="p-3 border rounded bg-blue-0 text-black-700"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        {categories.map(cat => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}