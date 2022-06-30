import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const Test = styled.div`
  color: purple;
  font-family: 'Aquire';
  font-size: 3rem;
  background-color: blue;
`

const Home: NextPage = () => {
  return (
    <Test>
      <h1 style={{ fontFamily: 'Aquire' }}>Bela Garota</h1>

    </Test>
  )
}

export default Home

