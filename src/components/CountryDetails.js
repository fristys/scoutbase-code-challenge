import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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
            {
                !loading && !error ? (
                    <Fragment>
                        <h2>{country.name}</h2>
                        <div className="currency">
                            <div className="label">Currency</div>
                            {country.currency || 'None'}
                        </div>

                        <div className="phone">
                            <div className="label">Phone code</div>
                            +{country.phone || '000'}
                        </div>
                    </Fragment>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}