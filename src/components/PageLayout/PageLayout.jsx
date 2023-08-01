import React from 'react';
import { Container } from '../Container/Container';

import { Section, Title } from './PageLayout.styled';

function PageLayout({ children, title = 'Default page title' }) {
  return (
    <Section>
      <Container>
        {title ? <Title>{title}</Title> : null}
        {children}
      </Container>
    </Section>
  );
}

export default PageLayout;
