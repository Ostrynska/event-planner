import { useTranslation } from 'react-i18next';

import { ButtonBack, Icon } from './Buttons.styled';

export const BtnBack = ({ onClick }) => {
  const { t } = useTranslation();
  return (
    <ButtonBack onClick={onClick} type="button">
      <Icon size={24} />
      {t('btn-back')}
    </ButtonBack>
  );
};
