import { render, screen } from '@testing-library/react';
import { CardGifs } from '../../components';

describe('Pruebas en <CardGifs />', () => {
  const title = 'Saytama';
  const url = 'https://localhost/algo.jpg';

  test('debe hacer match con el snaptshot', () => {
    const { container } = render(<CardGifs title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el url y el alt indicados', () => {
    render(<CardGifs title={title} url={url} />);
    // screen.debug();
    // console.log(screen.getByRole('img').alt);
    // expect(screen.getByRole('img').src).toBe(url);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe mostrar el prop title en el componente como texto', () => {
    render(<CardGifs title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
