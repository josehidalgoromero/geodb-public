import React, { Component } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { Currency } from "../components/Currency";

export class DynamicContent extends Component {
  state = {
    progressBar: 0,
    marketData: [],
    intervalCurrency: () => {},
    intervalProgressBar: () => {},
  };

  _handleResults = (results) => {
    const {
      symbol,
      image,
      current_price,
      high_24h,
      low_24h,
      price_change_percentage_24h,
    } = results;

    this.setState({
      symbol,
      image,
      current_price,
      high_24h,
      low_24h,
      price_change_percentage_24h,
    });
  };

  componentDidMount() {
    let count = 0;
    let intervalProgressBar = setInterval(() => {
      count++;
      if (count === 11) {
        this.setState({ progressBar: 0 });
        count = 0;
      } else {
        this.setState({ progressBar: this.state.progressBar + 10 });
      }
    }, 1000);

    this.setState({
      intervalCurrency: setInterval(this.fetchCurrency(), 10000),
      intervalProgressBar,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalCurrency, this.state.intervalProgressBar);
  }

  fetchCurrency = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=geodb`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ marketData: data });
      });
  };

  render() {
    if (this.state.marketData.length !== 0) {
      return (
        <div>
          <ProgressBar value={this.state.progressBar} />
          <Currency
            symbol={this.state.marketData[0].symbol}
            image={this.state.marketData[0].image}
            price_current={this.state.marketData[0].current_price}
            price_high_24h={this.state.marketData[0].high_24h}
            price_low_24h={this.state.marketData[0].low_24h}
            price_change_percentage_24h={
              this.state.marketData[0].price_change_percentage_24h
            }
          />
        </div>
      );
    } else {
      return (
        <div>
          <ProgressBar value={this.state.progressBar} />
        </div>
      );
    }
  }
}
