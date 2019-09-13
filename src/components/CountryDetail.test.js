import React from 'react';
import { shallow } from 'enzyme';

import { CountryDetail } from './CountryDetail';

const mockData = {
  country: {
    name: 'Andorra',
    code: null,
    phone: '376',
    currency: 'EUR',
    __typename: 'Country'
  }
};

describe('CountryDetail component', () => {
  it('Renders without crashing', () => {
    const { country } = mockData,
      cmp = shallow(<CountryDetail country={country} />);

    expect(cmp).toMatchSnapshot();
  });

  it('Shows country name', () => {
    const { country } = mockData,
      cmp = shallow(<CountryDetail country={country} />),
      name = <h2>{country.name}</h2>;

    expect(cmp.contains(name)).toEqual(true);
  });

  it('Shows country currency', () => {
    const { country } = mockData,
      cmp = shallow(<CountryDetail country={country} />),
      currency = (
        <div className="currency">
          <div className="label">Currency</div>
          {country.currency || 'None'}
        </div>
      );

    expect(cmp.contains(currency)).toEqual(true);
  });

  it('Handles lacking country currency', () => {
    const { country } = mockData,
      lackingCountry = { ...country, currency: null },
      cmp = shallow(<CountryDetail country={lackingCountry} />),
      currency = (
        <div className="currency">
          <div className="label">Currency</div>
          None
        </div>
      );

    expect(cmp.contains(currency)).toEqual(true);
  });

  it('Shows country phone code', () => {
    const { country } = mockData,
      cmp = shallow(<CountryDetail country={country} />),
      code = (
        <div className="phone">
          <div className="label">Phone code</div>
          +{country.phone || '000'}
        </div>
      );

    expect(cmp.contains(code)).toEqual(true);
  });

  it('Handles lacking country phone code', () => {
    const { country } = mockData,
      lackingCountry = { ...country, phone: null },
      cmp = shallow(<CountryDetail country={lackingCountry} />),
      code = (
        <div className="phone">
          <div className="label">Phone code</div>
          +000
        </div>
      );

    expect(cmp.contains(code)).toEqual(true);
  });
});
