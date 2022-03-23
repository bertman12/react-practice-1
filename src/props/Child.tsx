interface ChildProps {
    color: string;
}

export const Child = ({ color }: ChildProps) => {
    return <div>{color}</div>;
}

//This tells typescript that this is a react function component, allowing typescript to access extra react properties
//This '<ChildProps>' tells typescript that our ChildAsFC component will take properties of type ChildProps, as defined by our interface.
//That is the same as using a type annotation on the function paremeter
//We also get to work with more react properties on the component
//Its optional to use this style of component defintion if you want to make use of the extra react component properties
//FC means function component, you could write React.FunctionComponent<type> ...
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>
}


