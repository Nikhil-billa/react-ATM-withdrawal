// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {initialBalance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({
      initialBalance: prevState.initialBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {initialBalance} = this.state
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)
    return (
      <div className="app-container">
        <div className="container">
          <div className="profile-container">
            <p className="icon"> {initial} </p>
            <h1 className="name"> {name} </h1>
          </div>

          <div className="balance-container">
            <p className="your-balance"> Your Balance </p>
            <div className="amount-container">
              <p className="amount"> {initialBalance} </p>
              <p className="INR"> In Rupees </p>
            </div>
          </div>

          <p className="withdraw-heading"> Withdraw </p>
          <p className="choosing-sum"> CHOOSE SUM (IN RUPEES) </p>

          <ul className="withdraw-items">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationAmount={eachDenomination}
                key={eachDenomination.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
