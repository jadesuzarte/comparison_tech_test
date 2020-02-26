import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 
      info: [],
      dataSorted: []
  }
  }
  
  
  getData() {
    const apiUrl = 'https://demo.staging.energyhelpline-aws.com/api/results/bb7538cc-ffcb-41af-9290-ab6d00dd6e38'
    axios.get(apiUrl)
      .then(res => {
        const info = res.data;
        this.setState({ info: info.gasResults });
        console.log(info)
      })
    }
    //attempt at sorting data
//   sortData() {
//   this.setState({ dataSorted : sortingData  })

//   const sortingData =  this.state.info.sort(a, b) {
//     if(a.expectedAnnualSpend > b.expectedAnnualSpend) {
//       return a.expectedAnnualSpend - b.expectedAnnualSpend;
// } 
// }
//   }
  
componentDidMount () {
  // this.sortData();
  this.getData();
}
  
  render () {

    return (
      <div>
      <div>
      <h1> {
      this.state.info.map((item, i) =>
       <div>
       
       <li key={i}>Name: {item.name}</li>
       <li> Expected Annual Savings:{item.expectedAnnualSavings}</li>
       <li>Expected Annual Spenditure:{item.expectedAnnualSpend}</li>
       <li> Monthly Spenditure:{item.expectedMonthlySpend} </li>
       <li>Big Six Supplier? {item.isBigSix}</li>
       <li>Payment Method: {item.paymentMethod}</li>
       <li>Any exit fees? {item.hasExitFees}</li>
       
       </div>
       )
      
      }</h1>
      </div>
      </div>
    )
  }
}

export default App;
