import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${theme.fonts.family};
    }

    body {
        min-height: 100vh;
        background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.tertiary} 100%);
    }

    #root {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
`; 