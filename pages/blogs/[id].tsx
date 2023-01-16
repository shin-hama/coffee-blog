import * as React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { IBlog } from '../../src/@types/contentful'
import BlogLayout from '../../src/components/BlogLayout'
import BlogPost from '../../src/components/BlogPost'
import Layout from '../../src/components/Layout'
import { getBlogPost } from '../../src/lib/get-blog-post'

type Props = {
  post: IBlog
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    const post = await getBlogPost(id)

    return { props: { post: post }, revalidate: 600 }
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
    <Layout title={post.fields.title} description={post.fields.description}>
      <BlogLayout post={post} recommendItems={[]}>
        <BlogPost {...post.fields} />
      </BlogLayout>
    </Layout>
  )
}

export default BlogPostPage
