import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './routers'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={routerConfig} />
    </MantineProvider>
  </React.StrictMode>,
)
