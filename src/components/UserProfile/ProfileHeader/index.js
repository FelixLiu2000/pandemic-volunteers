import React from "react";
import { Typography, Grid, Paper, Divider } from "@material-ui/core";
import "../styles.css";

class ProfileHeader extends React.Component {
    render() {
        const {
            userObject
        } = this.props;

        return (
            <Paper className="profile-header" elevation={4}>
                <Grid className="profile-header__name-grid" container spacing={1}>
                    <Grid item xs={8}>
                        <Typography className="profile-header__name bold" variant="h2">
                            {userObject.firstName} {userObject.lastName}
                        </Typography>
                        <Typography className="profile-header__username" variant="h6">
                            @{userObject.username}
                        </Typography>
                    </Grid>
                    <Divider className="profile-header__divider" variant="vertical" flexItem xs={1}/>
                    <Grid className="profile-header__side-grid" direction="column" container item xs={3} spacing={1}>
                        <Grid item xs={12}>
                            <Typography className="profile-header__side" variant="subtitle1">
                                <span className="bold">Age: </span>{userObject.age}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="profile-header__side" variant="subtitle1">
                                <span className="bold">Accepted Requests: </span>{userObject.acceptedRequests}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="profile-header__side" variant="subtitle1">
                                <span className="bold">Sent Requests: </span>{userObject.sentRequests}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="profile-header__side" variant="subtitle1">
                                <span className="bold">Completed Requests: </span>{userObject.completedRequests}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default ProfileHeader;