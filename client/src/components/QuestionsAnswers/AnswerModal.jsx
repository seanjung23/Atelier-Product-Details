import React from 'react';

const AnswerModal = ({productInfo, question, changeShowAnswerModal}) => {
  return (
    // <div>hi</div>
    <form onsubmit={() => postQuestion()}>
      <div className="answer-modal">

        <div className="answer-modal-content">

          <div className="answer-modal-header">
            <h4 className="answer-modal-title">Submit Your Answer</h4>
            <h6 className="answer-modal-subtitle">{productInfo.name}: {question.question_body}</h6>
          </div>

          <div className="answer-modal-body">

            <div>
              <span>*</span> Your Answer:
              <textarea className="answer-modal-textbox" maxlength="1000" required placeholder="This is the Modal Content!"></textarea>
            </div>

            <div>
              <label>
                <span>*</span> What is your nickname:&nbsp;
                <input className="answer-modal-nickname" type="text" maxlength="60" required placeholder="Example: jack543!"/>&nbsp;
              </label>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>

            <div>
              <label>
                <span>*</span> Your email:&nbsp;
                <input className="answer-modal-email" type="email" maxlength="60" required placeholder="Why did you like the product or not?"/>
              </label>
              <p>For authentication reasons, you will not be emailed</p>
            </div>

            <div>
              Upload Your Photos:
              <button type="button">Upload</button>
            </div>

          </div>

          <div className="answer-modal-footer">
            <button onClick={() => changeShowAnswerModal()}>Cancel</button>&nbsp;
            <button type="submit">Submit Your Answer</button>
          </div>

        </div>

      </div>
    </form>
  )
};

export default AnswerModal;