type SortOptionProps = {
  sortOption: string;
  onSortChange: (sortOption:string) => void;
}

export const SortOption = ({  sortOption, onSortChange }:SortOptionProps) => {
  return (
    <select 
      value={sortOption} 
      onChange={(e) => onSortChange(e.target.value)}
    >
      <option value="default">Ursprungsordning</option>
      <option value="title-asc">Titel A-Ö</option>
      <option value="title-desc">Titel Ö-A</option>
      <option value="date-newest">Nyaste först</option>
      <option value="date-oldest">Äldsta först</option>
    </select>
  );
};