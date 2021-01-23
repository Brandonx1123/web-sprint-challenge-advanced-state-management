import React from 'react';
import {connect} from 'react-redux'
import {postSmurf} from "../actions/index"

class AddForm extends React.Component {

    state = {
        id:'',
        name:'',
        position:'',
        nickname:'',
        description:''
    }
handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value,
            [e.target.position]:e.target.value,
            [e.target.height]:e.target.value,
            [e.target.description]:e.target.value,
        })
}

handleSubmit = e => {
    e.preventDefault()
    const newSmurf =this.state
   this.props.postSmurf(newSmurf)
   this.setState({
        id:'',
        name:'',
        position:'',
        nickname:'',
        description:''
    })
}


    render() {
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={this.handleChange} 
                    name="name" 
                    id="name" 
                    value={this.name}
                    placeholder=""
                    />
                <label htmlFor="position">Position:</label><br/>
                <input
                onChange={this.handleChange}
                name="position"
                type="text"
                id="position"
                placeholder=""
                value={this.position}
                >
                </input>

                <label htmlFor="nickname">Nickname:</label><br/>
                <input
                onChange={this.handleChange}
                name="nickname"
                type="text"
                id="nickname"
                placeholder=""
                value={this.nickname}
                >
                </input>

                <label htmlFor="description">Description:</label><br/>
                <input
                onChange={this.handleChange}
                name="description"
                type="text"
                id="position"
                placeholder=""
                value={this.description}
                >
                </input>
                </div>


                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error:{this.props.error} </div>
                <button type='submit'>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) =>({
    smurfs:state.smurfs,
    error:state.error,
    isLoading:state.isLoading
})

export default connect (mapStateToProps,{postSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.