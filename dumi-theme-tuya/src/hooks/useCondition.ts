import { useThemeConfig } from './useThemeConfig';
import { context } from 'dumi/theme';
import { useContext } from 'react';

export const useCondition = (
  condition: 'isCN' | 'isHome' | 'showSideMenu' | 'showSlugs' | 'showDevice',
) => {
  const { meta, locale } = useContext(context);
  const hasDemo = !!meta?.demo;
  const { demoUrl } = useThemeConfig();

  const isCN = locale && /^zh|cn$/i.test(locale);
  if (condition === 'isCN') {
    return locale && /^zh|cn$/i.test(locale);
  }

  const homeUrl = isCN ? `/` : `/${locale}`;
  const isHome = location.pathname === homeUrl;
  if (condition === 'isHome') {
    return isHome;
  }

  if (condition === 'showSideMenu') {
    const showSideMenu = meta.sidemenu !== false && !isHome && !meta.gapless;
    return showSideMenu;
  }

  let showDevice = !!(hasDemo && demoUrl);
  if (condition === 'showDevice') {
    return showDevice;
  }

  if (condition === 'showSlugs') {
    if (isHome) {
      return false;
    }
    if (showDevice) {
      return false;
    }
    const showSlugs =
      Boolean(meta.slugs?.length) &&
      (meta.toc === 'content' || meta.toc === undefined) &&
      !meta.gapless;
    return showSlugs;
  }
};
