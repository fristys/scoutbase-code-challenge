import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';
import { CountryDetail } from './CountryDetail';

import './CountryDetails.scss';

export function CountryDetails({ match }) {
  const { loading, error, data } = useQuery(gql`
    {
        country(code: "${match.params.code}") {
            name
            code
            phone
            currency
        }
    }
  `);

  const country = (error ? null : data.country);

  return (
    <div id="country-details">
      {loading ? <Loading /> : (error ? <ErrorMessage error={error} /> : <CountryDetail country={country} />)}
    </div>
  );
}
