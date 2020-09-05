/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import { Candidate } from '../../types';
import PersonCard from '../PersonCard';
import CandidateCardStatus from './Status';
import CandidateScore from './Score';
import CandidateCardActions from './Actions';

interface Props {
    data: Candidate;
    onDelete: (candidate: Candidate) => void;
    onStatusChange: (candidate: Candidate) => void;
}

const CandidateCardWrapper = styled(Container)`
    margin: 1rem 0;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;
const AppliedText = styled.p`
    margin: 0.5rem 0;
`;
const AppliedDate = styled.span`
    color: ${(props) => props.theme.primaryTextColor};
    font-weight: bold;
`;
const CandidateCard: React.FC<Props> = ({ data, onDelete, onStatusChange, ...props }) => (
    <CandidateCardWrapper fluid={true} {...props}>
        <Row>
            <Col xs="9" sm="10" className="pr-0">
                <PersonCard name={data.fullName} subtitle={data.email} image={data.avatar} />
                <Container fluid={true}>
                    <Row>
                        <Col xs={{ size: 10, offset: 2 }} sm={{ size: 9, offset: 3 }} className="pr-0">
                            <CandidateCardStatus status={data.state} />
                            <AppliedText>
                                applied on <AppliedDate>{data.applied_on}</AppliedDate>
                            </AppliedText>
                        </Col>
                    </Row>
                </Container>
            </Col>
            <Col xs="3" sm="2" className="text-right d-flex flex-column justify-content-between">
                <CandidateScore data={data} />
                <CandidateCardActions candidate={data} onDelete={onDelete} onStatusChange={onStatusChange} />
            </Col>
        </Row>
    </CandidateCardWrapper>
);

CandidateCard.defaultProps = {
    data: {} as Candidate,
};

export default CandidateCard;
