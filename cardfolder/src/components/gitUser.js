import React from "react";
import axios from 'axios';
import GitCard from "./gitCard";
import GitFollowers from "./gitFollowers";

class GitUser extends React.Component{
    constructor() {
        super();
        this.state = {
            user: {},
            username: 'spencerelggren',
            followers: []
        };
    }

    componentDidMount() {
        axios
            .get(`https://api.github.com/users/${this.state.username}`)
            .then(resp => {
                console.log(resp);
                this.setState({user: resp.data })
            } )
            .catch(error => console.log(error));

        axios
            .get(`https://api.github.com/users/${this.state.username}/followers`)
            .then(resp => {
                console.log(resp.data);
                this.setState({followers: resp.data })
            } )
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div className={'mainChar'}>
                    <GitCard
                        name={this.state.user.name}
                        image={this.state.user.avatar_url}
                        email={this.state.user.email}
                        bio={this.state.user.bio}
                        followers={this.state.user.followers}
                    />
                </div>
                <div className={'followers'}>
                    <GitFollowers persons={this.state.followers}/>
                </div>
            </div>
        )
    }
}

export default GitUser