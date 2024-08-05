import './App.css';
import Quiz from './QuizPages/Quiz';
import HomePage from './component/HomePage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createMuiTheme,ThemeProvider } from '@mui/material';
import { green, purple } from '@mui/material/colors';
import NavigationWrapper from './component/NavigationWrapper';
import DemoQuiz from './QuizPages/DemoQuiz';
import LogIn from './LogIn/LogIn';
import { Provider } from 'react-redux';
import { store } from './store/store';
import QuizCreation from './QuizPages/QuizCreation';
import MyQuizzes from './QuizPages/MyQuizzes';
import QuizAttempt from './QuizPages/QuizAttempt';

const theme=createMuiTheme(
  {
    palette:{
      primary:{
        main:'#FFFFFF'
      },
      secondary:green,
     
    
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
  {
    path:'/quizcreation',
    element:<QuizCreation/>
  },
  {
    path:'/my-quizzes',
    element:<MyQuizzes/>
  },{
    path:"/quiz-attempt",
    element:<QuizAttempt/>
  }
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
