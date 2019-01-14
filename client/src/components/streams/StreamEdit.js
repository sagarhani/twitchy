import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        console.log(this.props.match.params.id);
        this.props.fetchStream(this.props.match.params.id);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        } else {
            return <div> Id is {this.props.match.params.id}</div>
        }
    };
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);