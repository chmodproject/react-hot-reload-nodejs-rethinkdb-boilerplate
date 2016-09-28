import React from 'react'
import { Link } from 'react-router'

export default class Navigator extends React.Component {
    render() {
        return (
            <div>
                <h1>Navigation</h1>
                <ul role="nav">
                    <li><Link to="/about" activeClassName="active">About</Link></li>
                    <li><Link to="/repos" activeClassName="active">Repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}
