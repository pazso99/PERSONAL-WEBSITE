import {
    Card,
    NameContainer,
    Name,
    Description,
    Date,
    FeatureBadges,
    FeatureBadge,
    Info,
} from "./style";

const JobCard = ({ job }) => {
    return (
        <Card>
            <NameContainer>
                <Name>{job.role}</Name>
                <Description>{job.company}</Description>
                <Date>{job.date}</Date>
                {job.features && (
                    <FeatureBadges>
                        {job.features.map(feature => (
                            <FeatureBadge key={feature}>{feature}</FeatureBadge>
                        ))}
                    </FeatureBadges>
                )}
            </NameContainer>
            {job.desc && (
                <Info>{job.desc}</Info>
            )}
        </Card>
    );
};

export default JobCard;
