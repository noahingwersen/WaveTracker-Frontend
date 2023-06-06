import InsightSection from './components/InsightSection'
import SimilarSession from './components/SimilarSession'
import Stats from './components/Stats'
import useApiData from '../../hooks/useApiData'
import { toast } from 'react-toastify'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import useAuth from '../../hooks/useAuth'

const InsightsPage = () => {
  const [spotsLoading, surfSpots, spotErrors] = useApiData('/api/spots/')
  const { user } = useAuth()
  const [statsLoading, userStats, statsErrors] = useApiData(
    `/api/users/${user.username}/stats/`
  )

  if (spotErrors) {
    toast.error('Unable to load surf spots')
  }
  if (statsErrors) {
    toast.error('Unable to load user stats')
  }

  return (
    <div className="page-view">
      <h1>Insights</h1>
      <Container>
        <Row>
          <Col>
            <InsightSection title="Stats">
              <Stats stats={userStats} loading={statsLoading} />
            </InsightSection>
          </Col>
          <Col>
            <InsightSection title="Test1">
              <p>Testing</p>
            </InsightSection>
          </Col>
        </Row>
        <Row>
          <Col>
            <InsightSection title="Similar Surf Session">
              <SimilarSession surfSpots={surfSpots} loading={spotsLoading} />
            </InsightSection>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default InsightsPage
