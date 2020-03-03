import React from 'react';
import intl from 'react-intl-universal';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <a
        href="https://github.com/adryansf"
        target="_blank"
        rel="noopener noreferrer"
      >
        {intl.get('creator')}
      </a>
    </Container>
  );
}
