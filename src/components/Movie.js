import React from 'react';
import {connect} from 'react-redux';
import {getMovie, editMovie,createMovie} from '../action';
import MovieForm from "./MovieForm";

class Movie extends React.Component {
    componentDidMount = () => {
        if (this.props.match.params.id)
            this.props.getMovie(this.props.match.params.id)
    };
    handleEdit = (formValues) => {
        formValues.id = this.props.match.params.id;

        formValues.releaseDate = new Date(formValues.releaseDate).toISOString();
        this.props.editMovie(formValues);
    };

    handleCreate = (formValues) => {
        formValues.releaseDate = new Date(formValues.releaseDate).toISOString();
        formValues.directors =formValues.directors.split(',');
        this.props.createMovie(formValues);
    };

    render() {
        let isEdit = this.props.selectedMovie[0];
        if (isEdit) {
            let selectedMovie = this.props.selectedMovie[0];
            selectedMovie.releaseDate = new Date(selectedMovie.releaseDate).toISOString().substr(0, 10)

        }
        const response = this.props.selectedMovie ? <div>
            Movie Edit
            {isEdit ? <MovieForm submitCreateForm={this.handleEdit} initialValues={this.props.selectedMovie[0]}/>
                :
                <MovieForm submitCreateForm={this.handleCreate}/>}
        </div> : 'Loading';
        return (
            <div>
                {response}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.AuthenticationReducer.selectedMovie
    };
}

export default connect(mapStateToProps, {getMovie, editMovie,createMovie})(Movie);
