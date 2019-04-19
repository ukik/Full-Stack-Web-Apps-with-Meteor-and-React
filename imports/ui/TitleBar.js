import React from 'react'
import PropTypes from 'prop-types'

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return <h4>{this.props.subtitle}</h4>
        }
    }
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>        
        )
    }
}

// props syarat value
TitleBar.propTypes = {
    // React.PropTypes maybe deprecated
    // title: React.PropTypes.string.isRequired, // wajib diisi
    // subtitle: React.PropTypes.string.isRequired, // wajib diisi

    title: PropTypes.string.isRequired, // wajib diisi
    // subtitle: PropTypes.string.isRequired, // wajib diisi
}

// props default value
TitleBar.defaultProps = {
    title: 'DEFAULT VALUE',
    // subtitle: 'Created By UKIK',
}