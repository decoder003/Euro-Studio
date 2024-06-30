import React, { useState, useRef, Fragment } from 'react';
import { IoIosEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'framer-motion';
import './Sign.css';

const signInVariants = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 200,
      when: 'beforeChildren',
    },
  },
};
const signInSubVariants = {
  hidden: {
    scale: 0.9,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 700,
    },
  },
};

export default function Sign() {
  const [login, setLogin] = useState(false);
  const [eye, setEye] = useState(false);
  const [page, setPage] = useState(false);
  const [emailValue, setEmailValue] = useState({});
  const [passValue, setPassValue] = useState({});

  function eyeHandler() {
    setEye(!eye);
  }
  function signInHandler(e) {
    setPage(!page);
    e.preventDefault();
  }
  function emailValueHandler(e) {
    setEmailValue(e.target.value);
  }
  function passValueHandler(e) {
    setPassValue(e.target.value);
  }

  return (
    <Fragment>
      {page ? (
        <SignUp />
      ) : (
        <section className="login-section">
          <div className="container py-5 d-grid justify-content-center align-content-center">
            <motion.div className="login-col" variants={signInVariants} initial="hidden" animate="visible">
              <h3 className="mt-3">LOGIN</h3>
              <motion.div className="form-group mt-3 form-group-1" variants={signInSubVariants}>
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" onChange={emailValueHandler} />
              </motion.div>
              <motion.div className="form-group mt-3 form-group-2" variants={signInSubVariants}>
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    name="password"
                    type={!eye ? 'password' : 'type'}
                    className="form-control"
                    aria-describedby="pass"
                    onChange={passValueHandler}
                  />
                  <span className="input-group-text" id="pass" onClick={eyeHandler}>
                    {eye ? <IoIosEye className="eye" /> : <IoIosEyeOff className="eye" />}
                  </span>
                </div>
              </motion.div>
              <motion.div className="form-check mt-2" variants={signInSubVariants}>
                <input className="form-check-input" type="checkbox" value="" id="checkBox" />
                <label className="form-check-label" for="checkBox">
                  Remember me?
                </label>
              </motion.div>
              <motion.div className="login-button mt-3" variants={signInSubVariants}>
                <button className="btn buttons" disabled={emailValue.length <= 0 || passValue.length <= 0}>
                  LOGIN
                </button>
              </motion.div>
              <motion.div className="d-flex justify-content-end mt-2" variants={signInSubVariants}>
                <a href="" className="text-decoration-none login-a">
                  Forgot Password?
                </a>
              </motion.div>
              <motion.div className="d-flex mt-3" variants={signInSubVariants}>
                <div className="login-line mt-2"></div>
                <div className="login-or">
                  <div className="mt-2">
                    <p className="text-center">or</p>
                  </div>
                </div>
                <div className="login-line mt-2"></div>
              </motion.div>
              <motion.div className="d-flex justify-content-center mt-3" variants={signInSubVariants}>
                <button className="btn login-continue-with-google">
                  Continue With Google
                  <FcGoogle className="google-icon" />
                </button>
              </motion.div>
              <motion.div className="d-flex justify-content-center  mt-3" variants={signInSubVariants}>
                <p>Need an account?</p>
                <a href="" className="ms-1 text-decoration-none" onClick={(event) => signInHandler(event)}>
                  SIGN UP
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </Fragment>
  );
}

function SignUp() {
  const [eye, setEye] = useState(false);
  const [eye2, setEye2] = useState(false);
  const [email, setEmail] = useState({});
  const [page, setPage] = useState(false);
  const [pass, setPass] = useState({});
  const [newpass, setNewPass] = useState({});
  const newPassRef = useRef();

  function eyeHandler() {
    setEye(!eye);
  }
  function eye2Handler() {
    setEye2(!eye2);
  }
  function signUpHandler(e) {
    setPage(!page);
    e.preventDefault();
  }

  function passHandler(e) {
    setPass(e.target.value);
  }
  function newPassHandler(e) {
    setNewPass(e.target.value);
  }
  function emailHandler(e) {
    setEmail(e.target.value);
  }
  function inputHandler() {
    if (pass.length && newpass.length != 0) {
      if (pass != newpass) {
        newPassRef.current.style.color = 'red';
      } else {
        newPassRef.current.style.color = 'green';
      }
    }
  }
  inputHandler();
  return (
    <Fragment>
      {page ? (
        <Sign />
      ) : (
        <section className="login-section">
          <div className="container py-5 d-grid justify-content-center align-content-center">
            <motion.div className="login-col" variants={signInVariants} initial="hidden" animate="visible">
              <h3 className="mt-3">SIGN UP</h3>
              <motion.div className="form-group mt-3 form-group-1" variants={signInSubVariants}>
                <label className="form-label">Email</label>
                <input name="email" type="email" className="form-control" onChange={emailHandler} />
              </motion.div>
              <motion.div className="form-group mt-3 form-group-2" variants={signInSubVariants}>
                <label className="form-label">Password</label>
                <div className="input-group">
                  <input
                    name="password"
                    type={!eye ? 'password' : 'type'}
                    className="form-control"
                    aria-describedby="pass"
                    onChange={passHandler}
                  />
                  <span className="input-group-text" id="pass" onClick={eyeHandler}>
                    {eye ? <IoIosEye className="eye" /> : <IoIosEyeOff className="eye" />}
                  </span>
                </div>
              </motion.div>
              <motion.div className="form-group mt-3 form-group-2" variants={signInSubVariants}>
                <label className="form-label">Re-Type Password</label>
                <div className="input-group">
                  <input
                    ref={newPassRef}
                    name="password"
                    type={!eye2 ? 'password' : 'type'}
                    className="form-control"
                    aria-describedby="pass"
                    onChange={newPassHandler}
                  />
                  <span className="input-group-text" id="pass" onClick={eye2Handler}>
                    {eye2 ? <IoIosEye className="eye" /> : <IoIosEyeOff className="eye" />}
                  </span>
                </div>
              </motion.div>
              <motion.div className="login-button mt-3" variants={signInSubVariants}>
                <button className="btn buttons" disabled={pass.length <= 0 || email.length <= 0}>
                  SIGN UP
                </button>
              </motion.div>
              <motion.div className="d-flex mt-3" variants={signInSubVariants}>
                <div className="login-line mt-2"></div>
                <div className="login-or">
                  <div className="mt-2">
                    <p className="text-center">or</p>
                  </div>
                </div>
                <div className="login-line mt-2"></div>
              </motion.div>
              <motion.div className="d-flex justify-content-center mt-3" variants={signInSubVariants}>
                <button className="btn login-continue-with-google">
                  Continue With Google
                  <FcGoogle className="google-icon" />
                </button>
              </motion.div>
              <motion.div className="d-flex justify-content-center  mt-3" variants={signInSubVariants}>
                <p>Need an account?</p>
                <a href="" className="ms-1 text-decoration-none" onClick={(event) => signUpHandler(event)}>
                  LOGIN
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </Fragment>
  );
}
