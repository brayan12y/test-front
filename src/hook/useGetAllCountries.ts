import { AxiosError, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { getCountriesData } from '../api/services/countries.services';
import { GetCountries } from '../interfaces/countries.interfaces';

export const useGetAllCountries = (params: string, termListen?: unknown) => {
  const [state, setState] = useState<GetCountries>({
    load: true,
    data: [],
  });

  useEffect(() => {
    getCountriesData(params)
      .then((result: AxiosResponse) => {
        setState({ load: false, data: result.data });
      })
      .catch((err: AxiosError) => {
        console.warn(err);
        setState({ ...state, load: false });
      });
  }, [termListen, params]);

  return state;
};
