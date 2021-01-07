import Link from 'next/link'
import styles from '../styles/comic-list.module.css'

function ComicList( { comics } ) {
    return (<ul className={styles.ComicList}>
        {comics.map(comic => (
            <ComicList key={comic.id} comic={comic} />
        ))} 
    </ul>
    )
}

function ComicItem({ comic }) {
    return (
        <li>
            <Link href="/comics/[id].js" as={`/comics/${comics.id}`}>
                <a>
                    {comics.name}
                </a>
            </Link>
        </li>
    )
}

export default ComicList