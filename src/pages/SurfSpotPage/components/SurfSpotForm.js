import { roundValueTo } from '../../../utils/Helpers'

const SurfSpotForm = ({ location, loading, submit, swellBuoys, tideBuoys }) => {
  const mapBuoys = (buoy) => (
    <option key={buoy.id} value={buoy.id}>
      {buoy.name}
    </option>
  )

  return (
    <div className="form-wrapper">
      <div className="form-inner">
        <form onSubmit={submit}>
          <h3>Add Surf Spot</h3>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              name="name"
              required
            />
          </div>
          <div className="mb-3">
            <label>Latitude</label>
            <input
              type="number"
              className="form-control"
              min={-90.0}
              max={90.0}
              step={0.000000001}
              placeholder="Enter latitude"
              defaultValue={
                location.latitude
                  ? roundValueTo(location.latitude, 4).toString()
                  : location.latitude
              }
              name="latitude"
              required
            />
          </div>
          <div className="mb-3">
            <label>Longitude</label>
            <input
              type="number"
              className="form-control"
              min={-180.0}
              max={180.0}
              step={0.000000001}
              placeholder="Enter longitude"
              defaultValue={
                location.longitude
                  ? roundValueTo(location.longitude, 4).toString()
                  : location.longitude
              }
              name="longitude"
              required
            />
          </div>
          <div className="mb-3">
            <label>Swell Buoy</label>
            <select className="form-select" name="swellBuoy">
              {swellBuoys.map(mapBuoys)}
            </select>
          </div>
          <div className="mb-3">
            <label>Tide Buoy</label>
            <select className="form-select" name="tideBuoy">
              {tideBuoys.map(mapBuoys)}
            </select>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SurfSpotForm
