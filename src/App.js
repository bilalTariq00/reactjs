import './App.css';
import Quiz from './QuizPages/Quiz';
import HomePage from './component/HomePage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createMuiTheme,ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';
import NavigationWrapper from './component/NavigationWrapper';
import DemoQuiz from './QuizPages/DemoQuiz';
import LogIn from './LogIn/LogIn';
import { Provider } from 'react-redux';
import { store } from './store/store';

const theme=createMuiTheme(
  {
    palette:{
      primary:{
        main:'#E6E6FA'
      },
      secondary:purple,
      background:{
        default:'#E6E6FA'
      }
    
    },
    typography:{
      fontFamily:'Quicksand'
    },
      
  }
)

const router=createBrowserRouter([
  {path:'',
    element:<NavigationWrapper/>,
    children:[
  {
    path:'/',
   element: <HomePage/>
  },
  {
    path:'/demoquiz',
    element:< DemoQuiz />
  },
  {
    path:'/quiz',
    element:<Quiz />
  },
  ]}
  ,{
    path:'/login',
    element:<LogIn/>
  }
 ] )
function App() {
   

  return (
    <Provider store={store}>
  
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
