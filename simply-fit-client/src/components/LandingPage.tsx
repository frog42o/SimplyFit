function LandingPage() {
  return (
    <div className="vw-100 vh-100 d-flex mx-auto justify-content-center align-items-center">
      <div className="text-center">
        <h1>Welcome to SimplyFit!</h1>
        <h2 className="mt-3">Let's get started.</h2>
        <button className="btn btn-primary mt-3">Sign Up</button>
        <h5 className = "mt-3">
          Existing member? <a href="">Log in</a>
        </h5>
      </div>
    </div>
  );
}
export default LandingPage;
