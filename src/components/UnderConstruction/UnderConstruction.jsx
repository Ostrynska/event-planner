import { Wrapper, Text, Image } from './UnderConstruction.styled';

import notFoundImage from '../../images/undraw_dev.svg';

const UnderConstruction = () => {
  return (
    <Wrapper>
      <Image src={notFoundImage} alt="Not Found" />
      <Text>
        This page is currently Under Construction. Please check back soon.
      </Text>
    </Wrapper>
  );
};

export default UnderConstruction;
