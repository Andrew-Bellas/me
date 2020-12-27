import { CssBaseline } from "@material-ui/core";
import { darkTheme, lightTheme } from '../theme';
import useDarkMode from "use-dark-mode";
import { ThemeProvider } from '@material-ui/core/styles';

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
    )
}