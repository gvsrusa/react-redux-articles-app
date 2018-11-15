import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';

import { addArticle } from '../actions';

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
    };
  }
  handleTitle = event => {
    this.setState({ ...this.state, title: event.target.value });
  };
  handleDescription = event => {
    this.setState({ ...this.state, description: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { title, description } = this.state;
    if (!title) return;
    const id = uuidv1();

    this.props.addArticle({ title, id, description });

    this.setState({
      title: '',
      description: ''
    });
  };
  render() {
    const { title, description } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            // id="title"
            value={title}
            onChange={this.handleTitle}
          />
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            // id="title"
            value={description}
            onChange={this.handleDescription}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
