import * as React from 'react'

import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { ICafeInformationFields } from '../../../@types/contentful'
import { googleMapsEmbedApiKey } from '../../../lib/config'

const Renderer = ({ value }: { value: unknown }) => {
  if (value === null) {
    return <></>
  }
  switch (typeof value) {
    case 'string':
      return <>{value}</>
    case 'boolean':
      return <>{value ? 'あり' : 'なし'}</>
    case 'object':
      if (Array.isArray(value)) {
        return <>{value.join(', ')}</>
      }
      if ('lat' in value && 'lon' in value) {
        const query = `q=${value.lat},${value.lon}&key=${googleMapsEmbedApiKey}`
        return (
          <iframe
            width='450'
            height='250'
            style={{ border: 0 }}
            referrerPolicy='no-referrer-when-downgrade'
            src={`https://www.google.com/maps/embed/v1/place?${query}&zoom=14`}
            allowFullScreen
          ></iframe>
        )
      }
      return <></>
    default:
      return <>Not Supported</>
  }
}

type Row = {
  key: keyof ICafeInformationFields
  label: string
}
const rows: Array<Row> = [
  { key: 'holidays', label: '定休日' },
  { key: 'openingHour', label: '開店時間' },
  { key: 'seats', label: '席数' },
  { key: 'takeout', label: 'テイクアウト' },
  { key: 'wifi', label: 'WiFi' },
  { key: 'smoking', label: 'タバコ' },
  { key: 'payment', label: '支払い方法' }
]

type Props = ICafeInformationFields
const CafeInformation: React.FC<Props> = (information) => {
  const query = `q=${information.name}&key=${googleMapsEmbedApiKey}`

  return (
    <Stack spacing={2}>
      <TableContainer>
        <Table size='small'>
          <TableBody>
            {rows.map(({ key, label }) => (
              <TableRow key={key}>
                <TableCell>{label}</TableCell>
                <TableCell>
                  <Renderer value={information[key]} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <iframe
        width='100%'
        style={{ border: 0, aspectRatio: '1/1', maxHeight: '400px' }}
        referrerPolicy='no-referrer-when-downgrade'
        src={`https://www.google.com/maps/embed/v1/place?${query}&zoom=14`}
        allowFullScreen
      ></iframe>
    </Stack>
  )
}

export default CafeInformation
