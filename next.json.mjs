'use strict';

import _siteNavigation from './navigation.json' assert { type: 'json' };
import _siteRedirects from './redirects.json' assert { type: 'json' };
import _siteConfig from './site.json' assert { type: 'json' };

/** @type {Record<string, import('./types').NavigationEntry>} */
export const siteNavigation = _siteNavigation;

/** @type {Record<string, import('./types').Redirect[]>} */
export const siteRedirects = _siteRedirects;

/** @type {import('./types').SiteConfig} */
export const siteConfig = _siteConfig;
