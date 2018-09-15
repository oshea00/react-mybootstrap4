import React from 'react'

class FocusedForm extends React.Component {
    constructor(props) {
        super(props);
        this.fieldRef = React.createRef();
    }

    componentDidMount() {
        this.fieldRef.current.focus();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.fieldRef.current.value);
    }

    render() {
        return (
            <form onSubmit={e=>this.handleSubmit(e)}>
                <label htmlFor="name">Name:</label>
                <input id="name" type="text" placeholder="Name" ref={this.fieldRef}/> 
                <button type="submit">GO</button>
            </form>
        );
    }
}

export default FocusedForm;
