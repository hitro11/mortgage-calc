import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// test for initial values when go button pressed

test('down payment populated when go button pressed', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    fireEvent.click(btn);
    expect(screen.getByDisplayValue('1907')).toBeInTheDocument();
});

test('total mortgage populated when go button pressed', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    fireEvent.click(btn);
    expect(screen.getByDisplayValue('50000')).toBeInTheDocument();
});

test('monthly payment populated when go button pressed', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    fireEvent.click(btn);
    expect(screen.getByDisplayValue('450000')).toBeInTheDocument();
});

test('Amortization period populated when go button pressed', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    fireEvent.click(btn);
    expect(screen.getByDisplayValue('25 years')).toBeInTheDocument();
});

test('Rate populated when go button pressed', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    fireEvent.click(btn);
    expect(screen.getByDisplayValue('2.00')).toBeInTheDocument();
});


// test changing values

test('changing principal changes other values', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    const principal = screen.getByTestId('principal');
    const dpDollar = screen.getByTestId('dp-dollar');
    const dpPercent = screen.getByTestId('dp-percent');
    const totalMort = screen.getByTestId('total-mort')
    const totalPayment = screen.getByTestId('total-payment');
    fireEvent.click(btn);
    fireEvent.change(principal, {target: {value: '100000'}});
    expect(totalPayment).toHaveValue('1801');
    expect(dpDollar).toHaveValue('75000');
});

test('changing down payment percent changes other values', () => {
    render(<App />);
    const btn = screen.getByText(/go/i);
    const dpPercent = screen.getByTestId('dp-percent');
    const dpDollar = screen.getByTestId('dp-dollar');
    const totalPayment = screen.getByTestId('total-payment');
    fireEvent.click(btn);
    fireEvent.change(dpPercent, {target: {value: '15.00'}});
    expect(totalPayment).toHaveValue('1801');
    expect(dpDollar).toHaveValue('75000');
});