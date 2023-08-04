import { ButtonCard } from './Buttons.styled';

export const BtnCard = ({ to = '', text = '' }) => {
  return <ButtonCard to={to}>{text}</ButtonCard>;
};
