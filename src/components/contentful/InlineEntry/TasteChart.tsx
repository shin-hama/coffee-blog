import * as React from 'react'

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts'

type DataRecord = {
  subject: string
  value: number
}
type Props = {
  data: Array<DataRecord>
}
const TasteChart: React.FC<Props> = ({ data }) => {
  return (
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
        dataKey='value'
        stroke='#8884d8'
        fill='#8884d8'
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}

export default TasteChart
