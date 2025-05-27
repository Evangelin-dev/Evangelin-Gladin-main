import './succesMsg.css'
const SuccessMessage = () => {
  return (
    <>
      <div
        className={`modal fade zoom `}
        id="successMessage"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="successMessageLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className={`modal-content border border-1 rounded-2`}
            style={{
              boxShadow: "0 0 10px white !important",
              background:
                "linear-gradient(88deg,#2e6179 -11.16%, #6dd0de 94.89%)",
            }}
          >
            <div className="relative bg-purple-700 text-white rounded-lg overflow-hidden p-6 text-center">
              <div className="absolute inset-0 pointer-events-none">
                <div className="moving-circle bg-purple-600" style={{ top: '10%', left: '15%', animationDelay: '0s' }} />
                <div className="moving-circle bg-pink-500" style={{ top: '40%', left: '60%', animationDelay: '3s' }} />
                <div className="moving-circle bg-purple-600" style={{ top: '70%', left: '30%', animationDelay: '6s' }} />
                <div className="moving-circle bg-pink-500" style={{ top: '30%', left: '90%', animationDelay: '6s' }} />
              </div>
              <div className="relative z-10">
                <div className="fs-1 text-success p-3">
                  <span className="step">
                    <i className="fa fa-check" aria-hidden="true"></i>
                  </span>
                </div>
                <div className="fs-3 pt-2 font-bold">Awesome !</div>
                <div className="py-3 fs-5">
                  Our Team member will get in touch with you.
                </div>
                <div className="py-2 pb-4">
                  <button
                    type="button"
                    className="btn btn-outline-light w-50"
                    data-bs-dismiss="modal"
                  >
                    Okay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessMessage;
