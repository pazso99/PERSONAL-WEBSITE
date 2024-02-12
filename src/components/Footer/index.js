import { useTranslation } from "react-i18next";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import {
    Container,
    Wrapper,
    Name,
    Mobile,
    Email,
    Hr,
    Nav,
    NavLink,
    IconButtonContainer,
    IconButton,
    Copyright,
} from "./style";

const Footer = () => {
    const { t } = useTranslation();
    const email = process.env.REACT_APP_EMAIL;
    const mobile = process.env.REACT_APP_MOBILE;

    return (
        <Container>
            <Wrapper>
                <Name>{t("footer.name")}</Name>
                <Mobile>{mobile}</Mobile>
                <Email href={`mailto:${email}`}>{email}</Email>
                <Hr />
                <Nav>
                    <NavLink href="#top">{t("footer.nav.about")}</NavLink>
                    <NavLink href="#skills">{t("footer.nav.skills")}</NavLink>
                    <NavLink href="#experience">{t("footer.nav.experience")}</NavLink>
                    <NavLink href="#projects">{t("footer.nav.projects")}</NavLink>
                </Nav>
                <IconButtonContainer>
                    <IconButton href="https://linkedin.com/in/pazso99" target="_blank"><LinkedInIcon /></IconButton>
                    <IconButton href="https://github.com/pazso99" target="_blank"><GithubIcon /></IconButton>
                </IconButtonContainer>
                <Copyright>
                    &copy; {(new Date().getFullYear())} | zsoltpap.hu
                </Copyright>
            </Wrapper>
        </Container>
    );
};

export default Footer;
