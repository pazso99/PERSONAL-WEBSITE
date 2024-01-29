import {
    Card,
    NameContainer,
    Name,
    Description,
    Date,
    Info,
} from "./style";

const EducationCard = ({ education }) => {
    return (
        <Card>
            <NameContainer>
                <Name>{education.school}</Name>
                <Description>{education.degree}</Description>
                <Date>{education.date}</Date>
            </NameContainer>
            {education.desc && (
                <Info>{education.desc}</Info>
            )}
        </Card>
    );
};

export default EducationCard;
