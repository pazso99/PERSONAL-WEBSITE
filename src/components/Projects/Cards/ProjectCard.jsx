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
import spending1 from "../../../media/projects/spending/spending1.png";
import spending2 from "../../../media/projects/spending/spending2.png";
import spending3 from "../../../media/projects/spending/spending3.png";

const projectImages = {
    "spending": [
        { src: spending1 },
        { src: spending2 },
        { src: spending3 },
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
