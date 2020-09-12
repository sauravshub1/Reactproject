import React from 'react';

class Application extends React.Component
{
    constructor(props)
    {super();

    this.state ={
        count :0,
        overTen: false
    }
}

handleClick =() =>
{
    this.setState({count: this.state.count + 1});

}

componentDidUpdate(props,state)
{ if(this.state.count >10 && this.state.count !== state.count && !this.state.overTen)
    {
        console.log("Updating over ten");
    this.setState({overTen: true})
    }
}

render(){
    let {count} = this.state;
    return(
        <div>
            <h1> You the button {count} times</h1>
            {(this.state.overTen)?
                    <h2>Beat score of 10</h2>
            :null
            }

            <span>
                <button onClick={this.handleClick}>Click</button>
            </span>
        </div>

    )
}
}
export default Application;                  