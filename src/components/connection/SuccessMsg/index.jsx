import './succesMsg.css'

const SuccessMessage = ({ setShowSuccess }) => {
  return (
    <div className="success-modal-overlay flex justify-center items-center h-screen">
      <div
        className="success-modal-content"
        
      >
        <div className="bubble-bg">
          <div className="moving-circle bg-purple-600" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
          <div className="moving-circle bg-pink-500" style={{ top: '40%', left: '60%', animationDelay: '3s' }} />
          <div className="moving-circle bg-purple-600" style={{ top: '70%', left: '30%', animationDelay: '6s' }} />
          <div className="moving-circle bg-pink-500" style={{ top: '30%', left: '90%', animationDelay: '6s' }} />
        </div>

        <div className="modal-body">
          <div className="icon">
            <i className="fa fa-check text-success fs-1"></i>
          </div>
          <div className="title">Awesome !</div>
          <div className="message">Our team member will get in touch with you.</div>
          <button className="confirm-button" onClick={() => setShowSuccess(false)}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
