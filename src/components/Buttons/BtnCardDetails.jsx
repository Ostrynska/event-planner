import { ButtonCardDetails, ButtonCardDetailsBorder } from './Buttons.styled';
import { Link } from 'react-router-dom';

export const BtnCardDetails = ({ text }) => {
  return <ButtonCardDetails type="submit">{text}</ButtonCardDetails>;
};

export const BtnCardDetailsBorder = ({ text, to = '' }) => {
  return (
    <Link to={to}>
      <ButtonCardDetailsBorder>{text}</ButtonCardDetailsBorder>
    </Link>
  );
};
