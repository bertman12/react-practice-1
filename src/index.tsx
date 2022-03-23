import  ReactDOM  from "react-dom";

//app is our component?
const App = () => {
    return( 
    <div>
        <h1>Hi There!</h1>
    </div>
    );
}

ReactDOM.render(<App></App>, document.querySelector('#root'));
