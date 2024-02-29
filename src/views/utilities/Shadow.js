import React from 'react';
import { Paper, Grid} from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ProductPerformance2 from 'src/components/container/ProductPerformance2';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

const Shadow = () => {
  return (
    <PageContainer title="试卷管理" description="this is 试卷管理">

      <DashboardCard title="试卷管理">
      

      <Grid item xs={12} lg={12}>
            <ProductPerformance2 />
          </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Shadow;
