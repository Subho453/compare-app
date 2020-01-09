import React, { Component } from "react";
import { Typography, Col, Card } from "antd";
const { Text } = Typography;

class Table extends Component {
  state = {};
  render() {
    return (
      <div style={{ margin: 10 }}>
        <h1>Comparison</h1>
        <div className="table" style={{ borderBottom: "2px solid #f1f1f1" }}>
          <div className="tags" style={{ backgroundColor: "white" }}></div>
          {this.props.compare.map(item => (
            <div className="child">
              <Text>{item.name}</Text>
            </div>
          ))}
        </div>
        <div className="table">
          <div className="tags">
            <Text>Price</Text>
          </div>
          {this.props.compare.map(item => (
            <div className="child">
              <Text>{item.price}</Text>
            </div>
          ))}
        </div>
        <div className="table">
          <div className="tags">
            <Text>Condition</Text>
          </div>
          {this.props.compare.map(item => (
            <div className="child" style={{ backgroundColor: item.color }}>
              <Text>{item.condition}</Text>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Table;
