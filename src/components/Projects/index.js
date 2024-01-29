import { useTranslation } from "react-i18next";
import {
    Container,
    Title,
    CardContainer,
} from "./style";
import ProjectCard from "./Cards/ProjectCard";

const Projects = () => {
    const { t } = useTranslation();
    const projects = t("projects.data", { returnObjects: true });

    return (
        <Container id="projects">
            <Title>{t("projects.title")}</Title>
            <CardContainer>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </CardContainer>
        </Container>
    );
};

export default Projects;
