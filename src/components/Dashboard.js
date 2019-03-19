import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getMovies, editMovie, deleteMovies} from '../action';

class Dashboard extends React.Component {

    componentDidMount = () => this.props.getMovies(localStorage.getItem('token'));
    handleDelete = (id) => {
        this.props.deleteMovies(id)
        this.props.getMovies(localStorage.getItem('token'))
    }

    renderMovies = () => {
        return (
            <div>
                <div className="container">
                    <div className={'row'}>
                        <div className={'col-2'}>
                            <Link to={`/movie/`}>
                                <button className="btn btn-primary">Add</button>
                            </Link>
                        </div>
                        <div className={'col '}>
                            <Link to={`/logout/`}>
                                <button className="btn btn-danger">Logout</button>
                            </Link>
                        </div>

                    </div>

                </div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Release Date</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {!this.props.movies.length && <tr>
                        <td colspan="7" className={'text-center'}>No data available</td>
                    </tr>}
                    {this.props.movies.map((movie, i) => {
                        return (
                            <tr key={movie._id}>
                                <td>{i + 1}</td>
                                <td>{movie.name}</td>
                                <td>{movie.rating}</td>
                                <td>{new Date(movie.releaseDate).toISOString().substr(0, 10)}</td>
                                <td><Link to={`/movie/${movie._id}`} className="btn btn-warning">Edit</Link>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                            onClick={() => this.handleDelete(movie._id)}>Delete
                                    </button>
                                </td>

                            </tr>
                        );
                    })
                    }
                    </tbody>
                </table>
            </div>
        );
    };

    render() {
        const movies = this.props.movies ? this.renderMovies() : 'Loading';
        return (
            <div>
                {movies}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {movies} = state.AuthenticationReducer;
    return {movies};
};

export default connect(mapStateToProps, {getMovies, editMovie, deleteMovies})(Dashboard);
