import React from 'react';
import styled from 'styled-components';
import { Badge } from 'reactstrap';

import { NOT_A_FIT, IN_REVIEW } from '../../../constants/statuses';

interface Props {
    status: string;
}

const Status = styled(Badge)`
    padding: 0.35rem 0.75rem;
`;

const CandidateCardStatus = ({ status }: Props) => {
    if (status === '') {
        return null;
    }

    switch (status) {
        case NOT_A_FIT:
            return <Status color="danger">{status.toUpperCase()}</Status>;
        case IN_REVIEW:
            return <Status color="primary">{status.toUpperCase()}</Status>;
        default: {
            return <Status>{status.toUpperCase()}</Status>;
        }
    }
};

export default CandidateCardStatus;
