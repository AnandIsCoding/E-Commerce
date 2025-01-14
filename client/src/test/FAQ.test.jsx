import { fireEvent, render, screen } from '@testing-library/react';
import { FAQdata } from '../utils/faqData';
import { expect, test } from 'vitest';
import React from 'react';
import FAQs from '../components/FAQs'

test('should render FAQ titles correctly', () => {
    render(<FAQs />);
  
    // Check if all FAQ titles are rendered
    FAQdata.forEach(item => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
  

  test("renders FAQ titles correctly", () => {
    render(<FAQs />);
    
    // Check if the FAQ titles are displayed
    expect(screen.getByText(/What is your return policy\?/)).toBeInTheDocument();
    expect(screen.getByText(/Do you offer free shipping\?/)).toBeInTheDocument();
    expect(screen.getByText(/How can I track my order\?/)).toBeInTheDocument();
    expect(screen.getByText(/What payment methods do you accept\?/)).toBeInTheDocument();
    expect(screen.getByText(/Is my personal info secure/)).toBeInTheDocument();
  });


  test("first FAQ item is open initially", () => {
    render(<FAQs />);
    
    // Check if the description of the first FAQ is visible
    expect(screen.getByText(/We accept returns within 30 days of purchase/)).toBeInTheDocument();
  });

  

 
  
  
  