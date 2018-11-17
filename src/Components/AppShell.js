import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router-dom';

export default class AppShell extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }
    handleDrawerToggle = () => this.setState({ open: !this.state.open });
    handleRequestChange = open => this.setState({ open: open });
    handleLinkClick = () => this.setState({ open: false });
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar onLeftIconButtonClick={this.handleDrawerToggle} />
                    <Drawer open={this.state.open} docked={false}
                        onRequestChange={this.handleRequestChange}
                    >
                        <MenuItem primaryText={'Home'}
                            containerElement={<Link to={'/'} />}
                            onClick={this.handleLinkClick}
                        />
                        <MenuItem primaryText={'Users'}
                            containerElement={<Link to={'/users'} />}
                            onClick={this.handleLinkClick}
                        />
                        <MenuItem primaryText={'Notification'}
                            containerElement={<Link to={'/notification'} />}
                            onClick={this.handleLinkClick}
                        />
                    </Drawer>
                    <div id="content">
                        {React.cloneElement(this.props.children)}
                    </div>
                </div>
            </MuiThemeProvider>


        );

    }
}