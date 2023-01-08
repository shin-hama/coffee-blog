import * as React from 'react'
import Link from 'next/link'

import { EntryCollection } from 'contentful'

import { ICafeFields } from '../src/@types/contentful'
import Layout from '../src/components/Layout'
import { NavLink } from '../src/components/Link'
import PageCard from '../src/components/PageCard'
import { getAllCafes } from '../src/lib/get-all-cafes'

type Props = {
  cafes: EntryCollection<ICafeFields>
}
export const getStaticProps = async () => {
  const cafes = await getAllCafes()

  return { props: { cafes: JSON.parse(JSON.stringify(cafes)) } }
}
export default function Home({ cafes }: Props) {
  const { items } = cafes
  return (
    <Layout title='tokyo cafe catalog'>
      <div>
        {items.map((item) => (
          <NavLink key={item.sys.id} href={`cafes/${item.sys.id}`}>
            <PageCard
              title={item.fields.name}
              img={item.fields.thumbnail.fields.file.url}
            />
          </NavLink>
        ))}
      </div>
    </Layout>
  )
}
