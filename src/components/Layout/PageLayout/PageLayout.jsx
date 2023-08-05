import { useLocation } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

import { Container } from '../../Container/Container';
import { BtnBack } from '../../Buttons/index';

import { Title, BtnsWrapp, Section, TitleWrapp } from './PageLayout.styled';

function PageLayout({ children, title, showBackButton = false, content }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  // const { t } = useTranslation();
  return (
    <main>
      <Section $show={showBackButton ? 'true' : 'false'}>
        <Container>
          {showBackButton && <BtnBack onClick={() => window.history.back()} />}
          {isHomePage ? (
            <TitleWrapp>
              {title === '' ? (
                <Title style={{ display: 'none' }}></Title>
              ) : (
                <Title $showtitle={showBackButton ? 'true' : 'false'}>
                  {title}
                </Title>
              )}

              <BtnsWrapp>{children}</BtnsWrapp>
            </TitleWrapp>
          ) : (
            <Title>{title}</Title>
          )}
          {content}
        </Container>
      </Section>
    </main>
  );
}

export default PageLayout;
