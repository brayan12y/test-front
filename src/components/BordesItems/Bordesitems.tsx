import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllCountries } from '../../hook/useGetAllCountries';
import { GetCountries } from '../../interfaces/countries.interfaces';
import './bordesitems.scss';

interface Props {
  borders: string[];
}

const Bordesitems = ({ borders }: Props) => {
  const { data, load }: GetCountries = useGetAllCountries(
    `alpha?codes=${borders.join()}`
  );

  return (
    <>
      {!load && (
        <div className='bordesItems__countainer'>
          <strong>Border Countries:</strong>
          {data.map((data) => {
            return (
              <Link
                key={data.name.official}
                to={`/countries-details/${data.altSpellings[0]}`}
              >
                {data.name.official}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default memo(Bordesitems);
