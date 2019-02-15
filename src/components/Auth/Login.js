import React from 'react';
import Layout from '../Layout';
import Form from '../Form';
import Input from '../Input';
import Card from '../Card';
import FlexContainer from '../FlexContainer';
import Button from '../Button';
import {gray, blue, gradient} from '../../lib/styles';
import {MaxWidth} from '../MaxWIdth';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import {isFormEmpty, isUsernameValid} from '../../lib/utils';
import md5 from 'md5';
import LoadingSvg from '../Svgs/loading';
import ChatIcon from '../Svgs/chatIcon';

class Login extends React.Component {
    state = {
        formData: {
            email: '',
            password: ''
        },
        loading: false,
        usersRef: firebase.database().ref('users'),
        error: null
    };
    handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState(
            prevState => ({
                formData: {
                    ...prevState.formData,
                    [name]: value
                },
                error: null
            }),
            () => {
                console.log(this.state);
            }
        );
    };
    handleSubmit = e => {
        e.preventDefault();
        if (!this.isFormValid(this.state.formData)) {
            console.log('error');
            return;
        }
        firebase
            .auth()
            .signInWithEmailAndPassword(
                this.state.formData.email,
                this.state.formData.password
            )
            .then(signedInUser => {
                console.log(signedInUser);
            })
            .catch(e => {
                console.error(e);
                // this.setState({
                //     error: e
                // });
            });
    };
    isFormValid = ({email, password}) => email && password;

    render() {
        const {email, password} = this.state.formData;

        return (
            <div>
                <Layout>
                    <div className="app login">
                        <MaxWidth>
                            <ChatIcon />
                            <Card style={{backgroundColor: '#fff', minWidth: '350px'}}>
                                <h2 style={{color: gray(300)}}>Login to Chat</h2>
                                {this.state.error && (
                                    <p className="error-message">{this.state.error}</p>
                                )}
                                <Form onSubmit={this.handleSubmit}>
                                    <Input
                                        name="email"
                                        type="text"
                                        placeholder="chatter@mail.com"
                                        label="Email"
                                        value={email}
                                        onChange={this.handleChange}
                                    />
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="password"
                                        label="Password"
                                        value={password}
                                        onChange={this.handleChange}
                                    />
                                    <FlexContainer>
                                        <Button
                                            style={{marginTop: '20px'}}
                                            type="submit"
                                            theme="blue"
                                            disabled={this.state.loading}>
                                            {this.state.loading ? (
                                                <LoadingSvg />
                                            ) : (
                                                'Log In'
                                            )}
                                        </Button>
                                    </FlexContainer>
                                </Form>
                                <p style={{textAlign: 'center', fontSize: '12px'}}>
                                    Don't have an account?{' '}
                                    <Link to="/register">Register</Link>
                                </p>
                            </Card>
                        </MaxWidth>
                        <style jsx="true">
                            {`
                                .login {
                                    display: flex;
                                    align-items: center;
                                    background-image: linear-gradient(
                                        to left top,
                                        ${gradient(200)}
                                    );
                                }
                            `}
                        </style>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default Login;
