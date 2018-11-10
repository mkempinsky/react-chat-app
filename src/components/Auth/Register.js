import React from 'react';
import Form from '../Form';
import Input from '../Input';
import Card from '../Card';
import FlexContainer from '../FlexContainer';
import Button from '../Button';
import {gray} from '../../lib/styles';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Register extends React.Component {
    handleChange = () => {};
    render() {
        return (
            <div>
                <Card style={{backgroundColor: '#fff'}}>
                    <FontAwesomeIcon icon="stroopwafel" />
                    <h2 style={{color: gray(300)}}>Register for Chat</h2>
                    <Form>
                        <FlexContainer>
                            <Input
                                name="username"
                                type="text"
                                placeholder="chatterbox"
                                label="Username"
                            />
                            <Input
                                name="email"
                                type="text"
                                placeholder="chatter@mail.com"
                                label="Email"
                            />
                            <Input
                                name="password"
                                type="text"
                                placeholder="password"
                                label="Password"
                            />
                            <Input
                                name="passwordConfirm"
                                type="text"
                                placeholder="password"
                                label="Confirm Password"
                            />
                        </FlexContainer>
                        <FlexContainer>
                            <Button>Sign Up</Button>
                        </FlexContainer>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Register;
