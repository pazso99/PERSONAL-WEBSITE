
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import EducationCard from "./Cards/EducationCard";
import {
    Container,
    Title,
    TimelineSection
} from "./style";

const Educations = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const educations = t("experience.educations.data", { returnObjects: true });

    return (
        <Container>
            <Title>{t("experience.educations.title")}</Title>
            <TimelineSection>
                <Timeline sx={{ [`& .MuiTimelineItem-root:before`]: { padding: 0 } }}>
                    {educations.map((education, index) => (
                        <TimelineItem key={index}>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <EducationCard education={education} />
                            </TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector style={{ background: theme.primary }} />
                                <TimelineDot variant="outlined" color="primary" />
                            </TimelineSeparator>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimelineSection>
        </Container>
    );
};

export default Educations;
