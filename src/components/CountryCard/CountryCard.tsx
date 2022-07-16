import { memo } from 'react';
import { Link } from 'react-router-dom';
import './countryCard.scss';
interface Props {
  flag: string;
  officialName: string;
  population: number;
  region: string;
  code: string;
  capital: string[];
}

const CountryCard = ({
  code,
  flag,
  officialName,
  population,
  region,
  capital,
}: Props) => {
  return (
    <div className='countryCard__container'>
      <Link to={`countries-details/${code.toLocaleLowerCase()}`}>
        <div className='countryCard__container--flag'>
          <img src={flag} />
        </div>
        <div className='countryCard__container--description'>
          <h3 className='countryCard__container--neme'>{officialName}</h3>
          <ul className='countryCard__container--list'>
            <li>
              <strong>Population: </strong>
              {Intl.NumberFormat().format(population)}
            </li>
            <li>
              <strong>Eegion: </strong>
              {region}
            </li>
            <li>
              <strong>Capital: </strong>
              {capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default memo(CountryCard);
