import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

const mockFn = jest.fn();

test('Should render pagination', () => {
    render(<Pagination loading={false} prevPage={mockFn} nextPage={mockFn}/>);

    screen.getByText('Previouse');
    screen.getByText('Next');
});
