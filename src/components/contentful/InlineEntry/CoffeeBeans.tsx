import * as React from 'react'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'

import { ICoffeeBeansFields } from '../../../@types/contentful'

type DataRecord = {
  subject: string
  value: number
}
const SubjectMap: Record<
  Exclude<keyof ICoffeeBeansFields, 'name' | 'description'>,
  string
> = {
  bitterness: '苦味',
  body: 'コク',
  fragrance: '酸味',
  sourness: '酸味',
  sweetness: '甘み'
}

const CoffeeBeans: React.FC<ICoffeeBeansFields> = ({
  name,
  description,
  ...taste
}) => {
  const data = React.useMemo<Array<DataRecord>>(() => {
    return Object.entries(taste).map(([key, value]) => ({
      subject: SubjectMap[key as keyof typeof taste],
      value
    }))
  }, [taste])

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
          <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey='subject' />
            <PolarRadiusAxis
              tick={false}
              axisLine={false}
              tickCount={6}
              domain={[0, 5]}
            />
            <Radar
              name='Mike'
              dataKey='value'
              stroke='#8884d8'
              fill='#8884d8'
              fillOpacity={0.6}
            />
          </RadarChart>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CoffeeBeans
