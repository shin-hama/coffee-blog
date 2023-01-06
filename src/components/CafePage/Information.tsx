import * as React from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'

const Information = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Cafe</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>営業時間</TableCell>
            <TableCell>11:00 ~ 17:00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>アクセス</TableCell>
            <TableCell>国立駅から徒歩5分</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Information
