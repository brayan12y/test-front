import { IconSearch } from '../../icons/Icons';
import './searchBar.scss';

interface Props {
  setSearchParam: Function;
  searchParam: string;
}

const SearchBar = ({ setSearchParam, searchParam }: Props) => {
  return (
    <div className='searchBar__container'>
      <div className='searchBar__container--searchWrapper'>
        <span>
          <IconSearch />
        </span>
        <input
          type='text'
          value={searchParam}
          placeholder='Seacrh for a country...'
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
