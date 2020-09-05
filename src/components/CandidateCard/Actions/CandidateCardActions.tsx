import React from 'react';
import styled from 'styled-components';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { Candidate } from '../../../types';
import statuses from '../../../constants/statuses';

interface Props {
    candidate: Candidate;
    onDelete: (candidate: Candidate) => void;
    onStatusChange: (candidate: Candidate) => void;
}

const CandidateCardActionsButton = styled(ButtonDropdown)`
    padding-right: 1.25rem;
`;

const CandidateCardActionsMenu = styled(DropdownMenu)`
    left: auto !important;
    right: -35px !important;
`;

const CandidateCardActions = ({ candidate, onDelete, onStatusChange }: Props) => {
    const [isOpened, setOpenStatus] = React.useState(false);
    const availableStatuses = React.useMemo(() => statuses.filter((status) => status !== candidate.state), [candidate]);

    const toggle = React.useCallback(() => setOpenStatus((prevState) => !prevState), []);
    const handleDelete = React.useCallback(() => onDelete(candidate), [candidate]);

    return (
        <CandidateCardActionsButton direction="up" isOpen={isOpened} toggle={toggle}>
            <DropdownToggle caret={false} color="link">
                ...
            </DropdownToggle>
            <CandidateCardActionsMenu>
                <DropdownItem header={true}>Change status:</DropdownItem>
                {availableStatuses.map((status) => (
                    <DropdownItem key={status} onClick={() => onStatusChange({ ...candidate, state: status })}>
                        {status}
                    </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem onClick={handleDelete}>Delete</DropdownItem>
            </CandidateCardActionsMenu>
        </CandidateCardActionsButton>
    );
};

export default CandidateCardActions;
