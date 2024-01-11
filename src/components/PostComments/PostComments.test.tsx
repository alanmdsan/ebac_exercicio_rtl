import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    })
    
    test('Deve verificar que dois comentários foram inseridos e exibidos corretamente', () => {
        render(<PostComment/>)
        
        const botao = screen.getByTestId('button-comentar')
        const textarea = screen.getByTestId('textarea-comentar')
        
        fireEvent.change(textarea, {
            target: {
                value: 'comentário 1'
            }
        })
        fireEvent.click(botao)

        fireEvent.change(textarea, {
            target: {
                value: 'comentário 2'
            }
        })
        fireEvent.click(botao)

        expect(screen.getByText('comentário 1')).toBeInTheDocument();
        expect(screen.getByText('comentário 2')).toBeInTheDocument();
    });
});