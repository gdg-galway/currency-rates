import React from 'react';
import { Chart } from 'react-google-charts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoadingStatus: 'loading',
      chartData: []
    };
  }
  componentDidMount = async () => {
    const response = await fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD,NZD');
    const json = await response.json();
    const rateCurrencyNames = Object.keys(json.rates);
    const rateCurrencyValues = Object.values(json.rates);
    const chartData = [['Currency Name', 'Currency Rate']];
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
    }
    this.setState({
      dataLoadingStatus: 'ready',
      chartData: chartData,
    });
  }
  render () {
    return (
      this.state.dataLoadingStatus === 'ready' ? (
        <Chart
          chartType="BarChart"
          data={this.state.chartData}
          options={{
            chartArea: {
              width: '50%',
            },
            title: 'EUR Price',
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      ) : (
        <div>Fetching data from API</div>
      )
    );
  }
}

export default App;
