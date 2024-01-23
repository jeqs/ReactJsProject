import React from "react";
import Layout from "@/components/layout";

export default function primerPost({data}) {
  return (
    <Layout title="Primer Post">
      <h1>Primer Post</h1>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json();

    const paths = data.map(({ id }) => ({
      params: {
        id: `${id}`,
      },
    }));

    return {
      paths, 
      fallback: false
    };

  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({params}) {
  try {
    console.log(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}