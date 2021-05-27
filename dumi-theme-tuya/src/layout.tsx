import './style/layout.less';

import { context } from 'dumi/theme';
import React, { useContext, useEffect, useMemo, useState } from 'react';

import { IRouteComponentProps } from '@umijs/types';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SideMenu from './components/SideMenu';
import SlugsList from './components/SlugList';
import { CodeContext, WriteAbleCtx } from './context';
import { useCondition } from './hooks';
import { Renderer } from './pages';
import { Home } from './pages/home';
import axios from 'axios';

const Layout: React.FC<IRouteComponentProps> = ({ children, location }) => {
  const {
    config: {
      mode,
      theme: { apiData },
    },
    meta,
    menu,
  } = useContext(context);
  const isHome = useCondition('isHome');
  const showSideMenu = useCondition('showSideMenu');
  const showSlugs = useCondition('showSlugs');

  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(true);

  const [ctxValues, setCtxValues] = useState<WriteAbleCtx>({
    themes: [],
    currentTheme: null,
    apiData: {},
  });

  useEffect(() => {
    axios
      .get(apiData)
      .then(res => setCtxValues({ ...ctxValues, apiData: res.data }));
  }, []);

  const linkMap = useMemo(() => {
    const stack = Array.isArray(menu) ? menu.slice() : [];
    const map: { [title: string]: any } = {};
    while (stack.length) {
      const current = stack.pop();
      if (Array.isArray(current.children)) {
        stack.push(...current.children);
      }
      map[current.title.split(' ')[0]] = current;
      map[current.title] = current;
    }
    return map;
  }, [menu]);

  return (
    <CodeContext.Provider
      value={{
        ...ctxValues,
        linkMap,
        update: args => setCtxValues({ ...ctxValues, ...args }),
      }}
    >
      <div
        className="__dumi-default-layout"
        data-route={location.pathname}
        data-show-sidemenu={String(showSideMenu)}
        data-show-slugs={String(showSlugs)}
        data-site-mode={mode === 'site'}
        data-gapless={String(!!meta.gapless)}
        data-use-bg={!!meta.background}
        onClick={() => {
          if (menuCollapsed) return;
          setMenuCollapsed(true);
        }}
        style={{
          backgroundImage: `url(${meta.background})`,
          paddingBottom: isHome ? 198 : 50,
        }}
      >
        {/* 顶部导航渲染 */}
        <Navbar
          isHome={isHome}
          location={location}
          navPrefix={<SearchBar />}
          onMobileMenuClick={ev => {
            setMenuCollapsed(val => !val);
            ev.stopPropagation();
          }}
        />
        {showSlugs && (
          <SlugsList slugs={meta.slugs} className="__dumi-default-layout-toc" />
        )}
        {/* 侧边栏渲染 */}
        {showSideMenu && (
          <SideMenu mobileMenuCollapsed={menuCollapsed} location={location} />
        )}
        {/* 页面渲染 */}
        {isHome ? <Home content={children} /> : <Renderer content={children} />}
      </div>
    </CodeContext.Provider>
  );
};

export default Layout;
