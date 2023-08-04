import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../Container/Container';
// import { Section, Title, TitleWrapp, BtnsWrapp } from './PageLayout.styled';

import { BtnBack } from '../Buttons/index';
import { SortByCategory, FilterByCategoty } from '../FilterOptions/index';
import { BtnPrimary } from '../Buttons/index';

import { useTranslation } from 'react-i18next';

import { Title, BtnsWrapp, Section, TitleWrapp } from './PageLayout.styled';

function PageLayout({
  children,
  title = 'Default page title',
  showBackButton = false,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();
  return (
    <main>
      <Section $show={showBackButton ? 'true' : 'false'}>
        <Container>
          {showBackButton && <BtnBack onClick={() => window.history.back()} />}
          {isHomePage ? (
            <TitleWrapp>
              <Title $showtitle={showBackButton ? 'true' : 'false'}>
                {title}
              </Title>
              <BtnsWrapp>
                <FilterByCategoty />
                <SortByCategory />
                <BtnPrimary
                  icon={true}
                  text={t('main-add-event-btn')}
                  to="/create-event"
                />
              </BtnsWrapp>
            </TitleWrapp>
          ) : (
            <Title>{title}</Title>
          )}
          {children}
        </Container>
      </Section>
    </main>
  );
}

export default PageLayout;
