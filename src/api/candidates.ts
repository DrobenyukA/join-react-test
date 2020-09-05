import { Candidate } from '../types';
import mock from './candidates.json';

export const readExternalCandidates = () =>
    fetch('https://candidates.free.beeceptor.com/api/candidate')
        .then((response) => {
            console.log(response);
            if (response.status < 200 && response.status >= 400) {
                throw new Error(response.statusText);
            }
            if (response.ok) {
                return response.json() as Promise<Candidate[]>;
            }
            throw new Error('Request error');
        })
        .catch(() => mock as Candidate[]);
