import { render, screen } from '@testing-library/react';
import Search from './Search';

const mockFn = jest.fn();

test('Should render search bar', () => {
    render(<Search searchText='Smith' setSearchText={mockFn}/>);

    screen.getByDisplayValue('Smith')
});
