import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/imageActions';
import MainPageForm from '../MainPageForm';

export class MainPage extends React.Component {
    // TODO: load a subject image
    // TODO: load the candidate images
    // TODO: load 1 of the candiate images as a "target" for visual compare.
    // TODO: load metadata of subject and target

    showImages = () => {
        this.props.actions.loadImages();
    }
    render() {
        return (
            <MainPageForm
                onChange={this.showImages}
                imagePage={this.props.imagePage}
            />
        );
    }
}

MainPage.propTypes = {
    actions: PropTypes.object.isRequired,
    imagePage: PropTypes.object.isRequired
    // fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        imagePage: state.imagePage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);
