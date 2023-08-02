import { ButtonPtimary, IconAdd } from './Buttons.styled';

export const BtnPrimary = ({ text, icon = false, to = '' }) => {
  return icon === true ? (
    <ButtonPtimary to={to}>
      <IconAdd size={24} />
      {text}
    </ButtonPtimary>
  ) : (
    <ButtonPtimary>{text}</ButtonPtimary>
  );
};
