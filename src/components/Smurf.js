import React from 'react';



class Smurf extends React.Component {
        render() {
        const {smurf} = this.props;

        return(<div data-testid="smurf" className="card">
                <h2 className='card-name'>Name: {smurf.name}</h2>
                <h2 className='card-position'>Position:{smurf.position}</h2>
                <h2 className='card-height'>Height: {smurf.height}</h2>
                <h2 className='card-description'>Description:{smurf.description}</h2>
        </div>);
    }
}


    

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.



// const mapStateToProps =(state) => {
//     return{
//         smurfs: state.smurfs,
//         isLoading: state.isLoading,
//         error: state.error
//     }
// }