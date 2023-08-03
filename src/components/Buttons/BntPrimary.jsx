import { ButtonPrimary, IconAdd } from './Buttons.styled';

export const BtnPrimary = ({ text, icon = false, to = '' }) => {
  return icon === true ? (
    <ButtonPrimary>
      <IconAdd size={24} />
      {text}
    </ButtonPrimary>
  ) : (
    <ButtonPrimary>{text}</ButtonPrimary>
  );
};
