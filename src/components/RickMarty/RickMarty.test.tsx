import ReactDOM from 'react-dom';
import RickMorty from './RickMorty';

describe('Rick and Marty API', () => {

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<RickMorty />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

it('Renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input');
    expect(inputs).toHaveLength(1);
    expect(inputs[0].type).toBe('text');

    const label = container.querySelector('img');
    expect(label).toBeDefined();

});

})