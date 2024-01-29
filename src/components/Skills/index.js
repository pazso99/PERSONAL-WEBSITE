import { useTranslation } from "react-i18next";
import htmlIcon from "../../media/logos/frontend/html.svg";
import cssIcon from "../../media/logos/frontend/css.svg";
import sassIcon from "../../media/logos/frontend/sass.svg";
import javascriptIcon from "../../media/logos/frontend/javascript.svg";
import vueIcon from "../../media/logos/frontend/vue.svg";
import nuxtIcon from "../../media/logos/frontend/nuxt.svg";
import tailwindIcon from "../../media/logos/frontend/tailwind.svg";
import reactNativeIcon from "../../media/logos/frontend/react_native.svg";
import reactIcon from "../../media/logos/frontend/react.svg";
import angularIcon from "../../media/logos/frontend/angular.svg";
import typescriptIcon from "../../media/logos/frontend/typescript.svg";
import phpIcon from "../../media/logos/backend/php.png";
import laravelIcon from "../../media/logos/backend/laravel.svg";
import postgresqlIcon from "../../media/logos/backend/postgresql.svg";
import nodejsIcon from "../../media/logos/backend/nodejs.svg";
import kotlinIcon from "../../media/logos/backend/kotlin.svg";
import springIcon from "../../media/logos/backend/spring.svg";
import vscodeIcon from "../../media/logos/others/vscode.svg";
import gitIcon from "../../media/logos/others/git.svg";
import gitlabIcon from "../../media/logos/others/gitlab.svg";
import jiraIcon from "../../media/logos/others/jira.svg";
import linuxIcon from "../../media/logos/others/linux.svg";
import dockerIcon from "../../media/logos/others/docker.svg";
import seoIcon from "../../media/logos/others/seo.svg";
import nginxIcon from "../../media/logos/others/nginx.svg";
import {
    Container,
    Title,
    SkillsContainer,
    SkillGroup,
    SkillGroupTitle,
    SkillList,
    SkillItem,
    SkillImage
} from "./style";

const Skills = () => {
    const { t } = useTranslation();
    const skillGroups = t("skills.data", { returnObjects: true });
    const logos = {
        "html": htmlIcon,
        "php": phpIcon,
        "angular": angularIcon,
        "css": cssIcon,
        "sass": sassIcon,
        "docker": dockerIcon,
        "git": gitIcon,
        "javascript": javascriptIcon,
        "kotlin": kotlinIcon,
        "spring": springIcon,
        "laravel": laravelIcon,
        "seo": seoIcon,
        "linux": linuxIcon,
        "nginx": nginxIcon,
        "nodejs": nodejsIcon,
        "nuxt": nuxtIcon,
        "postgresql": postgresqlIcon,
        "reactNative": reactNativeIcon,
        "react": reactIcon,
        "tailwind": tailwindIcon,
        "typescript": typescriptIcon,
        "vscode": vscodeIcon,
        "vue": vueIcon,
        "gitlab": gitlabIcon,
        "jira": jiraIcon
    };

    return (
        <Container id="skills">
            <Title>{t("skills.title")}</Title>
            <SkillsContainer>
                {skillGroups.map((skillGroup, i) => (
                    <SkillGroup key={i}>
                        <SkillGroupTitle className={i === 2 ? "" : "minContent"}>{skillGroup.title}</SkillGroupTitle>
                        <SkillList>
                            {skillGroup.skills.map((skill, j) => (
                                <SkillItem key={j} $level={skill.level}>
                                    <SkillImage src={logos[skill.key]} alt={skill.name} /> {skill.name}
                                </SkillItem>
                            ))}
                        </SkillList>
                    </SkillGroup>
                ))}
            </SkillsContainer>
        </Container>
    );
}

export default Skills;
