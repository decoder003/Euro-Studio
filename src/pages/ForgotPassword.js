import React, { useRef, useState } from 'react';
import './ForgotPassword.css';
import { IoIosEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';
import { motion } from 'framer-motion';

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
export default function ForgotPassword() {
  const [forgotPassword, setForgotPassword] = useState();
  const [pass, setPass] = useState({});
  const [rePass, setRePass] = useState({});
  const [eye, setEye] = useState(false);
  const reEnterPassRef = useRef();
  function forgotPasswordHandler1(e) {
    setPass(e.target.value);
  }
  function forgotPasswordHandler2(e) {
    setRePass(e.target.value);
  }
  function forgotSubmit(e) {
    e.preventDefault();
    setForgotPassword([`NewPassword : ${pass} ,  ReNewPassword : ${rePass}`]);
    console.log(forgotPassword);
  }
  function eyeHandler() {
    setEye(!eye);
  }

  function inputHandler() {
    if (pass.length && rePass.length != 0) {
      if (pass != rePass) {
        reEnterPassRef.current.style.color = 'red';
      } else {
        reEnterPassRef.current.style.color = 'green';
      }
    }
  }
  inputHandler();
  return (
    <section className="forgot-password-section">
      <div className="container forgot-password-container">
        <motion.form
          onSubmit={forgotSubmit}
          className="forgot-password-form"
          variants={signInVariants}
          initial="hidden"
          animate="visible">
          <motion.div className="form-group mt-3 forgot-password-section-group-1" variants={signInSubVariants}>
            <label className="form-label">New Password</label>
            <div className="input-group">
              <input
                name="newpassword"
                type={!eye ? 'password' : 'type'}
                className="form-control"
                aria-describedby="pass"
                onChange={forgotPasswordHandler1}
              />
              <span className="input-group-text" id="pass" onClick={eyeHandler}>
                {eye ? <IoIosEye className="eye" /> : <IoIosEyeOff className="eye" />}
              </span>
            </div>
          </motion.div>
          <motion.div className="form-group mt-3 forgot-password-section-group-2" variants={signInSubVariants}>
            <label className="form-label">Re Enter New Password</label>
            <input
              ref={reEnterPassRef}
              name="renewpassword"
              type="password"
              className="form-control"
              onChange={forgotPasswordHandler2}
            />
          </motion.div>
          <motion.div className="d-flex justify-content-center align-items-center" variants={signInSubVariants}>
            <button className="btn mt-4 forgot-password-button">Submit</button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
