import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme'

import NavBar from './NavBar'

const MainBlog = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <NavBar />
            </ThemeProvider>

        </div>
    )
}

export default MainBlog