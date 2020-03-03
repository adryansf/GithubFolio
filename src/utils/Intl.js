import intl from 'react-intl-universal';
import { useSelector } from 'react-redux';

// Locales
import locales from '~/locales';

export default function Intl() {
  const currentLocale = useSelector(state => state.language);
  return intl.init({ currentLocale, locales });
}
