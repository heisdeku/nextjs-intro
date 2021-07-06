import Link from 'next/Link'
import Head from 'next/Head'
import Layout from '../../components/layout'

export default function Malaria() {
    return(
      <Layout>
        <Head>
        <title>First Post</title>
      </Head>
         <h1>Malaria the disease is real sha</h1>
        <p>
      </p>
      </Layout>              
    )
  }
  
  export async function getServerSideProps(context) {
    return {
      props: {
        // props for your component
      }
    }
  }