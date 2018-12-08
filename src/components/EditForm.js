import React from "react";

const EditForm = props => {
  const { article, saveHandler } = props;
    const handleSubmit = () => {
        saveHandler();
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={article.title}
        />
        <label>Description</label>
        <textarea
          type="text"
          className="form-control"
          value={article.description}
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg">
        SAVE
      </button>
    </form>
  );
};

export default EditForm;
