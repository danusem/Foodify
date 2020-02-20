import React, { Component } from 'react';

import styles from './LoginForm.module.css';

class LoginForm extends Component {

    state = this.getInitalState();

    getInitalState() {
        return {
            email: '',
            password: ''
        };
    }

    handleChange = e => {
        this.setState ({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState(this.getInitalState());
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset>
                    <legend>Login Form</legend>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <button type="submit">Login</button>

                </fieldset>
            </form>
        );
    }
}

export default LoginForm;