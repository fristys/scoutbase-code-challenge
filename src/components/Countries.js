import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';
import { Country } from './Country';

import './Countries.scss';

export function Countries({ history }) {
  const { loading, error, data } = useQuery(gql`
    {
      countries {
        name
        code
        continent {
          name
        }
        languages {
          code
          native
          name
        }
      }
    }
  `);

  const countries = (error ? [] : data.countries);

  return (
    <div id="country-list">
      {loading ? <Loading /> : (error ? <ErrorMessage error={error} /> : countries.map(country => <Country history={history} country={country} />))}
    </div>
  );
}
