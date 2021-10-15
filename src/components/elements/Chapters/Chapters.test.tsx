import { render, screen } from '@testing-library/react';
import Chapters from './Chapters';
import { episodeList } from '../../../mocks';

test('Should render name of chapters the character is featured in', () => {
    render(<Chapters episodeList={episodeList}/>);

    screen.getByText('Pilot');
    screen.getByText('Raising Gazorpazorp');
    screen.getByText('Ricksy Business');
});
