import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import { profileListMock } from '../../mocks';

const mockFn = jest.fn();

test('Should render a list of characters', () => {
    render(<CharacterList characters={profileListMock} loading={false} handleClick={mockFn}/>);

    screen.getAllByRole('img');
    screen.getAllByRole('heading', { level: 3 });
});
