import React from 'react';
import styled from 'styled-components';
import { Form, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';

import { Application } from '../../../types';

const Submit = styled(Button)`
    display: block;
    width: 100%;
    margin: 1rem 0;
`;

const Disclaimer = styled.p`
    margin: 1rem 0;
`;

interface Props {
    onSubmit: (fields: Application) => void;
}

const ApplicantScreenForm = ({ onSubmit }: Props) => {
    const handleSubmit = React.useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            const form = e.target as HTMLFormElement;
            e.preventDefault();
            onSubmit(
                ['email', 'password', 'firstName', 'lastName', 'phone', 'agree'].reduce((result, fieldName) => {
                    const formField = form.querySelector(`input[name='${fieldName}']`);
                    if (formField) {
                        result[fieldName] = (formField as HTMLInputElement).value;
                    } else {
                        result[fieldName] = '';
                    }
                    return result;
                }, {} as Application),
            );
        },
        [onSubmit],
    );
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label htmlFor="email">Your E-mail</Label>
                <Input id="email" name="email" type="email" />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Set a password</Label>
                <Input id="password" name="password" type="password" />
            </FormGroup>
            <Row>
                <Col>
                    <FormGroup>
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" name="firstName" type="text" />
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" name="lastName" type="text" />
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="text" pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$" />
            </FormGroup>
            <FormGroup check={true}>
                <Label check={true}>
                    <Input type="checkbox" name="agree" required={true} />I agree to JOIN`s{' '}
                    <a href="#">terms and conditions</a> as well as the <a href="#">privacy policy</a>
                </Label>
            </FormGroup>
            <Submit type="submit" color="primary" className="text-center">
                Apply now for this jon
            </Submit>
            <Disclaimer>No worries, you can add document later in the process.</Disclaimer>
        </Form>
    );
};

export default ApplicantScreenForm;
