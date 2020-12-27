import { CssBaseline } from '@material-ui/core';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from '@material-ui/core/styles';
import { darkTheme, lightTheme } from '../theme';

export default function MyApp({ Component, pageProps }) {
  const { value: isDark } = useDarkMode(true);
  const themeConfig = isDark ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
