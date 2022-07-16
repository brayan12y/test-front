import { AxiosError, AxiosResponse } from 'axios';
import { memo, useEffect, useMemo, useState } from 'react';
import { getCountriesData } from '../../api/services/countries.services';
import CountriesFilters from '../../components/CountriesFilters/CountriesFilters';
import CountriesResult from '../../components/CountriesResult/CountriesResult';
import SearchBar from '../../components/SearchBar/SearchBar';
import { GetCountries } from '../../interfaces/countries.interfaces';
import './countriesHome.scss';

const urlParams = '/all';

const CountriesHome = () => {
  const [countriesData, setCountriesData] = useState<GetCountries>({
    load: true,
    data: [],
  });
  const [searchParam, setSearchParam] = useState<string>('');

  const getAllCountries = async (terms: string) => {
    getCountriesData(terms)
      .then((result: AxiosResponse) => {
        setCountriesData({ load: false, data: result.data });
      })
      .catch((err: AxiosError) => {
        console.warn(err);
        setCountriesData({ ...countriesData, load: false });
      });
  };

  const handleClearFilters = () => {
    getAllCountries(urlParams);
    setSearchParam('');
  };

  useEffect(() => {
    getAllCountries(urlParams);
  }, []);

  const filterCountriesPrueba = useMemo(() => {
    return searchParam.length === 0
      ? countriesData?.data
      : countriesData?.data?.filter((countries) => {
          return countries?.name?.official
            .toLowerCase()
            .includes(searchParam.toLowerCase());
        });
  }, [searchParam, countriesData?.data]);

  return (
    <div className='homeLayout__container'>
      <div className='homeLayout__container--wrapper'>
        <div className='homeLayout__container--filters'>
          <SearchBar
            setSearchParam={setSearchParam}
            searchParam={searchParam}
          />
          <CountriesFilters
            getAllCountries={getAllCountries}
            handleClearFilters={handleClearFilters}
          />
        </div>
        <CountriesResult
          load={countriesData?.load}
          countriesData={filterCountriesPrueba}
        />
      </div>
    </div>
  );
};

export default memo(CountriesHome);
