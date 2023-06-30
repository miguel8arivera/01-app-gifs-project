import { fireEvent, render, screen } from '@testing-library/react';
import { SearchInput } from '../../components';
describe('Hacer pruebas en <SearchInput />', () => {
  test('debe cambiar el valor de la caja de texto', () => {
    render(<SearchInput onNewCategory={() => {}} />);
    // screen.debug(); sirve para ver el html que se esta renderizando
    //para buscar un elemento de la pantalla se usa getByRole y se le pasa el rol del elemento como el input
    const input = screen.getByRole('searchbox');
    //para disparar un evento se usa fireEvent
    fireEvent.input(input, { target: { value: 'Saytama' } });
    expect(input.value).toBe('Saytama');
  });

  test('debe llamar a onNewCategory si  el input tiene un valor', () => {
    const inputValue = 'Saytama';
    const onNewCategory = jest.fn();
    render(<SearchInput onNewCategory={onNewCategory} />);
    screen.debug();

    const input = screen.getByRole('searchbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe llamar el onNewCategory si el input esta vacio', () => {
    const onNewCategory = jest.fn();
    render(<SearchInput onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');

    fireEvent.submit(form);
    screen.debug();

    expect(onNewCategory).not.toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(0);
  });
});
