import React from 'react';
import { shallow } from 'enzyme';

import { Country } from './Country';

const mockData = {
  history: {
    push: location => location
  },

  country: {
    name: 'Andorra',
    code: 'AD',
    continent: { name: 'Europe', __typename: 'Continent' },
    languages: [
      { code: 'ca', native: 'Català', name: 'Catalan', __typename: 'Language' }
    ],
    __typename: 'Country'
  }
};

describe('Country component', () => {
  it('Renders without crashing', () => {
    const { history, country } = mockData,
      cmp = shallow(<Country history={history} country={country} />);

    expect(cmp).toMatchSnapshot();
  });

  it('Shows country code', () => {
    const { history, country } = mockData,
      cmp = shallow(<Country history={history} country={country} />),
      code = <div className="code">{country.code}</div>;

    expect(cmp.contains(code)).toEqual(true);
  });

  it('Shows country name', () => {
    const { history, country } = mockData,
      cmp = shallow(<Country history={history} country={country} />),
      name = (
        <div className="name">
          {country.name} ({country.continent.name})
        </div>
      );

    expect(cmp.contains(name)).toEqual(true);
  });

  it('Shows country languages', () => {
    const { history, country } = mockData,
      cmp = shallow(<Country history={history} country={country} />),
      languages = (
        <div className="languages">
          {country.languages
            .map(language => `${language.native} (${language.name})`)
            .join(', ')}
        </div>
      );

    expect(cmp.contains(languages)).toEqual(true);
  });
});
