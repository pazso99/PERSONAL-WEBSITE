import styled from "styled-components";

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.backgroundLight};
    background: ${({ theme }) => theme.backgroundGradientColorLight};
    display: flex;
    justify-content: center;
    padding: 80px 30px;
    clip-path: polygon(0% 4%, 100% 0%, 100% 95%, 0% 100%, 0 100%);

    @media (max-width: 960px) {
        padding: 66px 16px;
        clip-path: none;
    }
    @media (max-width: 640) {
        padding: 32px 16px;
    }

`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Introduction = styled.div`
    order: 1;
    width: 100%;

    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Highlight = styled.span`
    color: ${({ theme }) => theme.primary};
`;

export const Title = styled.div`
    font-size: 50px;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const SubTitle = styled.h1`
    font-size: 42px;
    color: ${({ theme }) => theme.textPrimary};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

export const JobText = styled.h1`
    font-weight: 600;
    font-size: 32px;
    color: ${({ theme }) => theme.textPrimary};

    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.textPrimary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

export const CVButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: ${({ theme }) => theme.CVButtonBackground};
    color: ${({ theme }) => theme.CVButtonText};
    font-size: 20px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${({ theme }) => theme.CVButtonBackground + 95};
        color: ${({ theme }) => theme.CVButtonText + 50};
    }
`;

export const Picture = styled.div`
    order: 2;
    width: 100%;
    display: flex;
    justify-content: end;

    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }
    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

export const Img = styled.img`
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};

    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }
    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
`;
