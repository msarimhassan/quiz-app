import React from 'react';
import Question from './components/question';
import questions from './common/data';

import {Box} from '@mui/material'

export default function App() {
  // const theme = createTheme({
	// 	typography: {
	// 		fontFamily: ['Raleway', 'sans-serif'].join(',')
	// 	}
	// });
  return (
    <React.Fragment>
      
        <Question questions={questions}/>
    </React.Fragment>
  )
}
