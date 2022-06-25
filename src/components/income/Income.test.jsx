import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Income from './Income';

test('loads and displays greeting', async () => {
    render(<Income />)

    fireEvent.click(screen.getByText('ADD'));

    expect(screen.getByText('ADD')).not.toBeDisabled()
})