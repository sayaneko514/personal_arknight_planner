import { LandingPage } from "./components/home-page";
import { ThemeProvider } from '~/contexts/theme';

const Home = () => {

    return (
        <ThemeProvider>
            <LandingPage />
        </ThemeProvider>
    );
};

export default Home;