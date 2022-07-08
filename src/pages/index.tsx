import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components';
import { GridCards } from '../components/GridCards';
import { MainContent } from '../components/MainContent'

const HomeWrap = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Home: NextPage = () => {
  return (
    <HomeWrap>
      {/* <MainContent /> */}
      <GridCards />
    </HomeWrap>
  )
}

export default Home

