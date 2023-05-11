import React from 'react';

const QuestionModal = ({productInfo, changeShowModal}) => {
  return (
    <div className="question-modal">
      <div className="question-modal-content">
        <div className="question-modal-header">
          <h4 className="question-modal-title">Ask Your Question</h4>
          <h6 className="question-modal-subtitle">About the {productInfo.name}</h6>
        </div>
        <div className="question-modal-body">
          <input type="text" placeholder="This is the Modal Content!"/>
        </div>
        <div className="question-modal-footer">
          <button onClick={() => changeShowModal()}>Close</button>
        </div>
      </div>
    </div>
  )
};

export default QuestionModal;