// import { server } from '../../../config';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Meta from '../../../components/Meta'

const Article = ({ article }) => {
    // const router = useRouter()
    // const { id } = router.query

    return (
        <>
            {/* <Meta title={article.title} description={article.excerpt} /> */}
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
};

export default Article;

// export const getServerSideProps = async (context) => {
//     console.log('In getServerSideProps:context', context);
//     console.log('In getServerSideProps:params', context.params);
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );

//     const article = await res.json();
//     console.log('In getStaticProps:artile:', article);
//     return {
//         props: {
//             article,
//         },
//     };
// };

export const getStaticProps = async (context) => {
    console.log('In getStaticProps:context', context);
    console.log('In getStaticProps:params', context.params);
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    );

    const article = await res.json();
    console.log('In getStaticProps:artile:', article);
    return {
        props: {
            article,
        },
    };
};

export const getStaticPaths = async () => {
    console.log('In getStaticPath');

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
    const ids = articles.map((article) => article.id);
    console.log('getStaticPaths:IDS', ids);
    const paths = ids.map((id) => {
        return { params: { id: id.toString() } };
    });
    return {
        paths,
        fallback: false,
    };
};
