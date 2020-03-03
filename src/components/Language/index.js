import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Language Actions
import { setLanguage } from '~/store/modules/language/actions';

// All Languages
import { langs } from '~/locales/index';

import { Container } from './styles';

export default function Language() {
  const dispatch = useDispatch();
  const currentLang = useSelector(state => state.language);

  function handleSubmit(lang) {
    dispatch(setLanguage(lang));
  }

  function renderItem(lang, langID) {
    return (
      <button
        key={langID}
        type="button"
        className={currentLang === langID ? 'active' : ''}
        onClick={() => handleSubmit(langID)}
      >
        {lang}
      </button>
    );
  }
  return (
    <Container className="language">
      {langs.map(lang => renderItem(lang[0], lang[1]))}
    </Container>
  );
}
