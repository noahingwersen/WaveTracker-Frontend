const SurfSpotRow = ({ index, spot }) => {
  const background = index % 2 == 0 ? 'bg-slate-100' : ''

  const twoDecimal = (string) => parseFloat(string).toFixed(2).toString()

  return (
    <tr className={background}>
      <td className='border py-2 px-4'>{spot.name}</td>
      <td className='border py-2 px-4'>{twoDecimal(spot.latitude)}</td>
      <td className='border py-2 px-4'>-{twoDecimal(spot.longitude)}</td>
      <td className='border py-2 px-4'>{spot.swell_buoy.name}</td>
      <td className='border py-2 px-4'>{spot.tide_buoy.name}</td>
      <td className='border py-2 px-4'>{spot.surf_sessions.length}</td>
    </tr>
  )
}
export default SurfSpotRow
