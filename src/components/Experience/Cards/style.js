import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 12px;
    width: 650px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.primary};

    @media only screen and (max-width: 768px) {
        padding: 10px;
        gap: 8px;
        width: 450px;
    }
    @media only screen and (max-width: 576px) {
        width: 300px;
    }
`;

export const NameContainer = styled.div`
    background: ${({ theme }) => theme.backgroundLight};
    background: ${({ theme }) => theme.backgroundGradientColorLight};
    padding: 12px 16px;
    border-radius: 10px;
`;

export const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};

    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Description = styled.div`
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.textPrimary + 99};

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Date = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.textPrimary + 80};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

export const FeatureBadges = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

export const FeatureBadge = styled.div`
    font-size: 12px;
    padding: 4px 6px;
    border-radius: 12px;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.primaryDarker};
`;

export const Info = styled.div`
    padding: 12px 16px;
    font-size: 16px;
    color: ${({ theme }) => theme.textPrimary + 99};
    margin-bottom: 10px;
`;
