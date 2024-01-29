import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 80px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
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

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-bottom: 60px;
`;

/* Card */
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 360px;
    height: 585px;
    padding: 26px 20px;
    position: relative;
    background: ${({ theme }) => theme.backgroundLight};
    background: ${({ theme }) => theme.backgroundGradientColorLight};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.primary};
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
`;

export const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Tags = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 4px;
`;

export const Tag = styled.span`
    padding: 2px 8px;
    font-size: 12px;
    color: ${({ theme }) => theme.textPrimary + 99};
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
`;

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
    width: 100%;
    padding: 0px 2px;
`;

export const Name = styled.a`
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.textPrimary};
    text-align: center;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    margin-bottom: 8px 0;
    padding-bottom: 12px;
`;

export const Description = styled.div`
    color: ${({ theme }) => theme.textPrimary + 99};
    margin-top: 8px;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
    padding-bottom: 12px;
`;

export const Links = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

export const Link = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 16px;
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;
