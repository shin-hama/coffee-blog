import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

import { ICafeInformationFields } from '../../@types/contentful'

const Renderer = ({ value }: { value: unknown }) => {
  switch (typeof value) {
    case 'string':
      return <>{value}</>
    case 'boolean':
      return <>{value ? 'あり' : 'なし'}</>
    case 'object':
      if (Array.isArray(value)) {
        return <>{value.join(', ')}</>
      }
      return <></>
    default:
      return <></>
  }
}

type Row = {
  key: keyof ICafeInformationFields
  label: string
}
const rows: Array<Row> = [
  { key: 'name', label: '店名' },
  { key: 'holidays', label: '定休日' },
  { key: 'openingHour', label: '開店時間' },
  { key: 'seats', label: '席数' },
  { key: 'takeout', label: 'テイクアウト' },
  { key: 'wifi', label: 'WiFi' },
  { key: 'smoking', label: 'タバコ' },
  { key: 'payment', label: '支払い方法' }
]

type Props = {
  information: ICafeInformationFields
}
const Information: React.FC<Props> = ({ information }) => {
  return (
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
  )
}

export default Information
