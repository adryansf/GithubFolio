import locales from '~/locales/index';

const INITIAL_STATE = locales[navigator.language]
  ? navigator.language
  : 'en-US';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'en-US':
      return 'en-US';

    case 'pt-BR':
      return 'pt-BR';

    default:
      return state;
  }
}
