import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();

    const data = await dispatch(signUp(username, email, password, repeatPassword));
    if (data) {
      setErrors(data)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/main' />;
  }

  return (
    <div id='signup-form-container'>
      <form id='signup-form-main' onSubmit={onSignUp}>
        <div id="signup-title">
          <h2>Sign Up</h2>
        </div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          className='form-input'
        ></input>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className='form-input'
        ></input>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className='form-input'
        ></input>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className='form-input'
        ></input>
        <button id='signup-form-submit-btn' type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
