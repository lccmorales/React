import { fireEvent, render, screen } from '@testing-library/react';
import { AddForm } from '../../src/components';

describe('Pruebas en <AddForm />', () => {
    const inputSearchValue = 'Saitama';
    const inputAmountValue = '5';

    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddForm onNewForm={ () => {} } />);
        const search = screen.getByRole('textbox', { name: 'txtSearch' });
        fireEvent.input( search, { target: { value: inputSearchValue} } );
        expect( search.value ).toBe( inputSearchValue )
        // screen.debug();
    });

    test('debe de llamar onNewForm si el input tiene un valor', () => {
        const onNewForm = jest.fn();
        render(<AddForm onNewForm={ onNewForm } />);
        const search = screen.getByRole('textbox', { name: 'txtSearch' });
        const amount = screen.getByRole('spinbutton', { name: 'txtAmount' });
        const form = screen.getByRole('form');
        fireEvent.input( search, { target: { value: inputSearchValue} } );
        fireEvent.input( amount, { target: { value: inputAmountValue} } );
        fireEvent.submit( form );
        expect( search.value ).toBe('');
        expect( onNewForm ).toHaveBeenCalled();
        expect( onNewForm ).toHaveBeenCalledTimes(1);
        expect( onNewForm ).toHaveBeenCalledWith( inputSearchValue, inputAmountValue );
        // screen.debug();
    });

    test('no debe de llamar onNewForm si los inputs están vaciós', () => {
        const onNewForm = jest.fn();
        render(<AddForm onNewForm={ onNewForm } />);
        const search = screen.getByRole('textbox', { name: 'txtSearch' });
        const amount = screen.getByRole('spinbutton', { name: 'txtAmount' });
        const form = screen.getByRole('form');
        fireEvent.input( search, { target: { value: inputSearchValue} } );
        fireEvent.input( amount, { target: { value: ''} } );
        fireEvent.submit( form );
        // usar cualquiera de los dos
        expect( onNewForm ).toHaveBeenCalledTimes(0);
        // expect( onNewForm ).not.toHaveBeenCalled();
        // screen.debug();
    })
});