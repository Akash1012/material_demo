import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import MainBlog from './pages/Blog/mainBlog'

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: '#ffff'
//         },
//         secondary: purple
//     },
//     typography: {
//         fontWeightMedium: 500
//     }
// })

function App() {
    return (
        <div>
            {/* <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Notes />
                        </Route>
                        <Route path="/create">
                            <Create />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider> */}
            <MainBlog />
        </div>
    );
}

export default App;
