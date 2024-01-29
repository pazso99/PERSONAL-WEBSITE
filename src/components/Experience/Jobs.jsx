
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import JobCard from "./Cards/JobCard";
import {
    Container,
    Title,
    TimelineSection
} from "./style";

const Jobs = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const jobs = t("experience.jobs.data", { returnObjects: true });

    return (
        <Container>
            <Title>{t("experience.jobs.title")}</Title>
            <TimelineSection>
                <Timeline sx={{ [`& .MuiTimelineItem-root:before`]: { padding: 0 } }}>
                    {jobs.map((job, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" color="primary" />
                                <TimelineConnector style={{ background: theme.primary }} />
                                <TimelineDot variant="outlined" color="primary" />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: "12px", px: 2 }}>
                                <JobCard job={job} />
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimelineSection>
        </Container>
    );
};

export default Jobs;
