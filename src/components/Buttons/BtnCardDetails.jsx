import { ButtonCardDetails } from './Buttons.styled';

export const BtnCardDetails = ({ text, to = '', solid = true }) => {
  return solid === true ? (
    <ButtonCardDetails to={to} type="submit" $solid>
      {text}
    </ButtonCardDetails>
  ) : (
    <ButtonCardDetails to={to} type="button" $border>
      {text}
    </ButtonCardDetails>
  );
};
