import * as C from '../index';
import * as S from './styles';

interface Props {
  isOpen: boolean;
  action: () => void;
}

const Switch = ({ isOpen, action }: Props) => {
  return (
    <S.Container>
      <C.Icon type="moon" className="switch-moon-icon" size={19}></C.Icon>
      <C.Icon type="sun" className="switch-sun-icon" size={19}></C.Icon>

      <S.Input id={`react-switch-new`} type="checkbox" onChange={action} />
      <S.Label htmlFor={`react-switch-new`}>
        <S.Toggle />
      </S.Label>
    </S.Container>
  );
};

export default Switch;
