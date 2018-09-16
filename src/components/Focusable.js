import React from 'react'

class FocusedForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
    }

    componentDidMount() {
        this.fieldRef.current.focus();
    }

    handleClick(e) {
        e.preventDefault();
        console.log('clicked!');
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.fieldRef.current.value);
    }

    render() {
        return (
            <div>
            <form onSubmit={e=>this.handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" ref={this.fieldRef}/> 
            </form>
            <a onClick={(e)=>this.handleClick(e)} >Click Me</a>
            </div>
        );
    }
}

export default FocusedForm;
