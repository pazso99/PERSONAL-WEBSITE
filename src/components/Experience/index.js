import Jobs from "./Jobs";
import Educations from "./Educations";
import {
    ExperienceWrapper
} from "./style";

const Experience = () => {
    return (
        <ExperienceWrapper id="experience">
            <Jobs />
            <Educations />
        </ExperienceWrapper>
    );
};

export default Experience;
