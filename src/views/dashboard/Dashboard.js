import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box , Button, } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';
import RecentTransactions from './components/RecentTransactions';
import ProductPerformance from './components/ProductPerformance';
import MonthlyEarnings from './components/MonthlyEarnings';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>      

      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="进入阅卷"
            href="/Exam/GradeExam"
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
            href="*"
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


          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>

          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>

          
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>

          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
