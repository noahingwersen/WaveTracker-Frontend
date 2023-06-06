import useLinkProps from '../../../hooks/useLinkProps'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SurfSessionForm = ({ submit, loading, surfSpots }) => {
  const linkedSpot = useLinkProps()
  const [selectedSpot, setSelectedSpot] = useState()
  const [rating, setRating] = useState(0)

  useEffect(() => {
    if (linkedSpot && Array.isArray(surfSpots) && surfSpots.length > 0) {
      setSelectedSpot(
        surfSpots.find((spot) => {
          return spot.name === linkedSpot.spotName
        }).id
      )
    }
  }, [linkedSpot, surfSpots])

  return (
    <Form onSubmit={submit}>
      <h3>Add Surf Session</h3>
      <Form.Group className="mb-3">
        <Form.Label>Surf Spot</Form.Label>
        <Form.Select
          name="surfSpot"
          value={selectedSpot}
          onChange={(e) => {
            setSelectedSpot(e.target.value)
          }}
          required
        >
          {surfSpots &&
            surfSpots.map((spot) => (
              <option key={spot.id} value={spot.id}>
                {spot.name}
              </option>
            ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Start</Form.Label>
        <Form.Control type="datetime-local" name="startDate" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>End</Form.Label>
        <Form.Control type="datetime-local" name="endDate" required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="rating">Rating (0-10)</Form.Label>
        <Form.Range
          type="range"
          min="0"
          max="10"
          id="rating"
          name="rating"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value)
          }}
          aria-describedby="ratingText"
        />
        <Form.Text id="ratingText">Current value: {rating}</Form.Text>
      </Form.Group>
      <Form.Group className="d-grid">
        <Button type="submit" variant="primary" disabled={loading}>
          Add
        </Button>
      </Form.Group>
    </Form>
  )
}
export default SurfSessionForm
