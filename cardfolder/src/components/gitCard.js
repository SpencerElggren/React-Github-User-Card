import React from "react";
import {Card, Image} from "semantic-ui-react";

const GitCard = props => {
    return (

        <Card>
            <Image src={props.image}/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.email}</Card.Meta>
                <Card.Description>{props.bio}</Card.Description>
            </Card.Content>
            <Card.Content extra={true}>
                <p>{props.followers} Followers</p>
            </Card.Content>
        </Card>
    )
};

export default GitCard;