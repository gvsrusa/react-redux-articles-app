import React, { Component } from "react";
import { connect } from "react-redux";

import EditForm from "./EditForm";
import { removeArticle } from "../actions";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id))
    // editArticle: article => dispatch(editArticle(article))
  };
};

class connectedList extends Component {
  state = {
    update: false
  };
  removeHandler = id => {
    this.props.removeArticle(id);
  };
  editHandler = () => {
    this.setState({ update: true });
  };
  saveHandler = () => {
    this.setState({ update: false})
  }
  render() {
    const { articles } = this.props;
    const { update } = this.state;
    return (
      <ul className="list-group list-group-flush">
        {articles.map(article =>
          !update ? (
            <li className="list-group-item" key={article.id}>
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.removeHandler.bind(this, article.id)}
              >
                Delete
              </button>

              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={this.editHandler.bind(this, article)}
              >
                Edit
              </button>
            </li>
          ) : (
            <EditForm article={article} saveHandler={this.saveHandler}/>
          )
        )}
      </ul>
    );
  }
}

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedList);
export default List;
