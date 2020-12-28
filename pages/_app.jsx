import { CssBaseline } from '@material-ui/core';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { darkTheme, lightTheme } from '../theme';

export default function MyApp({ Component }) {
  const { value: isDark } = useDarkMode(true);
  const themeConfig = isDark ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <Component />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
