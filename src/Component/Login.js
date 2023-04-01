import React from 'react'

const Login = () => {
  return (
    <div>
          <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-20">
      <input type="text"  className="form-control" id="staticEmail"  />

    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-20">
      <input type="password" className="form-control" id="inputPassword" />

    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Login </button>
  </div>
    </div>
  )
}

export default Login