import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { RouteContext } from '@/Hooks/useRoute';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
// import { NextUIProvider } from '@nextui-org/react';
import { Button, createTheme, styled } from '@nextui-org/react';

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Desa';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name =>
    resolvePageComponent(
      `./Pages/${name}.tsx`,
      import.meta.glob('./Pages/**/*.tsx'),
    ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    return root.render(
      <RouteContext.Provider value={(window as any).route}>
        {/* <NextUIProvider> */}
        <App {...props} />
        {/* </NextUIProvider> */}
      </RouteContext.Provider>,
    );
  },
});

InertiaProgress.init({ color: '#4B5563' });
