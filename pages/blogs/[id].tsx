import * as React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { getBlogPost } from '../../src/lib/get-blog-post'

export const getStaticProps: GetStaticProps = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    const post = await getBlogPost(id)

    return { props: { post }, revalidate: 600 }
  } else {
    throw Error
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

const BlogPost = () => {
  return <></>
}

export default BlogPost
