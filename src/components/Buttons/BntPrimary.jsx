import { ButtonPrimary, IconAdd } from './Buttons.styled';

export const BtnPrimary = ({ text, icon = false, to = '' }) => {
  return icon === true ? (
    <ButtonPrimary to={to}>
      <IconAdd size={24} />
      <p>{text}</p>
    </ButtonPrimary>
  ) : (
    <ButtonPrimary>{text}</ButtonPrimary>
  );
};
