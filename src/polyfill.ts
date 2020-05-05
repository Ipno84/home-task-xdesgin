import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import IntlPolyfill from 'intl';
import areIntlLocalesSupported from 'intl-locales-supported';

const localesMyAppSupports: string[] = ['en'];

if (global.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else global.Intl = IntlPolyfill;
