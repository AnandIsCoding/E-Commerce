import { render, screen } from "@testing-library/react";
import Footer from '../components/Footer'
import React from "react";

describe("Footer Component", () => {
  
  test("should render the company name", () => {
    render(<Footer />);
    const companyName = screen.getByText(/आनंद Clothing/);
    expect(companyName).toBeInTheDocument();
  });

  test("should render the telephone number with correct icon", () => {
    render(<Footer />);
    const callText = screen.getByText(/Call: \+123 456 7890/);
    expect(callText).toBeInTheDocument();
  });

  test("should render 'Quick Links' section", () => {
    render(<Footer />);
    const quickLinksTitle = screen.getByText(/Quick Links/);
    expect(quickLinksTitle).toBeInTheDocument();
  });

  test("should render 'Customer Service' section", () => {
    render(<Footer />);
    const customerServiceTitle = screen.getByText(/Customer Service/);
    expect(customerServiceTitle).toBeInTheDocument();
  });

 
  test("should render social media links", () => {
    render(<Footer />);
    const instagramLink = screen.getByText(/Instagram/);
    const twitterLink = screen.getByText(/Twitter🌿/);
    
    expect(instagramLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
  });

  



});
