type SortOptionProps = {
  sortOption: string;
  onSortChange: (sortOption:string) => void;
}

export const SortOption = ({  sortOption, onSortChange }:SortOptionProps) => {
  return (
    <select 
      aria-label="Sortera todos"
      className="min-w-43 flex-1 cursor-pointer px-4 py-2 flex items-center justify-center gap-x-2 rounded-lg text-gray-100 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      value={sortOption} 
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="default">Ingen sortering</option>
      <option value="title-asc">Titel A-Ö</option>
      <option value="title-desc">Titel Ö-A</option>
      <option value="date-newest">Nyaste först</option>
      <option value="date-oldest">Äldsta först</option>
    </select>
  );
};