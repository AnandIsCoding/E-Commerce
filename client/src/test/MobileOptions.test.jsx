import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest'; // Mocking library
import { useNavigate } from 'react-router-dom';
import MobileOption from '../components/MobileOption'; 
import React from 'react';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'), // Keep the actual imports
  useNavigate: vi.fn(), // Mock useNavigate
}));

describe('MobileOption Component', () => {
  it('should navigate to home when "Home" button is clicked', () => {
    const navigate = vi.fn(); // Mock function
    useNavigate.mockReturnValue(navigate); // Return mocked navigate function

    const { getByLabelText } = render(<MobileOption />);

    const homeButton = getByLabelText('Home');
    fireEvent.click(homeButton);

    expect(navigate).toHaveBeenCalledWith('/'); // Check if navigate was called correctly
  });
});
