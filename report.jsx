var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

const { getPrecentage, percentageTemplate } = require("./helpers")

const rows = require('./data.json')

const dimensions = [
  { value: 'date', title: 'Date' },
  { value: 'host', title: 'Host' }
]

const initialMemo = {
  impressions: 0,
  loads: 0,
  displays: 0
}

const reduce = function (row, memo) {
  memo = Object.assign({}, initialMemo, memo)

  if (row.type === 'impression')
    memo.impressions += 1
  else if (row.type === 'load')
    memo.loads += 1
  else if (row.type === 'display')
    memo.displays += 1

  return memo
}

const calculations = [
  { title: 'Impressions', value: 'impressions' },
  { title: 'Loads', value: 'loads' },
  { title: 'Displays', value: 'displays' },
  {
    title: 'Load Rate',
    value: memo => getPrecentage(memo.loads, memo.impressions),
    template: percentageTemplate
  },
  {
    title: 'Display Rate',
    value: memo => getPrecentage(memo.displays, memo.loads),
    template: percentageTemplate
  }
]

module.exports = createReactClass({
  render () {
    return (
      <ReactPivot
        rows={rows}
        dimensions={dimensions}
        reduce={reduce}
        calculations={calculations}
        activeDimensions={['Date', 'Host']}
      />
    )
  }
})
