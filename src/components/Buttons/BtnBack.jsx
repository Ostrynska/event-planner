import { ButtonBack, Icon } from './Buttons.styled';

export const BtnBack = ({ onClick }) => {
  return (
    <ButtonBack onClick={onClick} type="button">
      <Icon size={24} />
      Back
    </ButtonBack>
  );
};
