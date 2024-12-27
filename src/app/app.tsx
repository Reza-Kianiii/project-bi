// import NxWelcome from './nx-welcome';
import { BankBalance } from '@bi/bank-balance';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MiniDrawer } from '@bi/MiniDrawer';
import { createTheme, ThemeProvider } from '@mui/material';
// import { UiDrawer } from '@bi/shared';

// import { UiDrawer } from '@bi/ui-drawer';

// import MiniDrawer from 'modules/shared/ui/ui-drawer/src/lib/ui-drawer';

const theme = createTheme({
  direction: 'rtl', // جهت پیش‌فرض
  typography: {
    fontFamily: 'Tahoma, Arial, sans-serif', // فونت مناسب برای RTL
  },
});

const router = createBrowserRouter(
  [
    {
      path: '/',
      Component: MiniDrawer,
      children: [
        {
          path: 'bank-balance',
          Component: BankBalance,
        },
      ],
    },
  ],
  { basename: `/bi/` }
);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  );
}

export default App;
