import L from 'leaflet'

export function roundValueTo(value, places) {
  return (
    Math.round((value + Number.EPSILON) * Math.pow(10, places)) /
    Math.pow(10, places)
  )
}

export function getIcon(name) {
  return L.icon({
    iconUrl: require(`../static/icons/${name}.png`),
    iconSize: 30,
  })
}
