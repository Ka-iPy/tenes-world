import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    HomeContainer,
    Header,
    Logo,
    Nav,
    MainNav,
    AuthNav,
    NavLink,
    MainContent,
    Section,
    SectionTitle,
    Grid,
    Card,
    CardImage,
    CardContent,
    CardTitle,
    CardDescription,
    CardButton,
    EventDate,
    HeroSection,
    HeroContent,
    HomeIcon
} from './shared/HomeElements';

const attractions = [
    {
        id: 1,
        title: "Desert Storm Coaster",
        description: "Experience the thrill of racing through sand dunes on our signature roller coaster.",
        image: "/DesertRollerCoaster.jpeg",
    },
    {
        id: 2,
        title: "Mediterranean Splash",
        description: "Cool off in our water park inspired by the beautiful Mediterranean coast.",
        image: "/WaterPark.jpeg",
    },
    {
        id: 3,
        title: "Ancient Tenes Maze",
        description: "Navigate through a mystical maze inspired by ancient Tenes architecture.",
        image: "/AncientMaze.jpeg",
    }
];

const events = [
    {
        id: 1,
        title: "Summer Night Festival",
        date: "July 15-30, 2024",
        description: "Experience magical nights with special performances and extended park hours.",
        image: "/SummerFestival.jpeg",
    },
    {
        id: 2,
        title: "Algerian Heritage Fashion Show",
        date: "Every Friday & Saturday",
        description: "Experience traditional Algerian fashion with live music and interactive workshops.",
        image: "/AlgerianFashion.jpeg",
    },
    {
        id: 3,
        title: "Food Festival",
        date: "August 1-15, 2024",
        description: "Taste the flavors of Algeria with special food stalls and cooking demonstrations.",
        image: "/AlgerianFood.jpeg",
    }
];

const Home: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.hash === path ? 'active' : '';

    return (
        <HomeContainer>
            <Header>
                <Logo>
                    <h1>Tenes World</h1>
                </Logo>
                <Nav>
                    <MainNav>
                        <NavLink as={Link} to="/" className={location.pathname === '/' ? 'active' : ''}>
                            <HomeIcon>🏠</HomeIcon>
                            Home
                        </NavLink>
                        <NavLink href="#attractions" className={isActive('#attractions')}>
                            Attractions
                        </NavLink>
                        <NavLink href="#events" className={isActive('#events')}>
                            Events
                        </NavLink>
                    </MainNav>
                    <AuthNav>
                        <NavLink as={Link} to="/login">Login</NavLink>
                        <NavLink as={Link} to="/signup">Sign Up</NavLink>
                    </AuthNav>
                </Nav>
            </Header>

            <HeroSection>
                <HeroContent>
                    <h1>Welcome to Tenes World</h1>
                    <p>Where Dreams Come Alive!</p>
                    <CardButton as={Link} to="/signup">Start Your Adventure</CardButton>
                </HeroContent>
            </HeroSection>

            <MainContent>
                <Section id="attractions">
                    <SectionTitle>Popular Attractions</SectionTitle>
                    <Grid>
                        {attractions.map(attraction => (
                            <Card key={attraction.id}>
                                <CardImage src={attraction.image} alt={attraction.title} />
                                <CardContent>
                                    <CardTitle>{attraction.title}</CardTitle>
                                    <CardDescription>{attraction.description}</CardDescription>
                                    <CardButton>Learn More</CardButton>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Section>

                <Section id="events">
                    <SectionTitle>Upcoming Events</SectionTitle>
                    <Grid>
                        {events.map(event => (
                            <Card key={event.id}>
                                <CardImage src={event.image} alt={event.title} />
                                <CardContent>
                                    <EventDate>{event.date}</EventDate>
                                    <CardTitle>{event.title}</CardTitle>
                                    <CardDescription>{event.description}</CardDescription>
                                    <CardButton>Book Now</CardButton>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </Section>
            </MainContent>
        </HomeContainer>
    );
};

export default Home; 