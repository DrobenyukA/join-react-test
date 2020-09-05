import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

import { Candidate } from '../../types';
import CandidatesCard from '../CandidateCard';
import { readExternalCandidates } from '../../api/candidates';

const SpinnerBackdrop = styled.div`
    position: fixed;
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.125);
`;
const CandidatesScreen = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [candidates, setCandidates] = React.useState<Candidate[]>([]);

    const handleStatusChange = React.useCallback(
        (candidate: Candidate) =>
            setCandidates((prevState) =>
                prevState.map((item) => {
                    if (candidate.email === item.email) {
                        return candidate;
                    }
                    return item;
                }),
            ),
        [],
    );

    const handleDelete = React.useCallback(
        (candidate: Candidate) =>
            setCandidates((prevState) => prevState.filter((item) => item.email !== candidate.email)),
        [],
    );

    React.useEffect(() => {
        setLoading(true);
        readExternalCandidates()
            .then(setCandidates)
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {isLoading && (
                <SpinnerBackdrop>
                    <Spinner />
                </SpinnerBackdrop>
            )}
            {candidates.map((candidate) => (
                <CandidatesCard
                    key={candidate.email}
                    data={candidate}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                />
            ))}
        </>
    );
};

export default CandidatesScreen;
