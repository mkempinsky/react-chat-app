import React from 'react';
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
import Layout from '../Layout';
import ChatIcon from '../Svgs/chatIcon';

class Register extends React.Component {
    state = {
        formData: {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        loading: false,
        usersRef: firebase.database().ref('users')
    };
    isFormValid = () => {
        const {password, passwordConfirm} = this.state.formData;
        let error;

        if (isFormEmpty(this.state.formData)) {
            error = 'Please enter all fields.';
        } else if (password.length < 6 || passwordConfirm < 6) {
            error = 'Password must be at least 6 characters.';
        } else if (password !== passwordConfirm) {
            error = 'Passwords do not match.';
        } else {
            return true;
        }
        this.setState({error});
        return false;
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
        if (!this.isFormValid()) {
            return;
        }
        this.setState({
            loading: true
        });
        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.formData.email,
                this.state.formData.password
            )
            .then(createdUser => {
                createdUser.user
                    .updateProfile({
                        displayName: this.state.formData.username,
                        photoURL: `http://gravatar.com/avatar/${md5(
                            createdUser.user.email
                        )}?d=identicon`
                    })
                    .then(() => {
                        this.saveUser(createdUser).then(() => {
                            console.log('user saved');
                        });
                    })
                    .then(() => {
                        this.setState({
                            loading: false,
                            formData: {
                                username: '',
                                email: '',
                                password: '',
                                passwordConfirm: ''
                            }
                        });
                    })
                    .catch(e => {
                        console.error(e);
                        this.setState({
                            error: e.message,
                            loading: false
                        });
                    });
            })
            .catch(e => {
                this.setState(prevState => ({
                    ...prevState,
                    error: e.message,
                    loading: false
                }));
            });
    };

    saveUser = createdUser => {
        return this.state.usersRef.child(createdUser.user.uid).set({
            name: createdUser.user.displayName,
            avatar: createdUser.user.photoURL
        });
    };

    render() {
        const {username, email, password, passwordConfirm} = this.state.formData;
        return (
            <Layout>
                <div className="app register">
                    <MaxWidth>
                        <ChatIcon />
                        <Card style={{backgroundColor: '#fff'}}>
                            <h2 style={{color: gray(300)}}>Register for Chat</h2>
                            {this.state.error && (
                                <p className="error-message">{this.state.error}</p>
                            )}
                            <Form onSubmit={this.handleSubmit}>
                                <FlexContainer>
                                    <Input
                                        name="username"
                                        type="text"
                                        placeholder="chatterbox"
                                        label="Username"
                                        value={username}
                                        onChange={this.handleChange}
                                    />
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
                                    <Input
                                        name="passwordConfirm"
                                        type="password"
                                        placeholder="password"
                                        label="Confirm Password"
                                        value={passwordConfirm}
                                        onChange={this.handleChange}
                                    />
                                </FlexContainer>
                                <FlexContainer>
                                    <Button
                                        style={{marginTop: '20px'}}
                                        type="submit"
                                        theme="green"
                                        disabled={this.state.loading}>
                                        {this.state.loading ? <LoadingSvg /> : 'Sign Up'}
                                    </Button>
                                </FlexContainer>
                            </Form>
                            <p style={{textAlign: 'center', fontSize: '12px'}}>
                                Already a user? <Link to="/login">Login</Link>
                            </p>
                        </Card>
                    </MaxWidth>
                    <style jsx="true">
                        {`
                            .register {
                                display: flex;
                                align-items: center;
                                background-image: linear-gradient(
                                    to left top,
                                    ${gradient(150)}
                                );
                            }
                        `}
                    </style>
                </div>
            </Layout>
        );
    }
}

export default Register;
