import { useTranslation } from "react-i18next";
import CV_en from "../../media/me/CV_Zsolt_Pap_en.pdf";
import CV_hu from "../../media/me/CV_Pap_Zsolt_hu.pdf";
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
    CVButton,
    Picture,
    Img,
} from "./style";

const About = () => {
    const { t, i18n: { language } } = useTranslation();
    const CV_info = {
        src: language === "en" ? CV_en : CV_hu,
        title: t("cv.downloadName")
    };

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
                    <CVButton href={CV_info.src} download={CV_info.title} target="_blank">{t("cv.title")}</CVButton>
                </Introduction>

                <Picture>
                    <Img src={Me} alt="Pap Zsolt image" />
                </Picture>
            </Content>
        </Wrapper>
    );
};

export default About;
