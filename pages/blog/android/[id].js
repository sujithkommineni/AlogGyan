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
        <div className="col-9 mx-auto">
          <br/>
        <h1>{postData.title}</h1>
        <br />
        <div className="col-8 mx-auto">
        <iframe width="560" height="315" src={postData.youtube_link}
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <br/>
        <br/>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </Layout>
    );
  }