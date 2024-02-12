import { useState } from "react";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {
    NavbarContainer,
    Nav,
    NavLogo,
    HamburgerIcon,
    NavItems,
    NavItem,
    IconButtonContainer,
    IconButton,
    IconLangButton,
    MobileNavItems,
    MobileNavItem,
    HorizontalLine,
    MobileIconButtonContainer
} from "./style";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "hu" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    };

    return (
        <NavbarContainer>
            <Nav>
                <NavLogo href="#top">PZS</NavLogo>
                <HamburgerIcon onClick={() => setIsOpen(!isOpen)}>
                    {
                        !isOpen && <FaBars />
                    }
                    {
                        isOpen && <FaWindowClose />
                    }
                </HamburgerIcon>
                <NavItems>
                    <NavItem href="#top">{t("navbar.about")}</NavItem>
                    <NavItem href="#skills">{t("navbar.skills")}</NavItem>
                    <NavItem href="#experience">{t("navbar.experience")}</NavItem>
                    <NavItem href="#projects">{t("navbar.projects")}</NavItem>
                </NavItems>
                <IconButtonContainer>
                    <IconButton href="https://linkedin.com/in/pazso99" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="https://github.com/pazso99" target="_blank">
                        <GithubIcon />
                    </IconButton>
                    <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
                        {
                            !isDarkMode && <LightModeIcon />
                        }
                        {
                            isDarkMode && <DarkModeIcon />
                        }
                    </IconButton>
                    <IconLangButton onClick={handleChangeLanguage}>
                        {currentLanguage === "en" ? "hu" : "en"}
                    </IconLangButton>
                </IconButtonContainer>
                {
                    isOpen &&
                    <MobileNavItems>
                        <MobileNavItem href="#top" onClick={() => { setIsOpen(!isOpen) }}>{t("navbar.about")}</MobileNavItem>
                        <MobileNavItem href="#skills" onClick={() => { setIsOpen(!isOpen) }}>{t("navbar.skills")}</MobileNavItem>
                        <MobileNavItem href="#experience" onClick={() => { setIsOpen(!isOpen) }}>{t("navbar.experience")}</MobileNavItem>
                        <MobileNavItem href="#projects" onClick={() => { setIsOpen(!isOpen) }}>{t("navbar.projects")}</MobileNavItem>
                        <HorizontalLine />
                        <MobileIconButtonContainer>
                            <IconButton href="https://linkedin.com/in/pazso99" target="_blank">
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton href="https://github.com/pazso99" target="_blank">
                                <GithubIcon />
                            </IconButton>
                            <IconButton onClick={() => setIsDarkMode(!isDarkMode)}>
                                {
                                    !isDarkMode && <LightModeIcon />
                                }
                                {
                                    isDarkMode && <DarkModeIcon />
                                }
                            </IconButton>
                            <IconLangButton onClick={handleChangeLanguage}>
                                {currentLanguage === "en" ? "hu" : "en"}
                            </IconLangButton>
                        </MobileIconButtonContainer>
                    </MobileNavItems>
                }
            </Nav>
        </NavbarContainer>
    );
};

export default Navbar;
