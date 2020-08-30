import React from 'react'
import RepoItem from './RepoItem'

 const Repos = (props) => {
    return (
        <div>
             {props.repos.map( repo => <RepoItem repo = {repo} key = {repo.id} />) }
        </div>
    )
}
export default Repos 