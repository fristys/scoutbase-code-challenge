import React, { Fragment } from 'react';

export function CountryDetail({ country }) {
  return (
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
  );
}
