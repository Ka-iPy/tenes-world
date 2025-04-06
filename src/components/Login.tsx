import React from 'react';
import { Link } from 'react-router-dom';
import {
    ContentWrapper,
    FormContainer,
    Logo,
    LogoImage,
    LogoTitle,
    LogoSubtitle,
    FormGroup,
    Input,
    Button,
    SwitchForm,
    SwitchLink,
    ThemeElements,
    FerrisWheel,
    RollerCoaster,
    TenesImage,
    Image,
    HomeButton,
    HomeIcon
} from './shared/FormElements';

const Login: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <>
            <HomeButton to="/">
                <HomeIcon>🏠</HomeIcon>
                Back to Home
            </HomeButton>
            <ContentWrapper>
                <TenesImage>
                    <Image src="/TenesWorld.jpeg" alt="Tenes, Algeria" />
                </TenesImage>
                <FormContainer>
                    <Logo>
                        <LogoImage src="/TenesWorldLogo.png" alt="Tenes World Logo" />
                        <LogoTitle>Tenes World</LogoTitle>
                        <LogoSubtitle>Where Dreams Come Alive!</LogoSubtitle>
                    </Logo>
                    
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input type="text" placeholder="Email or Phone Number" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Password" required />
                        </FormGroup>
                        <Button type="submit">Login to Adventure</Button>
                        <SwitchForm>
                            Don't have an account? <SwitchLink as={Link} to="/signup">Sign Up</SwitchLink>
                        </SwitchForm>
                    </form>
                </FormContainer>
                <ThemeElements>
                    <FerrisWheel>🎡</FerrisWheel>
                    <RollerCoaster>🎢</RollerCoaster>
                </ThemeElements>
            </ContentWrapper>
        </>
    );
};

export default Login; 