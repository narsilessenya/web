import React from 'react';
import { Typography, Grid, CardContent, Button, Stack } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import BlankCard from 'src/components/shared/BlankCard';
import ProductPerformance2 from 'src/components/container/ProductPerformance2';


const ExaminationManagement = () => {
  return (
    <PageContainer title="阅卷管理" description="this is 阅卷管理">
      <DashboardCard title="任务列表">
      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
          <Grid item xs={12} lg={8}> 
          </Grid>
        <Button
                color="primary"
                variant="contained"
                size="large"
                type="submit"
            >
                添加阅卷任务
            </Button>
            </Stack>
      <Grid item xs={12} lg={12}>
            <ProductPerformance2 />
          </Grid>
      </DashboardCard>

      <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
          <Grid item xs={12} lg={8}> 
          </Grid>
       
            </Stack>

      <DashboardCard title="任务列表">
      
      <Grid item xs={12} lg={12}>
            <ProductPerformance2 />
          </Grid>
      </DashboardCard>

    </PageContainer>
  );
};

export default ExaminationManagement;
