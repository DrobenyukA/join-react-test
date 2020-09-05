import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import { Candidate } from '../../../types';
import { defaultTheme } from '../../../styles/themes';

interface Props {
    data: Candidate;
}

interface Ranks {
    [index: string]: number;
}

const CandidatesScoreWrapper = styled(CircularProgressbar)`
    width: 80px;
    height: 80px;
    margin-left: auto;
`;

function calculateScore(candidate: Candidate) {
    const ranks: Ranks = {
        fullName: 10,
        email: 10,
        password: 10,
        phone: 20,
        photo: 50,
    };
    return Object.keys(candidate).reduce((score, fieldName) => {
        if (candidate[fieldName as keyof Candidate] && ranks[fieldName]) {
            return score + ranks[fieldName];
        }
        return score;
    }, 0);
}

function getScoreColor(score: number): string {
    if (score >= 50) {
        return defaultTheme.primary;
    }
    if (score >= 30) {
        return defaultTheme.warning;
    }
    return defaultTheme.danger;
}

const CandidatesScore = ({ data }: Props) => {
    const score = React.useMemo(() => calculateScore(data), [data]);
    const color = React.useMemo(() => getScoreColor(score), [score]);

    const styles = React.useMemo(() => {
        return buildStyles({ pathColor: color, textColor: defaultTheme.primaryTextColor });
    }, [color]);

    return <CandidatesScoreWrapper styles={styles} value={score} text={`${score}%`} />;
};

export default CandidatesScore;
