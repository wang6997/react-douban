import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import Book from 'material-ui/svg-icons/av/library-books';
import Movie from 'material-ui/svg-icons/av/movie';
import Music from 'material-ui/svg-icons/av/library-music';
import Info from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';

const AboutLink = "/about";
class SideBar extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.setState({ open: this.context.open });
    }
    handleToggle = (url) => {
        const { router } = this.props;
        this.context.toggleBar(false);
        url && this.context.router.push('/about');
    }
    handleClose() {
        const { router } = this.props;
        this.context.toggleBar(false);
    }
    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.context.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <section className="info">
                        豆瓣
                    </section>
                    <MenuItem primaryText="电影" leftIcon={<Movie />} />
                    <MenuItem primaryText="读书" onTouchTap={this.handleToggle} leftIcon={<Book />} />
                    <MenuItem onTouchTap={this.handleToggle} leftIcon={<Music />}>音乐</MenuItem>
                    <Divider />
                    <MenuItem onTouchTap={(AboutLink) => this.handleToggle(AboutLink)} leftIcon={<Info />}>关于</MenuItem>
                </Drawer>
            </div >
        )
    }
};

SideBar.contextTypes = {
    router: PropTypes.object,
    toggleBar: PropTypes.func,
    open: PropTypes.bool
}
export default SideBar;