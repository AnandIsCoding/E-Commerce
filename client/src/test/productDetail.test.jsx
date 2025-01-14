import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from '../pages/ProductDetail';
import { Provider } from 'react-redux';
import appStore from '../redux/appStore';
import React from 'react';

describe('ProductDetail Component', () => {
  test('should render the ProductDetail component without crashing', async () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter initialEntries={['/product/1']}>
          <Routes>
            <Route path="product/:id" element={<ProductDetail />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

  });
});
