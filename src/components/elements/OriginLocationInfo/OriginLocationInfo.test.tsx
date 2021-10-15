import { render, screen } from '@testing-library/react';
import OriginLocationInfo from './OriginLocationInfo';
import { originLocationMock } from '../../../mocks';

test('Should render origin and location information', () => {
    render(<OriginLocationInfo originLocation={originLocationMock}/>);

    screen.getByText(/name/i);
    screen.getByText(/type/i);
    screen.getByText(/dimension/i);
    screen.getByText(/amount of residents/i);
    screen.getByText(/created/i);
});
