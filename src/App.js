import React, { Component } from "react";
import Product from "./components/product";
import Table from "./components/table";
import { connect } from 'react-redux';
import { loadData } from './actions'



class App extends Component {
  state = {
    compare: []
  };
  componentDidMount() {
    this.props.loadData();
  }

  // handleadd = product => {
  //   if (this.state.compare.indexOf(product) === -1) {
  //     this.setState((state) => ({ compare: [...state.compare, product] }));
  //   } else {
  //     const items = [...this.state.compare];
  //     items.splice(this.state.compare.indexOf(product), 1);
  //     console.log(items);
  //     this.setState((state) => ({ compare: items }));
  //   }
  // };

  render() {
    return (
      // <Provider store={store}>
      <div style={{ margin: "3%" }}>
        <h1>Compare Products</h1>
        <div style={{ display: "block" }}>
          {this.props.data.map(product => (
            <Product
              clicked={this.props.product.indexOf(product) === -1}
              product={product}
              handleadd={this.handleadd}
            />
          ))}
        </div>
        <div>
          {this.props.product.length > 1 && (
            <Table compare={this.props.product} />
          )}
        </div>
      </div>
      // </Provider>
    );
  }
}
const mapStateToProps = ({ isLoading, data, product, error }) => ({
  isLoading,
  data,
  product,
  error
});

const mapDispatchToProps = dispatch => ({
  loadData: () => dispatch(loadData()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
