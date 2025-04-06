import React, { useState } from 'react';
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
    HomeIcon,
    CheckboxGroup,
    CheckboxLabel,
    Checkbox
} from './shared/FormElements';

const Signup: React.FC = () => {
    const [isAdult, setIsAdult] = useState(false);
    const [isParent, setIsParent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        console.log({ isAdult, isParent });
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
                        <LogoSubtitle>Join the Adventure!</LogoSubtitle>
                    </Logo>
                    
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Input type="text" placeholder="First Name" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" placeholder="Last Name" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" placeholder="Email Address" required />
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                type="tel" 
                                placeholder="Phone Number" 
                                pattern="[0-9]*"
                                title="Please enter only numbers"
                                required 
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Password" required />
                        </FormGroup>
                        <FormGroup>
                            <Input type="password" placeholder="Confirm Password" required />
                        </FormGroup>
                        <CheckboxGroup>
                            <CheckboxLabel>
                                <Checkbox
                                    checked={isAdult}
                                    onChange={(e) => {
                                        setIsAdult(e.target.checked);
                                        if (!e.target.checked) {
                                            setIsParent(false);
                                        }
                                    }}
                                />
                                I am 18 years or older
                            </CheckboxLabel>
                        </CheckboxGroup>
                        {isAdult && (
                            <CheckboxGroup>
                                <CheckboxLabel>
                                    <Checkbox
                                        checked={isParent}
                                        onChange={(e) => setIsParent(e.target.checked)}
                                    />
                                    I am a parent
                                </CheckboxLabel>
                            </CheckboxGroup>
                        )}
                        <Button type="submit">Create Account</Button>
                        <SwitchForm>
                            Already have an account? <SwitchLink as={Link} to="/login">Login</SwitchLink>
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

export default Signup; 