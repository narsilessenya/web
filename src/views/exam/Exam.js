import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box , Button } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components

const Exam = () => {
  return (
    <PageContainer title="Exam" description="this is Exam">
      <Box>      

      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="进入阅卷"
            href="/exam/GradeExam"
            >
            进入阅卷
            </Button>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="进入阅卷"
            >
            进入阅卷
            </Button>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="进入阅卷"
            >
            进入阅卷
            </Button>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="进入阅卷"
            >
            进入阅卷
            </Button>
        </Grid>


          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Exam ;
