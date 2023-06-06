const Stats = ({ stats, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        stats && (
          <div>
            <h4>Surf Spots</h4>
            <p>
              Total: {stats.spot_stats.total}
              <br />
              Surfed this year: {stats.spot_stats.year}
            </p>
            <h4>Sessions</h4>
            <p>
              Total: {stats.session_stats.total}
              <br />
              This year: {stats.session_stats.year}
              <br />
              This month: {stats.session_stats.month}
            </p>
          </div>
        )
      )}
    </div>
  )
}
export default Stats
