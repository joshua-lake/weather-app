const locationsData = require('../data/locations')

async function getLocations () {
  return locationsData
}

module.exports = { getLocations }
