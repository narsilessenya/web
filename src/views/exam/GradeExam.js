import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';


const GradeExam = () => {
  return (
    <PageContainer title="GradeExam" description="this is GradeExam">

      <DashboardCard title="GradeExam">
        <Typography>在这里改卷</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default GradeExam;
