import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
    const allPostsData = await getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Arts({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title>Blog - AlgoGyan</title>
            </Head>
            <div className="col-9 mx-auto">
                <br/>
                <br/>
            <ul>
                {allPostsData.map(({id, date, title, linkTitle}) => (
                    <li>
                        <Link href={`/blog/android/${id}`} className="btn-get-started">{linkTitle}</Link>
                        <br/>
                    </li>
                ))}
            </ul>
            </div>
        </Layout>
    );
}