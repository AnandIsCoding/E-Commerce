import { render, screen } from '@testing-library/react';
import Shimmer from '../components/Shimmer'
import { describe, it, expect } from 'vitest';
import React from 'react';

describe('Shimmer Component', () => {
  it('renders without crashing', () => {
    render(<Shimmer />);
    const shimmerDiv = screen.getByTestId('shimmercard'); // Check for any rendered div
    expect(shimmerDiv).toBeInTheDocument();
  });

  
});
