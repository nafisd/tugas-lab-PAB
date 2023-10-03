const FunctionalCount = () => {
    const [count, setCount] = React.useState(0);

    const tambah = () => {
        setCount(count + 1);
    };

    const kurang = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h2>Counter Functional Component</h2>
            <h1>{count}</h1>
            <div>
                <button onClick={kurang}>-1</button>
                <button onClick={tambah}>+1</button>
            </div>
        </div>
    );
}

const myApp = <FunctionalCount/>

ReactDOM.createRoot(document.getElementById('root')).render(myApp);
