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

    .tooltip-container .custom-tooltip {
        font-size: .8rem;
        line-height: normal;
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

    .contact-info a {
        color: ${({ theme }) => theme.primaryFontColor};
    }

    .resume-section-title {
        border-bottom: 1px solid ${({ theme }) => theme.primaryFontColor};
    }

    /* Login page theme styling */
    .login-page {
        &__login-container {
            border: 1px solid ${({ theme }) => theme.lineColor};
        }

        &__input {
            border: 1px solid ${({ theme }) => theme.lineColor};
            background-color: ${({ theme }) => theme.primaryBackgroundColor};
            color: ${({ theme }) => theme.primaryFontColor};

            &:focus {
                border-color: ${({ theme }) => theme.accentColor};
            }
        }

        &__submit-button {
            color: ${({ theme }) => theme.primaryBackgroundColor};
            background-color: ${({ theme }) => theme.accentColor};
        }
    }

    /* Blog page styling */
    .blog-page {
        input {
            border-color: transparent;
            background-color: ${({ theme }) => theme.primaryBackgroundColor};
            color: ${({ theme }) => theme.primaryFontColor};
        }

        a {
            color: ${({ theme }) => theme.primaryFontColor};
        }

        &__icon {
            color: ${({ theme }) => theme.primaryFontColor};
        }

        &__search-bar,
        &__email-updates-input-container {
            border: 1px solid ${({ theme }) => theme.lineColor};
        }

        @media screen and (max-width: 980px) {
            .blog-page {
                &__side-menu-container {
                    border-bottom: 1px solid ${({ theme }) => theme.lineColor};
                }
            } 
        }
    }

    .create-post-page {
        input, textarea {
            color: ${({ theme }) => theme.primaryFontColor};
            background-color: ${({ theme }) => theme.primaryBackgroundColor};
            border: 1px solid ${({ theme }) => theme.lineColor};
        }
    }

    .text-editor {
        &__num-words {
            color: ${({ theme }) => theme.secondaryFontColor};
        }        

        &__action-button {
            border: 1px solid ${({ theme }) => theme.accentColor};
            background-color: ${({ theme }) => theme.primaryBackgroundColor};
            color: ${({ theme }) => theme.accentColor};

            &:hover {
                background-color: ${({ theme }) => theme.accentColor};
                color: ${({ theme }) => theme.primaryBackgroundColor};
            }

            &--warning {
                border-color: ${({ theme }) => theme.warningColor};
                color: ${({ theme }) => theme.warningColor};

                &:hover {
                    background-color: ${({ theme }) => theme.warningColor};
                }
            }

        }
    }

    .post {
        /* &:hover {
            border: 1px solid ${({ theme }) => theme.lineColor};
        } */
        border-bottom: 1px solid ${({ theme }) => theme.lineColor};

        &--no-border {
            border-bottom: none;
        }

        &__publish-date {
            color: ${({ theme }) => theme.secondaryFontColor};
        }
    }
`;
