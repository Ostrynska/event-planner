import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../Container/Container';
import { Section, Title, TitleWrapp } from './PageLayout.styled';

import { BtnBack } from '../Buttons/index';
import { SortByCategory, FilterByCategoty } from '../EventsActions/index';
import { BtnPrimary } from '../Buttons/index';

import { useTranslation } from 'react-i18next';

function PageLayout({
  children,
  title = 'Default page title',
  showBackButton = false,
}) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();
  return (
    <Section show={showBackButton ? 'true' : 'false'}>
      <Container>
        {showBackButton && <BtnBack onClick={() => window.history.back()} />}
        {isHomePage ? (
          <TitleWrapp>
            <Title show={showBackButton ? 'true' : 'false'}>{title}</Title>
            <div>
              <SortByCategory />
              <FilterByCategoty />
              <BtnPrimary
                icon
                text={t('main-add-event-btn')}
                to="/create-event"
              />
            </div>
          </TitleWrapp>
        ) : (
          <Title>{title}</Title>
        )}
        {children}
      </Container>
    </Section>
  );
}

export default PageLayout;
