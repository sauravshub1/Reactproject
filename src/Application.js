import React from 'react';

class Application extends React.Component{
    constructor(props)
    {super(props);

    this.state ={
        count :0
    }
}

handleClick=() =>
{
    this.setState({count: this.state.count + 1});
}

render(){
    let {count} = this.state;
    return(
        <div>
            <h1> You the button {count} times</h1>
            <span>
                <button onClick={() => this.handleClick}>Click</button>
            </span>
        </div>

    )
}
}
export default Application;                  