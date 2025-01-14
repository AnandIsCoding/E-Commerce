import {  render, screen } from '@testing-library/react';
import Carousel from '../components/Carousel';
import data from '../utils/CarouselData.json';
import { expect, test } from 'vitest';
import React from 'react';

test('should render carousel component with image', () => {
  render(<Carousel />);

  // Get the image element
  const image = screen.getByRole('img');

  // Check if the image is in the document
  expect(image).toBeInTheDocument();

  // Check if the image has the correct source
  expect(image).toHaveAttribute('src', data[0].url);
});


test('should display the first image initially', () => {
  render(<Carousel />);

  // Get the first image element
  const firstImage = screen.getAllByRole('img')[0];

  // Check if the first image source matches the data[0].url, means first image from the dataset
  expect(firstImage).toHaveAttribute('src', data[0].url);
});


test('should display the correct alt text for each image', () => {
  render(<Carousel />);

  // Get all images
  const images = screen.getAllByRole('img');

  // Check that the alt text matches for each image
  images.forEach((image, index) => {
    expect(image).toHaveAttribute('alt', `carousel_image_${index}`);
  });
});





