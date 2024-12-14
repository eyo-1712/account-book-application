import {
  Bar,
  BarChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { AppBar, Body, Container } from 'shared/ui'
import { Hamburger } from 'widgets'
import { BAR_MOCK_DATA, LINE_MOCK_DATA } from './mock.data'

export const AnalysisPage = () => (
  <Container>
    <AppBar title="지출 분석" leading={<Hamburger />} />
    <Body center>
      <p>이번달 지출 내역</p>
      <p className="text-xs text-gray-400">지난달보다 ___원 덜 쓰는 중</p>
      <br />
      <ResponsiveContainer width="75%" height={200}>
        <LineChart data={LINE_MOCK_DATA}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="pv" stroke="#2563eb" dot={false} />
          <Line type="monotone" dataKey="amt" stroke="#9ca3af" dot={false} />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
      <br />
      <br />
      <p>카테고리 별 지출 내역</p>
      <p className="text-xs text-gray-400">어디에 제일 많이 쓰는 중</p>
      <br />
      <ResponsiveContainer width="75%" height={200}>
        <BarChart data={BAR_MOCK_DATA}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar type="monotone" dataKey="pv" fill="#9ca3af" />
        </BarChart>
      </ResponsiveContainer>
    </Body>
  </Container>
)
