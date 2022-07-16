import { Link, useParams } from 'react-router-dom';
import { CountriesDetailsCard } from '../../components/CountriesDetails/CountriesDetailsCard/CountriesDetailsCard';
import { useGetAllCountries } from '../../hook/useGetAllCountries';
import { IconComeBack } from '../../icons/Icons';
import { GetCountries } from '../../interfaces/countries.interfaces';
import './countriesDetails.scss';
const CountriesDetails = () => {
  const { teamId } = useParams();

  const { data, load }: GetCountries = useGetAllCountries(
    `alpha/${teamId}`,
    teamId
  );

  return (
    <div className='countriesDetails__container'>
      <div className='countriesDetails__container--wrapper'>
        <Link className='countriesDetails__container--comeBack' to='/'>
          <IconComeBack />
          <span>Back</span>
        </Link>

        <CountriesDetailsCard data={data} load={load} />
      </div>
    </div>
  );
};

export default CountriesDetails;
