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

const StyledTableCell = styled(MuiTableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

export const Table: NodeRenderer = (node, children) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableBody>{children}</TableBody>
      </MuiTable>
    </TableContainer>
  )
}

export const TableRow: NodeRenderer = (node, children) => {
  return <MuiTableRow>{children}</MuiTableRow>
}

export const TableHeadCell: NodeRenderer = (node) => {
  return (
    <StyledTableCell variant='head'>{getText(node.content)}</StyledTableCell>
  )
}

export const TableCell: NodeRenderer = (node) => {
  return (
    <StyledTableCell variant='body'>{getText(node.content)}</StyledTableCell>
  )
}
