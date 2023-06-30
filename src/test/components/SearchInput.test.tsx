import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../../components';
describe('Hacer pruebas en <SearchInput />', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    render(<SearchInput onNewCategory={() => {}} />);
    screen.debug();
    //para buscar un elemento de la pantalla se usa getByRole y se le pasa el rol del elemento como el input
    const input = screen.getByRole('searchbox');
    //para disparar un evento se usa fireEvent
    fireEvent.input(input, { target: { value: 'Saytama' } });
    expect(input.value).toBe('Saytama');
  });
});
