import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 16px;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${({theme}) => theme.navbarBackground};

    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
    z-index: 1;
`;

export const NavLogo = styled.a`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 6px;
    margin-right: 32px;
    text-decoration: none;
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.primary};
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }

    @media (max-width: 640px) {
        padding: 0 0px;
    }
`;

export const HamburgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 24px;
        color: ${({ theme }) => theme.navbarText};
    }
`;

export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.a`
    color: ${({ theme }) => theme.navbarText};
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const IconButtonContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
    width: 80%;
    padding: 0 6px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const IconButton = styled.a`
    display: inline-block;
    padding: 0 16px;
    font-size: 36px;
    cursor: pointer;
    color: ${({ theme }) => theme.navbarText};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const IconLangButton = styled.a`
    display: inline-block;
    padding: 0 16px;
    font-weight: 700;
    height: 100%;
    line-height: 60px;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    user-select: none;
    color: ${({ theme }) => theme.navbarText};
    transition: color 0.2s ease-in-out;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const MobileNavItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 12px 40px 24px 40px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    background: ${({ theme }) => theme.navbarBackground};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const MobileNavItem = styled.a`
    color: ${({ theme }) => theme.navbarText};
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-align: center;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export const HorizontalLine = styled.hr`
    margin: 10px 0;
`;

export const MobileIconButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
`;
