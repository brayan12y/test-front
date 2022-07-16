import { useEffect, useState } from 'react';
import { IconClose } from '../../icons/Icons';
import CustomSelect from '../CustomSelect/CustomSelect';
import './countriesFilters.scss';

const dataSelection = [
  { name: 'Africa', value: 'africa' },
  { name: 'Americas', value: 'americas' },
  { name: 'Asia', value: 'asia' },
  { name: 'Europe', value: 'europe' },
  { name: 'Oceania', value: 'oceania' },
];

interface DataSelection {
  name: string;
  value: string;
}

interface Props {
  getAllCountries: Function;
  handleClearFilters: Function;
}

const CountriesFilters = ({ getAllCountries, handleClearFilters }: Props) => {
  const [selectedOption, setSelectedOption] = useState<DataSelection>({
    name: '',
    value: '',
  });

  useEffect(() => {
    selectedOption?.value && handleOnSelect(selectedOption?.value);
  }, [selectedOption?.value]);

  const handleOnSelect = (param: string) => {
    getAllCountries(`/region/${param}`);
  };

  const handleClear = () => {
    setSelectedOption({
      name: '',
      value: '',
    });
    handleClearFilters();
  };

  return (
    <div className='countriesFilters__container'>
      {selectedOption?.value && (
        <span
          className='countriesFilters__container--clear'
          onClick={handleClear}
        >
          <IconClose />
        </span>
      )}

      <CustomSelect
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        dataSelection={dataSelection}
        placeholder='Filter by Region'
      />
    </div>
  );
};

export default CountriesFilters;
