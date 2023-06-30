import { render, screen } from '@testing-library/react';
import { TableImage } from '../../components';
import useFetchGifs from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Test en el componente <TableImage />', () => {
  const category = 'One Punch';
  test('debe mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<TableImage category={category} />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText(category));
  });

  test('debe mostrar items cuando se cargan imagenes useFetchGigs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<TableImage category={category} />);

    expect(screen.getAllByRole('img').length).toBe(gifs.length);
  });
});
