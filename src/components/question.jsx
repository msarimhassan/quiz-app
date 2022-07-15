import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from 'reactstrap';
import QuizOptions from './QuizOptions';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {Container,Row,Col} from 'reactstrap';

export default function Question(props) {
    const [data, setData] = useState(props.questions);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowscore] = useState(false);
    const [userScore, setUserScore] = useState(0);
    const length = props.questions.length;

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: 'white',
    }));
    const handleChange = (index) => {
        const newData = data.map((item, i) => {
            if (currentQuestion === i) {
                return { ...item, selected: index };
            } else {
              
                return item;
            }
        });

        setData(newData);
    };

    const handleNext = () => {
        if (data[currentQuestion].selected !== '') {
            setCurrentQuestion(currentQuestion + 1);
        }
        else
        {
          alert('Please select an option');
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const PlayAgain = () => {
        setCurrentQuestion(0);
        setShowscore(false);
        setUserScore(0);
    };

    return (
        //   conditional rendering
        showScore ? (
            <Grid container justifyContent='center' alignItems='center' sx={{ height: '60vh' }}>
                <Grid item>
                    <Item
                        sx={{
                            bgcolor: '#3f51b5',
                            boxShadow: 3,
                            borderRadius: 3,
                            p: 4,
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant='h3'> Your Score</Typography>
                        <Typography variant='h3' sx={{ textAlign: 'center' }}>
                            {' '}
                            {userScore}
                        </Typography>
                        <Button
                            onClick={() => {
                                PlayAgain();
                            }}
                        >
                            Play Again
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        ) : (
            // <Grid container sx={{ height: '60vh' }} justifyContent='center' alignItems='center'>
            //     <Grid item>
            //         <Item sx={{ height: '241px', bgcolor: '#3f51b5', borderRadius: 0 }}>
            //             <Typography variant='h3'>
            //                 {' '}
            //                 Question {currentQuestion + 1}/{length}
            //             </Typography>

            //             <Typography variant='subtitle1'>
            //                 {props.questions[currentQuestion].questionText}
            //             </Typography>
            //         </Item>
            //     </Grid>
            //     <Grid item>
            //         {/* map function logic */}
            //         <Item sx={{ bgcolor: '#3f51b5', borderRadius: 0 }}>
            //             {data[currentQuestion].answerOptions.map((option, key) => {
            //                 return (
            //                     <>
            //                         <QuizOptions
            //                             key={key}
            //                             title={option.answerText}
            //                             selected={data[currentQuestion].selected === key}
            //                             onClick={() => handleChange(key)}
            //                         />
            //                     </>
            //                 );
            //             })}

            //         </Item>
            //     </Grid>
            // </Grid>
            <>
                <Container>
                    <Row>
                        <Col className='bg-light border rounded-3'>
                            <h3 className='text-center'>Choose the correct option</h3>
                        </Col>
                    </Row>
                </Container>

                <Container className='justify-content-center align-items-center mt-5'  >
                  {/* Question no heading */}
                    <Row>
                        <Col >
                            <h4 className='text-center'>
                                {' '}
                                Question {currentQuestion + 1}/{length}
                            </h4>
                        </Col>
                    </Row>
                   {/* Queestion */}
                    <Row>
                        <Col>
                            <h3 className='text-center'>
                                {props.questions[currentQuestion].questionText}
                            </h3>
                        </Col>
                    </Row>
                    {/* Quiz Options  */}
                    <Row >
                        {data[currentQuestion].answerOptions.map((option, key) => {
                            return (
                                <Col xs='6'>
                                    <QuizOptions
                                        key={key}
                                        title={option.answerText}
                                        selected={data[currentQuestion].selected === key}
                                        onClick={() => handleChange(key)}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
                <div className='d-flex align-items-center'>
                    <Pagination className='mx-auto'>
                        <PaginationItem>
                            <PaginationLink previous onClick={handlePrevious} />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={handleNext} next />
                        </PaginationItem>
                    </Pagination>
                </div>
            </>
        )
    );
}
