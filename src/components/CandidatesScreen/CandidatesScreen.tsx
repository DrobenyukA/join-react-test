import React from 'react';

import { Candidate } from '../../types';
import CandidatesCard from '../CandidateCard';
import { readExternalCandidates } from '../../api/candidates';

const CandidatesScreen = () => {
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
        readExternalCandidates().then(setCandidates);
    }, []);

    return (
        <div>
            {candidates.map((candidate) => (
                <CandidatesCard
                    key={candidate.email}
                    data={candidate}
                    onDelete={handleDelete}
                    onStatusChange={handleStatusChange}
                />
            ))}
        </div>
    );
};

export default CandidatesScreen;
