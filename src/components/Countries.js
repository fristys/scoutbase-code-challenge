import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

    const goToCountry = code => history.push(`/countries/${code}`);

    const countries = (error ? [] : data.countries);

    return (
        <div id="country-list">
            {
                !loading && !error ? (
                    <Fragment>
                        {
                            countries.map(country => (
                                <div className="country" onClick={e => goToCountry(country.code)}>
                                    <div className="code">{country.code}</div>
                                    <div className="name">{country.name} ({country.continent.name})</div>
                                    <div className="languages">
                                        {
                                            country.languages.map(language => (`${language.native} (${language.name})`)).join(', ')
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </Fragment>
                ) : (
                    <div>Loading...</div>
                )
            }
        </div>
    );
}