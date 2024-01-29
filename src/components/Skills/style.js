import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1100px;
    padding-top: 80px;
    margin: 0 auto;
`;

export const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    margin-top: 20px;
    border-bottom: 4px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    margin-top: 30px;
`;

export const SkillGroup = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 535px;
    padding: 18px 36px;
    background: ${({ theme }) => theme.backgroundLight};
    background: ${({ theme }) => theme.backgroundGradientColorLight};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 16px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

export const SkillGroupTitle = styled.h3`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textPrimary};

    &.minContent {
        width: min-content;
    }
`;

export const SkillList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex: 1;
    gap: 12px;
    margin-bottom: 20px;
`;

export const SkillItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.textPrimary};
    border: 2px solid ${({ $level }) => $level};
    border-radius: 12px;
    background: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

export const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;
