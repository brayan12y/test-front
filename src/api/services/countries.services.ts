import { CountriesInterface } from '../../interfaces/countries.interfaces';
import http from '../http-common';

interface GetData {
  data: CountriesInterface[];
}

export const getCountriesData = async (params: string) => {
  const response = await http.get<GetData>(params);
  return response;
};
