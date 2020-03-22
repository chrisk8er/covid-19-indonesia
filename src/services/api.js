import Axios from 'axios'

const covid19 = Axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

export function getProvinceStatus() {
  return covid19
    .get(
      'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?f=json&where=(Provinsi%20%3C%3E%20%27Indonesia%27)%20AND%20(Kasus_Posi%20%3C%3E%200)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Kasus_Posi%20desc&outSR=102100&resultOffset=0&resultRecordCount=34&cacheHint=true'
    )
    .then(response => {
      if (response.status === 200) {
        return response.data.features
      }

      return null
    })
}

export function getTotalCases() {
  return covid19
    .get(
      'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Jumlah_Kasus_Baru_per_Hari%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true'
    )
    .then(response => {
      if (response.status === 200) {
        return response.data.features
      }
    })
}

export function getTotalTreatments() {
  return covid19
    .get(
      'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=(Tanggal%3E%3Dtimestamp%20%272020-03-21%2017%3A00%3A00%27%20AND%20Tanggal%3C%3Dtimestamp%20%272020-03-22%2016%3A59%3A59%27%20OR%20Tanggal%3Etimestamp%20%272020-03-21%2016%3A59%3A59%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Jumlah_pasien_dalam_perawatan%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true'
    )
    .then(response => {
      if (response.status === 200) {
        return response.data.features
      }
    })
}

export function getTotalRecovered() {
  return covid19
    .get(
      'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=(Tanggal%3E%3Dtimestamp%20%272020-03-21%2017%3A00%3A00%27%20AND%20Tanggal%3C%3Dtimestamp%20%272020-03-22%2016%3A59%3A59%27%20OR%20Tanggal%3Etimestamp%20%272020-03-21%2016%3A59%3A59%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Jumlah_Pasien_Sembuh%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true'
    )
    .then(response => {
      if (response.status === 200) {
        return response.data.features
      }
    })
}

export function getTotalDeaths() {
  return covid19
    .get(
      'https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/Statistik_Perkembangan_COVID19_Indonesia/FeatureServer/0/query?f=json&where=(Tanggal%3E%3Dtimestamp%20%272020-03-21%2017%3A00%3A00%27%20AND%20Tanggal%3C%3Dtimestamp%20%272020-03-22%2016%3A59%3A59%27%20OR%20Tanggal%3Etimestamp%20%272020-03-21%2016%3A59%3A59%27)&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&outStatistics=%5B%7B%22statisticType%22%3A%22sum%22%2C%22onStatisticField%22%3A%22Jumlah_Pasien_Meninggal%22%2C%22outStatisticFieldName%22%3A%22value%22%7D%5D&cacheHint=true'
    )
    .then(response => {
      if (response.status === 200) {
        return response.data.features
      }
    })
}
