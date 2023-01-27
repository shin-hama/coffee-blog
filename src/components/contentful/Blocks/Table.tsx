import * as React from 'react'

import { NodeRenderer } from '@contentful/rich-text-react-renderer'
import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import MuiTableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import MuiTableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import { getText } from './get-text'

export const Table: NodeRenderer = (node, children) => {
  return (
    <TableContainer component={Paper} sx={{ mb: 2 }}>
      <MuiTable aria-label='table' sx={{ whiteSpace: 'nowrap' }}>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export const TableRow: NodeRenderer = (node, children) => {
  return <MuiTableRow>{children}</MuiTableRow>
}

const StyledTableCell = styled(MuiTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export const TableHeadCell: NodeRenderer = (node) => {
  return (
    <StyledTableCell variant='head'>{getText(node.content)}</StyledTableCell>
  )
}

export const TableCell: NodeRenderer = (node) => {
  return (
    <StyledTableCell variant='body'>
      {getText(node.content)
        ?.split('\n')
        .map((item) => (
          <React.Fragment key={item}>
            {item}
            <br />
          </React.Fragment>
        ))}
    </StyledTableCell>
  )
}
