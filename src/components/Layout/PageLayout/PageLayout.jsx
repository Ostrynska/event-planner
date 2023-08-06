import { Container } from '../../Container/Container';
import { BtnBack } from '../../Buttons/index';

import {
  Title,
  TitleHome,
  BtnsWrapp,
  Section,
  TitleWrapp,
} from './PageLayout.styled';

function PageLayout({ children, title, showBackButton = false, content }) {
  return (
    <main>
      <Section $show={showBackButton}>
        <Container>
          {showBackButton ? (
            <>
              <BtnBack onClick={() => window.history.back()} />
              <Title>{title}</Title>
            </>
          ) : (
            <TitleWrapp>
              <TitleHome>{title}</TitleHome>
              <BtnsWrapp>{children}</BtnsWrapp>
            </TitleWrapp>
          )}
          {content}
        </Container>
      </Section>
    </main>
  );
}

export default PageLayout;
