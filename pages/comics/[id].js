import { fetchOne } from '../../services/fetcher'
import Layout from '../../components/layout'

const ComicDetail = ({ comic }) => (
    <Layout>
        <h2>{comic && comic.name }</h2>
        <p> {comic && comic.transcipt}</p>
    </Layout>
)

export default ComicDetails;


export async function getServersideProps(context) {
    const id = context.query.id;
    const comic = await fetchOne(id);

    return{
        props:{
            comic,
        },
    }
}