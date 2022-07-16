import { memo } from 'react';
import { CountriesInterface } from '../../interfaces/countries.interfaces';
import CountryCard from '../CountryCard/CountryCard';
import SkeletonSearch from '../SkeletonSearch/SkeletonSearch';

import './countriesList.scss';

interface Props {
  countriesData?: CountriesInterface[];
  load: boolean;
}

const CountriesResult = ({ countriesData, load }: Props) => {
  if (load) {
    return (
      <div className='countriesList__container'>
        {Array.from(Array(8).keys()).map((index) => (
          <SkeletonSearch key={`load-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className='countriesList__container'>
      {countriesData?.map((countries) => (
        <CountryCard
          key={countries?.name?.common}
          flag={countries?.flags.png}
          officialName={countries?.name?.official}
          code={countries?.cca2}
          population={countries?.population}
          region={countries?.region}
          capital={countries?.capital}
        />
      ))}
    </div>
  );
};

export default memo(CountriesResult);
