import * as React from 'react';
import { insertIf } from '../utils/array-utils';
export interface HelloProps {
    compiler: string;
    framework: string;
    married: boolean;
}

export const Hello = (props: HelloProps) => {
    const { married, compiler, framework } = props;
    const data = [
        'Bill',
        'Charlie',
        'Percy',
        'Fred',
        'George',
        'Ron',
        ...insertIf(married, 'Harry'),
        'Ginny',
    ];

    return (
        <div className="some wrapper">
            <h1>
                Hello from {compiler} and {framework}!
            </h1>

            <h2>The Weasly family kids are {data.join(', ')}</h2>
        </div>
    );
};
