import React from 'react';
import { FaStar } from 'react-icons/fa';
import intl from 'react-intl-universal';

import { Container } from './styles';

export default function StarButton() {
  return (
    <Container
      target="_blank"
      rel="noreferrer noopener"
      href="https://github.com/adryansf/GitFolio"
    >
      <FaStar />

      <p>{intl.get('star')}</p>
    </Container>
  );
}
