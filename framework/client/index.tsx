import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '../../src/components/App';
import { startMswClient } from '../mock-server/client';
import { initializeCache } from '../../src/utils/caching-fetch-library/cachingFetch';

declare global {
  interface Window {
    __INITIAL_DATA__: string | undefined;
  }
}

const startClient = async () => {
  await startMswClient();

  // If there is initial data, use it to initialize the cache, then clean up
  if (typeof window.__INITIAL_DATA__ === 'string') {
    initializeCache(window.__INITIAL_DATA__);
    delete window.__INITIAL_DATA__;
  }

  const domNode = document.getElementById('root');
  if (!domNode) throw new Error('No app element found');
  hydrateRoot(domNode, <App />);
};
startClient();
