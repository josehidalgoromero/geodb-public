import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export class BlogPost extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
  };

  render() {
    const { poster, title, year, link } = this.props;

    return (
      <a href={link}>
        <Card className="cardAnimated">
          <CardImg top width="100%" src={poster} alt={title} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{year}</CardSubtitle>
          </CardBody>
        </Card>
      </a>
    );
  }
}
