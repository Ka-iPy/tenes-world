import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
    flex: 1;
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const LogoImage = styled.img`
    height: 80px;
    width: auto;
    object-fit: contain;
    margin-bottom: 0.5rem;
`;

export const LogoTitle = styled.h1`
    color: ${theme.colors.primary};
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
`;

export const LogoSubtitle = styled.p`
    color: ${theme.colors.secondary};
    font-size: 1.1rem;
`;

export const FormGroup = styled.div`
    margin-bottom: 1.5rem;
    text-align: left;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 2px solid ${theme.colors.gray};
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: ${theme.colors.primary};
    }
`;

export const Button = styled.button`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s ease;

    &:hover {
        background: ${theme.colors.secondary};
    }
`;

export const SwitchForm = styled.div`
    margin-top: 1rem;
    font-size: 0.9rem;
    color: ${theme.colors.secondary};
`;

export const SwitchLink = styled.a`
    color: ${theme.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
`;

export const ThemeElements = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
`;

export const FerrisWheel = styled.div`
    position: absolute;
    top: 20px;
    right: 50px;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
`;

export const RollerCoaster = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50px;
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.2);
`;

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 1000px;
    width: 100%;
    min-height: 100vh;
`;

export const TenesImage = styled.div`
    flex: 1;
    display: none;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: ${theme.breakpoints.desktop}) {
        display: block;
    }
`;

export const Image = styled.img`
    width: auto;
    height: 90vh;
    max-width: 100%;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    object-fit: cover;
`;

export const CheckboxGroup = styled.div`
    margin-bottom: 1rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const CheckboxLabel = styled.label`
    color: ${theme.colors.secondary};
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: ${theme.colors.primary};
`;

export const HomeButton = styled(Link)`
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${theme.colors.white};
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;
    z-index: 10;

    &:hover {
        color: ${theme.colors.primary};
    }
`;

export const HomeIcon = styled.span`
    font-size: 1.5rem;
`; 