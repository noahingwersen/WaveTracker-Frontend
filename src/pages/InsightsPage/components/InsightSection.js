import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

const InsightSection = (props) => {
  const [show, setShow] = useState(true)

  return (
    <div className="insight-section">
      <div className="insight-header">
        <h2 className="insight-header">{props.title}</h2>
        <Button
          className="ms-2"
          variant={show ? 'danger' : 'success'}
          onClick={() => setShow(!show)}
          aria-controls="section-collapse"
          aria-expanded={show}
        >
          {show ? 'Hide' : 'Show'}
        </Button>
      </div>
      <Collapse in={show}>
        <div id="section-collapse">{props.children}</div>
      </Collapse>
    </div>
  )
}
export default InsightSection
