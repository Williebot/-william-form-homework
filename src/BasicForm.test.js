import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicForm from './BasicForm'; // Update the import path to where your component is

describe('BasicForm', () => {
  test('renders Sign Up Sheet heading', () => {
    render(<BasicForm />);
    expect(screen.getByText(/Sign Up Sheet/i)).toBeInTheDocument();
  });

  test('renders input fields', () => {
    render(<BasicForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<BasicForm />);
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });