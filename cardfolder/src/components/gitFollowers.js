import React from "react";
import {Card, Image} from "semantic-ui-react";

const GitFollowers = props => {
    return (
        <>
            {props.persons.map(char => (
        <Card>
            <Image src={char.avatar_url}/>
            <Card.Content>
                <Card.Header>{char.login}</Card.Header>
                <Card.Meta>{char.html_url}</Card.Meta>
            </Card.Content>
            <Card.Content extra={true}>
                <p>{char.type}</p>
            </Card.Content>
        </Card>
            ))}
        </>
    )
};

export default GitFollowers;