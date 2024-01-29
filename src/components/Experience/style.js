import styled from "styled-components";

export const ExperienceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;

    @media (max-width: 1546px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Title = styled.h2`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    border-bottom: 4px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const TimelineSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
`;
