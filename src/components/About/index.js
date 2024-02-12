import { useTranslation } from "react-i18next";
import Me from "../../media/me/me.png";
import {
    Wrapper,
    Content,
    Introduction,
    JobText,
    Title,
    Highlight,
    SubTitle,
    Description,
    Picture,
    Img,
} from "./style";

const About = () => {
    const { t, i18n: { language } } = useTranslation();

    return (
        <Wrapper id="about">
            <Content>
                <Introduction>
                    <Title>{t("about.welcome")}</Title>
                    <SubTitle>
                        {language === "en" ? (
                            <>
                                {t("about.name_1")}
                                <Highlight>{t("about.name_2")}</Highlight>
                            </>
                        ) : (
                            <>
                                <Highlight>{t("about.name_1")}</Highlight>
                                {t("about.name_2")}
                            </>
                        )}
                    </SubTitle>
                    <JobText>
                        {t("about.job_1")}
                        <Highlight>{t("about.job_2")}</Highlight>
                    </JobText>
                    <Description>{t("about.desc")}</Description>
                </Introduction>

                <Picture>
                    <Img src={Me} alt="Pap Zsolt image" />
                </Picture>
            </Content>
        </Wrapper>
    );
};

export default About;
