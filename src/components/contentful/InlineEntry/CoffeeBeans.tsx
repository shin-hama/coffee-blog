import * as React from 'react'
import dynamic from 'next/dynamic'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { ICoffeeBeansFields } from '../../../@types/contentful'

const TasteChart = dynamic(() => import('./TasteChart'), {
  ssr: false
})

const SubjectMap: Record<
  Exclude<keyof ICoffeeBeansFields, 'name' | 'description'>,
  string
> = {
  bitterness: '苦味',
  body: 'コク',
  fragrance: '香り',
  sourness: '酸味',
  sweetness: '甘み'
}

const CoffeeBeans: React.FC<ICoffeeBeansFields> = ({
  name,
  description,
  ...taste
}) => {
  const data = Object.entries(taste).map(([key, value]) => ({
    subject: SubjectMap[key as keyof typeof taste],
    value
  }))

  return (
    <Card>
      <CardContent>
        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <Box>
            <Typography variant='h4'>{name || 'Coffee Beans'}</Typography>
            <Typography variant='body1'>
              {description || 'No description'}
            </Typography>
          </Box>
          <TasteChart data={data} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CoffeeBeans
