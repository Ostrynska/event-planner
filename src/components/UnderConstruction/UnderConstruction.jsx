import { useTranslation } from 'react-i18next';

import { Wrapper, Text, Image } from './UnderConstruction.styled';

import notFoundImage from '../../images/undraw_dev.svg';

const UnderConstruction = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Image src={notFoundImage} alt="Not Found" />
      <Text>{t('under-construction')}</Text>
    </Wrapper>
  );
};

export default UnderConstruction;
