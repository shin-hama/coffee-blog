import * as React from 'react'

import Grid from '@mui/material/Grid'
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
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid key={item.sys.id} item xs={12} sm={6}>
            <NavLink href={`cafes/${item.sys.id}`}>
              <PageCard
                name={item.fields.name}
                city={item.fields.city}
                visited={item.fields.visited}
                img={item.fields.thumbnail.fields.file.url}
              />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
