import '../styles/globals.css';
import { Layout } from '../components/Layout';

function MyApp({ Component, pageProps }) {
    console.log('In Myapp', Component);
    return (
        <>
            <Layout>
                <h1>This is in Layout </h1>

                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
