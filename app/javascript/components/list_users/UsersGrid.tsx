import * as React from 'react';
import { FunctionComponent } from 'react';
import { Card, CardContent, Grid, List, Typography } from '@material-ui/core';


export interface Props {
    users: string[];
}

function buildGridCards(props:Props) {
    const itemList = props.users.map((i) => (
        <Grid item>
        <Card>
        <CardContent>
        <Typography variant='h5' component='h2'>
        {i}
        </Typography>
        </CardContent>
        </Card>
        </Grid>
    ));
    return itemList;
}

const UsersGrid: FunctionComponent<Props> = (props:Props) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {buildGridCards(props)}
        </Grid> 
    )
};

export default UsersGrid;