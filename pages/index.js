import {fetchAll} from '../services/fetcher'
import Layout from '../components/layout'
import ComicList from '../components/ComicList'
import ComicCounter from '../components/ComicCounter'


export default function Home( {comics} ) {
  return (
    <Layout>
        <ComicCounter counter = {comics.length} />
        <ComicList comics={comics} />
    </Layout>
  )
}

export async function getStaticProps(){
    const comics = await fetchAll();

    return {
        props: { comics },
        revalidate: 1,

    }
}

export default Home;