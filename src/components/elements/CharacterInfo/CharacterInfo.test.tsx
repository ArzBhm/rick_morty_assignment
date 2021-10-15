import { render, screen } from '@testing-library/react';
import CharacterInfo from './CharacterInfo';
import { characterMock } from '../../../mocks';

test('Should render character information', () => {
    render(<CharacterInfo character={characterMock}/>);

    screen.getAllByText(/name/i);
    screen.getAllByText(/created/i);
    screen.getAllByText(/type/i);
    screen.getAllByText(/status/i);
    screen.getAllByText(/gender/i);
    screen.getAllByText(/species/i);
    screen.getAllByText(/location/i);
    screen.getAllByText(/origin/i);
});
