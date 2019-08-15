import React from 'react';

import './Home.scss';

export function Home() {
    return (
        <div id="home-page">
            <h2>Front-end task of Code Challenge for Scoutbase</h2>

            <p>This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries.</p>

            <p>If you’re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API.</p>

            <p>Preferred libraries:</p>

            <ol>
                <li>`styled-components` for styling</li>
                <li>`apollo-client` for consuming GraphQL API</li>
                <li>`react-router` or any alternative to implement routing</li>
            </ol>

            <p>Instructions:</p>
            
            <ol>
                <li>Create a `create-react-app` repo.</li>
                <li>
                    Add a router with routes:
                    <ul>
                        <li>`/` - for displaying basic links for the other routes</li>
                        <li>`/countries` - for requesting GraphQL API and rendering the list</li>
                        <li>`/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent</li>
                    </ul>
                </li>
                <li>Design is totally by you.</li>
                <li>Countries list at `/countries` must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in.</li>
                <li>`/countries/(:code)` must render the currency and a area code (phone) of that country.</li>
                <li>Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example.</li>
                <li>End.</li>
            </ol>
        </div>
    );
}