import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home';
import appStore from '../redux/appStore'
import React from 'react';
const renderWithProviders = (component) => {
  return render(
    <Provider store={appStore}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  );
};

describe('Home Component', () => {

  it('renders the Home component without crashing', () => {
    renderWithProviders(<Home />);
    expect(screen.getByPlaceholderText('Search products')).toBeInTheDocument();
    expect(screen.getByText('Clearance Up To 20% Off')).toBeInTheDocument();
  });

  
});
