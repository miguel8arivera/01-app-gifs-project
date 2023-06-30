import { render } from '@testing-library/react';
import { CardGifs } from '../../components';

describe('Pruebas en <CardGifs />', () => {
  const title = 'Saytama';
  const url = 'https://localhost/algo.jpg';

  test('debe hacer match con el snaptshot', () => {
    const { container } = render(<CardGifs title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
