import { AddOperatorsPage } from "../components/add-operators-page";
import { ThemeProvider } from '~/contexts/theme';

const page = () => {

    return (
        <ThemeProvider>
            <AddOperatorsPage />
        </ThemeProvider>
    );
};

export default page;