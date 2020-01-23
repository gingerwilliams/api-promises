import * as React from "react";

interface HelloProps {
    name: string;
    compiler: string;
    framework: string;
}

export const Hello: React.FC<HelloProps> = props => {
    return (
        <h1>
            Hello {props.name} from {props.compiler} and {props.framework}!
        </h1>
    );
};

// export const Hello: React.FunctionComponent<HelloProps> = props => {}
// export const Hello: React.FunctionComponent<{name: string, compiler:string, framework:string}> = (props) => {}
// export const Hello: React.FC = (props: HelloProps) => {}
// export const Hello = (props: HelloProps) => {}
