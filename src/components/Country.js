import React from 'react';

export function Country({ history, country }) {
  const goToCountry = code => history.push(`/countries/${code}`);

  return (
    <div className="country" onClick={() => goToCountry(country.code)}>
      <div className="code">{country.code}</div>

      <div className="name">
        {country.name} ({country.continent.name})
      </div>

      <div className="languages">
        {country.languages.map(language => `${language.native} (${language.name})`).join(', ')}
      </div>
    </div>
  );
}
