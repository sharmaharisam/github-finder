import React, { useEffect , Fragment , } from 'react'
import Repos from './repos/Repos'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom';

 const User = (props) => {

    useEffect( () => {
        props.getUser(props.match.params.login);
        props.getUserRepos(props.match.params.login);
    } , []);
        const {
            name,
            company,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
        } = props.user;

        if(props.loading) {
            return <Spinner />
        }
        return (
            <div>
               <Link to ='/' className = 'btn btn-light'>
                   Bach to Search
               </Link> 
               Hireable: 
               {hireable ? <i className = 'fas fa-check text-success' /> : <i className = 'fas fa-times-circle text-danger' />  }

                <div className = 'card grid-2'>
                    <div className = 'all-center'>
                        <img src = {avatar_url} className = 'round-img' style = {{width : '150px'}} />
                        <h1>{name}</h1>
                        <p> Location: {location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h3>Bio</h3>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a href={html_url} className ='btn btn-dark my-1'>Visit Github Profile</a> 
                        <ul>
                            <li>
                                { login && (
                                    <Fragment>
                                        <strong>Username: </strong>{login}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                { company && (
                                    <Fragment>
                                        <strong>Company: </strong>{company}
                                    </Fragment>
                                )}
                            </li>
                            <li>
                                { blog && (
                                    <Fragment>
                                        <strong>Website: </strong>{blog}
                                    </Fragment>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className ='card text-center'>
                    <div className= 'badge badge-primary'>Followers: {followers}</div>
                    <div className= 'badge badge-success'>Following: {following}</div>
                    <div className= 'badge badge-light'>Public_repos: {public_repos}</div>
                    <div className= 'badge badge-dark'>public_gists: {public_gists}</div>
                </div>

            <Repos repos = {props.repos} />
            </div>
        )
    
}

export default User
