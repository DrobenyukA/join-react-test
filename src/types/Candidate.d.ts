export interface Candidate {
    fullName: string;
    email: string;
    password: string;
    phone?: string;
    avatar: string;
    applied_on: string;
    state: string;
}

export interface Application {
    [index: string]: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    agree: string;
};
