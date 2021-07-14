import * as React from 'react';
import { FunctionComponent } from 'react';
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormGroup,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';

export interface Props {
    users: string[];
}

function buildGridCards(props:Props) {
    const itemList = props.users.map((i) => (
        <Grid container spacing={2} justifyContent="center">
        <Grid item>
        <Card>
        <CardContent>
        <Typography variant='h5' component='h2'>
        {i}
        </Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
    ));
    return itemList;
}

function buildTitleAndSearchElement() {
    return(
        <Box width="100%" bgcolor="grey.300" p={1} style={{textAlign: 'right'}}>
        <FormControl>
        <FormGroup row={true}>
                <TextField id="username" required label="GitHub Username" variant="outlined"/>
                <Box m={1}>
                <Button type="submit" variant="contained" color="primary">
                    Add User
                </Button>
                </Box>
        </FormGroup>
        </FormControl>
        </Box>
    )
}

const UsersGrid: FunctionComponent<Props> = (props:Props) => {
    return (
        <div>
            {buildTitleAndSearchElement()}
            {buildGridCards(props)}
        </div>
    )
};

export default UsersGrid;