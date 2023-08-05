import { ButtonPrimary, IconAdd } from './Buttons.styled';

export const BtnPrimary = ({ text, icon = false, to = '' }) => {
  return icon === true ? (
    <ButtonPrimary to={to} type="submit">
      <IconAdd size={24} />
      <p>{text}</p>
    </ButtonPrimary>
  ) : (
    <ButtonPrimary type="submit">{text}</ButtonPrimary>
  );
};
