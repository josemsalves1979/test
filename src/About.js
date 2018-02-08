import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'


class About extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        [...Array(5).keys()].map(n => {
                            return <li key={n}>
                                <Link to={`messages/${n+1}`}>
                                    Message {n+1}
                                </Link>
                            </li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default About;