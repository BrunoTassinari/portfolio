import * as S from './styles';
import * as C from '../index';

interface Props {
  action: () => void;
  isOpen: boolean;
}

const HamburguerButton = ({ isOpen, action }: Props) => {
  return (
    <S.HamburguerButton aria-expanded={isOpen} onClick={action} isOpen={isOpen}>
      <span className="bar large"></span>
      <span className="bar medium"></span>
      <span className="bar small"></span>
      <C.VisuallyHidden aria-live="polite">
        {isOpen ? 'Fechar menu' : 'Abrir menu'}
      </C.VisuallyHidden>
    </S.HamburguerButton>
  );
};

export default HamburguerButton;
