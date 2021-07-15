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
import axios from 'axios';

export interface Props {
    users: string[];
}

export class UsersGrid extends React.Component<Props, any> {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            username: ""
          }
      }

     buildGridCards(props) {
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

    handleInputChange(event){
        this.setState({
            username: event.target.value
          });
    }

    //const handleSubmit = (event) => {
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        data.append('username', this.state.username);

        // You can include CSRF token for form_authenticity validation
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        };

        // Post data to /houses endpoint and update state upon response
        axios.post('/users', data, config);
    };

    buildTitleAndSearchElement() {
        return(
            <Box width="100%" bgcolor="grey.300" p={1} style={{textAlign: 'right'}}>
            <FormControl>
            <form id="add_user_form" action="/users" method="post" onSubmit={this.handleSubmit}>
            <FormGroup row={true}>
                    <TextField id="username" name="username" required label="GitHub Username" variant="outlined" onChange={this.handleInputChange.bind(this)}/>
                    <Box m={1}>
                    <Button type="submit" variant="contained" color="primary">
                        Add User
                    </Button>
                    </Box>
            </FormGroup>
            </form>
            </FormControl>
            </Box>
        )
    }

    render() {
        return (
            <div>
                {this.buildTitleAndSearchElement()}
                <Grid container spacing={2} justifyContent="center">
                    {this.buildGridCards(this.props)}
                </Grid>
            </div>
        )
    }
}

export default UsersGrid;