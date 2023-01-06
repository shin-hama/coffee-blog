import { EntryCollection } from 'contentful'
import { ICafeFields } from '../src/@types/contentful'
import Layout from '../src/components/Layout'
import { getAllCafes } from '../src/lib/getAllCafes'

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
    <Layout title="tokyo cafe catalog">
      <div>
        {items.map((item) => (
          <div key={item.sys.id}>
            {item.fields.name}: visited at {item.fields.visited}
          </div>
        ))}
      </div>
    </Layout>
  )
}
