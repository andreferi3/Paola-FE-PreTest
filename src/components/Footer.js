import React, { Component } from 'react'
import './styles/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <h1>
                    <a href='#linkedin'><i className='fab fa-linkedin-in'></i></a>
                </h1>
                <h1>
                    <a href='#facebook'><i className='fab fa-facebook-f'></i></a>
                </h1>
                <h1>
                    <a href='#twitter'><i className='fab fa-twitter'></i></a>
                </h1>
                <h1>
                    <a href='#googleplus'><i className='fab fa-google-plus-g'></i></a>
                </h1>
                <h1>
                    <a href='#instagram'><i className='fab fa-instagram'></i></a>
                </h1>
            </footer>
        )
    }
}
