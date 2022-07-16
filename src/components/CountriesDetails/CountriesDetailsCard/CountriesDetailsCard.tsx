import { useEffect, useState } from 'react';
import { Flags, GetCountries } from '../../../interfaces/countries.interfaces';
import Bordesitems from '../../BordesItems/Bordesitems';
import './countriesDetailsCard.scss';

interface Country {
  name: string;
  nativeName: string;
  validateCapital: string;
  validatetTld: string;
  validateCurrencies: string;
  validateLenguages: string[];
  borders: string[];
  population: number;
  region: string;
  subregion: string;
  flags: Flags;
}

export const CountriesDetailsCard = ({ data, load }: GetCountries) => {
  const [dataCountry, setDataCountry] = useState<Country>();

  const getDataContrie = () => {
    if (Object.entries(data).length > 0) {
      const {
        flags,
        name,
        population,
        region,
        subregion,
        capital,
        tld,
        currencies,
        languages,
        borders,
      } = data[0];
      const validateData = {
        name: name.common,
        flags,
        nativeName: Object.values(name.nativeName)[0].official,
        validateCapital: capital?.length > 0 ? capital[0] : '',
        validatetTld: tld?.length > 0 ? tld[0] : '',
        validateCurrencies: Object.values(currencies)[0].name,
        validateLenguages: Object.values(languages),
        population,
        region,
        subregion,
        borders,
      };

      setDataCountry(validateData);
    }
  };

  useEffect(() => {
    getDataContrie();
  }, [data]);

  if (load) {
    return <></>;
  }

  return (
    <div className='countriesDetailsCard__container'>
      <div className='countriesDetailsCard__container--leftContent'>
        <div className='countriesDetailsCard__container--img-container'>
          <img src={dataCountry?.flags.svg} />
        </div>
      </div>
      <div className='countriesDetailsCard__container--rigthContent'>
        <div className='countriesDetailsCard__container--description'>
          <h1 className='countriesDetailsCard__container--tagName'>
            {dataCountry?.name}
          </h1>

          <div className='countriesDetailsCard__container--dataInfo'>
            <ul className='countriesDetailsCard__container--list'>
              <li>
                <strong>Native Name:</strong>
                {dataCountry?.nativeName}
              </li>
              <li>
                <strong>Population:</strong>
                {dataCountry?.population}
              </li>
              <li>
                <strong>Region:</strong>
                {dataCountry?.region}
              </li>
              <li>
                <strong>Sub Region:</strong>
                {dataCountry?.subregion}
              </li>
              <li>
                <strong>Capital:</strong>
                {dataCountry?.validateCapital}
              </li>
            </ul>
            <ul className='countriesDetailsCard__container--list'>
              <li>
                <strong>Top Level Domain:</strong>
                {dataCountry?.validatetTld}
              </li>
              <li>
                <strong>Currencies:</strong>
                {dataCountry?.validateCurrencies}
              </li>
              <li>
                <strong>Languages:</strong>
                <span>
                  {dataCountry?.validateLenguages.map((lenguage, index) => {
                    return <>{lenguage},</>;
                  })}
                </span>
              </li>
            </ul>
          </div>
          <div>
            {dataCountry?.borders && (
              <Bordesitems borders={dataCountry.borders} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
