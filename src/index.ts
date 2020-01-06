import { GeoJSON, GeoJsonProperties, Geometry, Feature, LineString, Position, Polygon, Point } from 'geojson'
import river from './river'

export const geojsonType = (json: GeoJSON): string => {
    return json.type
}

export const isPoint = (json: GeoJSON): boolean => {
    return json.type === 'Point'
}

export const isPolygon = (json: GeoJSON): boolean => {
    return json.type === 'Polygon'
}

export const isFeatureCollection = (json: GeoJSON): boolean => {
    return json.type === 'FeatureCollection'
}

export const isLineString = (json: Feature<Geometry, any>): boolean => {
    return json.geometry.type === 'LineString'
}

export const getFeatures = (json: GeoJSON): Feature<Geometry, GeoJsonProperties>[] | [] => {
    if (json.type === 'FeatureCollection') {
        return json.features
    }
    return []
}

export const getCoords = (json: Feature<Point | LineString | Polygon, GeoJsonProperties>): Position | Position[] | Position[][] => {
    return json.geometry.coordinates
}

// console.log('river', river)
const r = river as Feature<LineString, any>
if (isLineString(r)) {
    // if (isPoint(r)) {
    const c = getCoords(r)
    console.log('c', c)
}
