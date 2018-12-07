import React from 'react';
import { connect } from 'react-redux';
import { removeArticle } from '../actions';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
  return {
    removeArticle: id => dispatch(removeArticle(id))
  };
};

const connectedList = ({ articles, removeArticle }) => {
  const removeHandler = id => {
    removeArticle(id);
  };
  return (
    <ul className="list-group list-group-flush">
      {articles.map(el => (
        <li className="list-group-item" key={el.id}>
          <h4>{el.title}</h4>
          <p>{el.description}</p>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={removeHandler.bind(this, el.id)}
          >
            Delete
          </button>

          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={removeHandler.bind(this, el.id)}
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

const List = connect(
  mapStateToProps,
  mapDispatchToProps
)(connectedList);
export default List;
