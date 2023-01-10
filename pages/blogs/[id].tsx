import * as React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { IBlogFields } from '../../src/@types/contentful'
import BlogPost from '../../src/components/BlogPost'
import Layout from '../../src/components/Layout'
import { getBlogPost } from '../../src/lib/get-blog-post'

type Props = {
  post: IBlogFields
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    const post = await getBlogPost(id)

    return { props: { post: post.fields }, revalidate: 600 }
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

const BlogPostPage: React.FC<Props> = ({ post }) => {
  if (!post) {
    return <></>
  }

  return (
    <Layout title={post.title}>
      <BlogPost {...post} />
    </Layout>
  )
}

export default BlogPostPage
