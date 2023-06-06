import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from 'recharts'

const Graph = ({ data, xAxisKey, xAxisLabel, yAxisKey, yAxisLabel }) => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisKey}>
        <Label value={xAxisLabel} offset={-10} position="insideBottom" />
      </XAxis>
      <YAxis>
        <Label value={yAxisLabel} angle={-90} position="insideBottomLeft" />
      </YAxis>
      <Tooltip />
      <Line type="monotone" dataKey={yAxisKey} stroke="#8884d8" />
    </LineChart>
  )
}
export default Graph
