import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        overscroll-behavior-y: none;
        background-color: ${({ theme }) => theme.primaryBackgroundColor};
        color: ${({ theme }) => theme.primaryFontColor};
        font-family: "Plus Jakarta Sans", Arial, Helvetica, sans-serif;
        line-height: 1.75;
    }

    body.no-scroll {
        overflow: hidden;
    }

    ::placeholder {
        color: ${({ theme }) => theme.secondaryFontColor};
    }

    .dot {
        background-color: ${({ theme }) => theme.primaryFontColor};
    }

    html {
        height: 100%;
        font-size: 100%;
    }

    h1, h2, h3, h4, h5 {
        width: 100%;
        font-weight: bold;
        // line-height: 1.3;
    }

    h1 {
        font-size: 3.052rem;
    }

    h2 {
        font-size: 2.441rem;
    }

    h3 {
        font-size: 1.953rem;
    }

    h4 {
        font-size: 1.563rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    a {
        text-decoration: none;
    }

    li, a {
        font-size: 1rem;
    }

    input, textarea, button {
        font-family: "Plus Jakarta Sans", Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    @media screen and (max-width: 1024px) {
        /* Minor Third type scale */
        html {
            font-size: 100%; /* 16px */
        }

        h1 {
            font-size: 2.488rem;
        }

        h2 {
            font-size: 2.074rem;
        }

        h3 {
            font-size: 1.728rem;
        }

        h4 {
            font-size: 1.44rem;
        }

        h5 {
            font-size: 1.2rem;
        }

        a {
            text-decoration: none;
        }

        li {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 768px) {
        /* Major Second type scale */
        // html {
        //     font-size: 87.5%; /* 14px */
        // }

        h1 {
            font-size: 2.027rem;
        }

        h2 {
            font-size: 1.802rem;
        }

        h3 {
            font-size: 1.602rem;
        }

        h4 {
            font-size: 1.424rem;
        }

        h5 {
            font-size: 1.266rem;
        }

        a {
            text-decoration: none;
        }

        li {
            font-size: 1rem;
        }
    }

    /* Resume page theme styling */
    .resume-page-content a:hover {
        border-bottom: 1px solid ${({ theme }) => theme.primaryFontColor};
    }

    .resume-section-title {
        border-bottom: 1px solid ${({ theme }) => theme.primaryFontColor};
    }
`;
