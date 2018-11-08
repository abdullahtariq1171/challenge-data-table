
const getPrecentage = (a, b) => parseFloat(((a / b) * 100).toFixed(1))

const percentageTemplate = val => `${val}%`

module.exports = {
  getPrecentage,
  percentageTemplate
}

