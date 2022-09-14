import * as React from 'react'
import { SEO } from "../components/Seo"
import { Layout } from '../components/Layout'
import { Main } from '../components/Main'

const IndexPage = () => {
  return (
    <Layout>
        <Main/>
    </Layout>
  )
}

export const Head = () => <SEO/>

export default IndexPage