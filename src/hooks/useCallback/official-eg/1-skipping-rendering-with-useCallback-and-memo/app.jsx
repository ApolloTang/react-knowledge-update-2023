import React from "react";

import {
  memo,
  useState,
} from 'react';
import { useState } from 'react';
import ProductPage from './ProductPage.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Dark mode <b>Changing theme will NOT trigger rending of ProductPage component</b>
      </label>
      <hr />
      <ProductPage
        referrerId="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </>
  );
}


export {
  App
}

