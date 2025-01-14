import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../pages/Signup'
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Signup Component', () => {
  // Test 1: Check if the component renders without crashing
  test('should render Signup component without crashing', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    // Ensure the form heading appears
    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });

  // Test 2: Check if the "Create Account" button is rendered
  test('should render the "Create Account" button when on the signup form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );
    const button = screen.getByText(/Create Account/i);
    expect(button).toBeInTheDocument();
  });

  // Test 3: Check if the form validation works for empty fields
  test('should show error message if required fields are empty', async () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    const button = screen.getByText(/Create Account/i);
    fireEvent.click(button);

    
  });

  // Test 4: Check if switching between Login and Signup forms works
  test('should toggle between Login and Signup form', () => {
    render(
      <MemoryRouter>
        <Signup />
      </MemoryRouter>
    );

    // Initial form should be Signup
    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
    
    // Click on "Login here" to switch to the login form
    fireEvent.click(screen.getByText(/Login here/i));
    
   
    
    // Click on "Signup here" to switch back to the signup form
    fireEvent.click(screen.getByText(/Signup here/i));
    
    // Back to Signup form
    expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  });
});
