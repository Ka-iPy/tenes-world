import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const HomeContainer = styled.div`
    min-height: 100vh;
    width: 100%;
    background: ${theme.colors.white};
`;

export const Header = styled.header`
    background: linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.tertiary} 100%);
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    h1 {
        color: ${theme.colors.white};
        font-size: 1.8rem;
        margin: 0;
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        h1 {
            font-size: 1.4rem;
        }
    }
`;

export const LogoImage = styled.img`
    height: 70px;
    width: auto;
    object-fit: contain;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${theme.colors.secondary};
        padding: 1rem;
        justify-content: center;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
`;

export const MainNav = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
        gap: 1rem;
    }
`;

export const AuthNav = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 2rem;
    padding-left: 2rem;
    border-left: 1px solid rgba(255, 255, 255, 0.2);

    @media (max-width: ${theme.breakpoints.tablet}) {
        margin-left: 1rem;
        padding-left: 1rem;
    }
`;

export const NavLink = styled.a`
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 0.9rem;
        flex-direction: column;
        gap: 0.2rem;
        text-align: center;
    }

    &:hover {
        color: ${theme.colors.primary};
    }

    &.active {
        color: ${theme.colors.primary};
    }
`;

export const HomeIcon = styled.span`
    font-size: 1.2rem;

    @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 1.5rem;
    }
`;

export const MainContent = styled.main`
    padding: 6rem 2rem 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: ${theme.breakpoints.tablet}) {
        padding: 6rem 1rem 5rem;
    }
`;

export const Section = styled.section`
    margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
    color: ${theme.colors.secondary};
    font-size: 2.5rem;
    margin-bottom: 2rem;
    text-align: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        padding: 0.5rem;
    }
`;

export const Card = styled.div`
    background: ${theme.colors.white};
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: ${theme.breakpoints.mobile}) {
        &:hover {
            transform: none;
        }
    }
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    padding: 1.5rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        padding: 1rem;
    }
`;

export const CardTitle = styled.h3`
    color: ${theme.colors.secondary};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
    color: #666;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
`;

export const CardButton = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background: ${theme.colors.secondary};
    }
`;

export const EventDate = styled.div`
    color: ${theme.colors.primary};
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

export const HeroSection = styled.section`
    height: 70vh;
    background-image: url('/TenesWorld.jpeg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: -4rem;

    @media (max-width: ${theme.breakpoints.mobile}) {
        height: 50vh;
        margin-top: -2rem;
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
    }
`;

export const HeroContent = styled.div`
    text-align: center;
    color: ${theme.colors.white};
    position: relative;
    z-index: 1;
    padding: 0 1rem;

    h1 {
        font-size: 4rem;
        margin-bottom: 1rem;

        @media (max-width: ${theme.breakpoints.mobile}) {
            font-size: 2.5rem;
        }
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2rem;

        @media (max-width: ${theme.breakpoints.mobile}) {
            font-size: 1.2rem;
        }
    }
`; 