import { ButtonBack, Icon } from './Buttons.styled';

export const BtnBack = ({ onClick }) => {
  return (
    <ButtonBack onClick={onClick}>
      <Icon size={24} />
      Back
    </ButtonBack>
  );
};
