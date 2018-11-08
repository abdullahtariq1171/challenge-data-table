
const getPrecentage = (a, b) => ((a / b) * 100).toFixed(1)

const percentageTemplate = val => `${val}%`

module.exports = {
  getPrecentage,
  percentageTemplate
}

