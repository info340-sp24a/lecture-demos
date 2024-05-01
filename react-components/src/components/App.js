import React from 'react';

import { PageHeader } from './Header.js';
import { CardList } from './LanguageCards.js';

export default function App(props) {

  const array = [
    <p>hello</p>,
    <p>goodbye</p>,
    <p>cheers</p>
  ];

  return (
    <div className="container">
      <PageHeader />
      <p>other stuff</p>
      <CardList />
    </div>
  )
}







