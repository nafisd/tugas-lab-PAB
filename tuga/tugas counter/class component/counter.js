class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    tambah = () => {
      this.setState(setState => ({
        count: setState.count + 1
      }));
    };

    kurang = () => {
      this.setState(setState => ({
        count: setState.count - 1
      }));
    };

    render() {
      return (
        <div>
          <h2>Counter Class Component</h2>
          <h1>{this.state.count}</h1>
            <div>
              <button onClick={this.kurang}>-1</button>
              <button onClick={this.tambah}>+1</button>
            </div>
        </div>
      );
    }
  }

  ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />);
