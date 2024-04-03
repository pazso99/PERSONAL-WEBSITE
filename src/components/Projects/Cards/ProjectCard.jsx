import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Language";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
    Card,
    Image,
    Tags,
    Tag,
    Details,
    Name,
    Description,
    Links,
    Link
} from "../style";
import paplan1 from "../../../media/projects/paplan/paplan1.png";
import paplan2 from "../../../media/projects/paplan/paplan2.png";
import paplan3 from "../../../media/projects/paplan/paplan3.png";
import paplan4 from "../../../media/projects/paplan/paplan4.png";
import paplan5 from "../../../media/projects/paplan/paplan5.png";
import paplan6 from "../../../media/projects/paplan/paplan6.png";

const projectImages = {
    "paplan": [
        { src: paplan1 },
        { src: paplan2 },
        { src: paplan3 },
        { src: paplan4 },
        { src: paplan5 },
        { src: paplan6 },
    ],
};

const ProjectCard = ({project}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Card>
            <Image src={projectImages[project.id][0].src} alt={project.title} onClick={() => setOpen(true)} />
            <Tags>
                {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Name href={project.github} target="_blank">{project.title}</Name>
                <Description>{project.description}</Description>
                <Links>
                    {project.githubLinks.map((github, index) => (
                        <Link key={index} href={github.link} target="_blank">
                            <GithubIcon />
                            {github.label}
                        </Link>
                    ))}
                    {project.webLinks.length > 0 && project.webLinks.map((web, index) => (
                        <Link key={index} href={web.link} target="_blank">
                            <WebIcon />
                            {web.label}
                        </Link>
                    ))}
                </Links>
            </Details>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={projectImages[project.id]}
            />
        </Card>
    );
};

export default ProjectCard;
