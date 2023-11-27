import Head from "next/head";
import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";


export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css" />
        <title>{postData.title}</title>
      </Head>
      <div className="col-md-10 mx-auto">
        <br />
        <h1>{postData.title}</h1>

        {
          (postData.youtube_link !== undefined) && (<div class="my-2 ratio ratio-16x9">
            <p>printing - inside youtube video div</p>
            <iframe class="embed-responsive-item" src={postData.youtube_link}
              title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>)
        }
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
    </Layout>
  );
}