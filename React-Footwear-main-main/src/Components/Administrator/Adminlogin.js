import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Adminlogin() {

  const [name, setName] = useState("")
  const [pass, setPass] = useState("")

  let navigate = useNavigate();


  function submit() {

    if (name === "admin" && pass === "admin") {
      localStorage.setItem("name", name)
      localStorage.setItem("pass", pass)

      navigate("/admin")

    } else {
      alert("Something Went Wrong")
    }
  }
  return (
    <div className='App'>
      <>

        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid" alt="Sample image" />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>

                  <h1 className='text-center'>Login Form </h1>
                  <br />


                  <div className="form-outline text-center mb-4">
                    <input type="email" id="form3Example3" onChange={(e) => setName(e.target.value)} className="form-control form-control-lg"
                      placeholder="Enter a valid email address" />
                  </div>

                  <div className="form-outline text-center  mb-3">
                    <input type="password" id="form3Example4" onChange={(e) => setPass(e.target.value)} className="form-control form-control-lg"
                      placeholder="Enter password" />
                  </div>



                  <div className="text-center text-lg-start mt-4 pt-2">




                    <button onClick={(e) => submit(e.target.value)} type="button" className="btn btn-primary btn-lg "
                      style={{ "padding-left": "2.5rem; padding-right: 2.5rem; " }} >  Login</button>


                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>

      </>
    </div>
  )
}

export default Adminlogin