type SearchBoxProps = {
  searchTerm: string;
  onSearch: (term: string) => void;
}

export const SearchBox = ({searchTerm, onSearch}: SearchBoxProps) => {
  return (
    <div>
      <label htmlFor="search">Sök todos</label>
      <input 
        type="text" 
        name="search" 
        id="search" 
        placeholder="Sök på title..." 
        value={ searchTerm }
        onChange={ (e) => onSearch(e.target.value) }
      />
    </div>
  );
};