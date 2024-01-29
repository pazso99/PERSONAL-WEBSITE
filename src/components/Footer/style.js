import styled from "styled-components";

export const Container = styled.div`
    background: ${({ theme }) => theme.footerBackground};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    margin: 0 auto;
    padding: 32px 0;
    color: ${({ theme }) => theme.footerText};
    width: 100%;
    max-width: 1200px;
`;

export const Name = styled.h1`
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
`;

export const Mobile = styled.span`
    font-size: 14px;
    color: ${({ theme }) => theme.footerText};
`;

export const Email = styled.a`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.footerText};
`;

export const Hr = styled.hr`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.primary};
    margin: 16px 0;
`;

export const Nav = styled.div`
    display: flex;
    justify-content: center;
    gap: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
        text-align: center;
        font-size: 12px;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.footerText};
    text-decoration: none;
    font-size: 20px;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const IconButtonContainer = styled.div`
    display: flex;
    margin-top: 16px;
`;

export const IconButton = styled.a`
    display: inline-block;
    padding: 0 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.footerText};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const Copyright = styled.p`
    margin-top: 20px;
    font-size: 14px;
`;
