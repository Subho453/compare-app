import React, { Component } from "react";
import { connect } from 'react-redux';
import { dataCompare } from '../actions';
import { Typography, Col, Card } from "antd";
const { Text } = Typography;


class Product extends Component {
  state = {};
  render() {
    console.log(this.props.clicked);
    return (
      <Col className="card" span={5} style={{ display: "flex", margin: 20 }}>
        <Card
          style={{ width: "100%" }}
          cover={
            <div className="product">
              <img
                alt="example"
                src={`${this.props.product.image}`}
                width="100%"
              />
              <div
                className="add"
                style={{ display: this.props.clicked ? "none" : "block" }}
              ></div>
              <div className="overlay ">
                <input
                  type="button"
                  className="btn"
                  value={this.props.clicked ? "COMPARE" : "REMOVE"}
                  onClick={() => {
                    this.props.dataCompare(this.props.product);
                  }}
                />
              </div>
            </div>
          }
        >
          <div className="details">
            <div>
              <Text>{this.props.product.name}</Text>
              <div style={{ fontSize: 15 }}>
                <Text type="secondary">{this.props.product.desc}</Text>
              </div>
            </div>
            <Text style={{ color: "green" }}>{this.props.product.price}</Text>
          </div>
        </Card>
      </Col>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dataCompare: () => dispatch(dataCompare(ownProps.product)),
});

export default connect(null, mapDispatchToProps)(Product);
