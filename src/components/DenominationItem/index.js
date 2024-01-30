// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationAmount, updateBalance} = props
  const {value} = denominationAmount

  const changeBalance = () => {
    updateBalance(value)
  }

  return (
    <div className="denominations-list">
      <li>
        <button className="button" onClick={changeBalance}> {value} </button>
      </li>
    </div>
  )
}

export default DenominationItem
