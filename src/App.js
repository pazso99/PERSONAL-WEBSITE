import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { darkTheme, lightTheme } from "./theme";
import "./App.css";

const Background = styled.div`
    background: ${({ theme }) => theme.backgroundColor};
`;

const BackgroundGradient = styled.div`
    padding-bottom: 36px;
    background: ${({ theme }) => theme.backgroundDark};
    background: ${({ theme }) => theme.backgroundGradientColorDark};
`;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { t } = useTranslation();

    return (
        <HelmetProvider>
            <Helmet>
                <title>{t("head.title")}</title>
                <meta name="description" content={t("head.description")} />
                <meta name="keywords" content={t("head.keywords")} />
                <meta name="author" content={t("head.author")} />
                <meta property="og:title" content={t("head.title")} />
                <meta property="og:description" content={t("head.description")} />
            </Helmet>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <BrowserRouter>
                    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
                    <Background>
                        <About />
                        <BackgroundGradient>
                            <Skills />
                            <Experience />
                            <Projects />
                        </BackgroundGradient>
                        <Footer />
                    </Background>
                </BrowserRouter>
            </ThemeProvider>
        </HelmetProvider>
    );
};

export default App;
