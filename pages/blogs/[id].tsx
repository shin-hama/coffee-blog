import * as React from 'react'
import type { GetStaticPaths, GetStaticProps } from 'next'

import { IBlog } from '../../src/@types/contentful'
import { IPost } from '../../src/@types/verify-types'
import BlogLayout from '../../src/components/BlogLayout'
import BlogPost from '../../src/components/BlogPost'
import Layout from '../../src/components/Layout'
import { getBlogPost } from '../../src/lib/get-blog-post'
import { getLinkedPosts } from '../../src/lib/get-linked-posts'

type Props = {
  post: IBlog
  items: Array<IPost>
}

export const getStaticProps: GetStaticProps<Props> = async (props) => {
  const [id] = [props.params?.id].flat(1)

  if (id) {
    const post = await getBlogPost(id)
    const linkedItems = await getLinkedPosts(id)

    return { props: { post: post, items: linkedItems }, revalidate: 600 }
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

const BlogPostPage: React.FC<Props> = ({ post, items }) => {
  if (!post) {
    return <></>
  }

  return (
    <Layout
      title={post.fields.title}
      description={post.fields.description}
      image={post.fields.thumbnail.fields.file.url}
    >
      <BlogLayout post={post} recommendItems={items}>
        <BlogPost {...post.fields} />
      </BlogLayout>
    </Layout>
  )
}

export default BlogPostPage
