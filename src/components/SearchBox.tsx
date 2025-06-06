type SearchBoxProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export const SearchBox = ({searchTerm, onSearch}: SearchBoxProps) => {
  return (
    <div>
      <label htmlFor="search" className="sr-only bg-white text-black">Sök todos</label>
      <input 
        type="text" 
        name="search" 
        id="search" 
        className="w-full px-4 py-2 rounded-lg text-gray-100 bg-gray-700 border border-gray-600 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        placeholder="Sök på title..." 
        value={ searchTerm }
        onChange={ (e) => onSearch(e.target.value) }
      />
    </div>
  );
};