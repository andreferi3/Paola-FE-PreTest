import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPerson } from '../public/redux/actions/person'
import moment from 'moment'
import './styles/portofolio.css'

class Portofolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }

        this.capitalizeName = this.capitalizeName.bind(this)
    }

    async componentDidMount() {
        const {dispatch} = this.props
        await dispatch(getPerson())
        this.setState({
            persons: this.props.person.data
        })
    }
    
    capitalizeName(name) {
        let firstName = name.first
        let lastName = name.last
        
        let fullName = firstName[0].toUpperCase() + firstName.slice(1) + ' ' + lastName[0].toUpperCase() + lastName.slice(1)

        return fullName
    }

    render() {
        return (
            <div className='root'>
                <nav className='navbar'>
                    <div className='nav'>
                        <div className='logo'>
                            {
                                this.state.persons.map(person => (
                                    <div className='name'>
                                        <h1>{this.capitalizeName(person.name)}</h1>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='navbar-menu'>
                            <h2><NavLink to='/'>About</NavLink></h2>
                            <h2><NavLink to='/resume'>Resume</NavLink></h2>
                            <h2><NavLink to='/education'>Education</NavLink></h2>
                            <h2><NavLink to='/portofolio'>Portofolio</NavLink></h2>
                        </div>
                    </div>
                </nav>
                <div className='root-content'>
                    {
                        this.state.persons.map(person => (
                            <div className='container'>
                                <div className='person-image'>
                                    <img src={person.picture.large} alt={this.capitalizeName(person.name)} width='500px' height='auto' />
                                </div>
                                <div className='person-details'>
                                    <div className='id'>
                                        <h1 className='name'>{this.capitalizeName(person.name)}</h1>
                                        <h3 className='job'>Developer</h3>
                                    </div>
                                    <div className='more-detail'>
                                        <div className='row'>
                                            <h3 className='title'>Date of Birth</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'>{moment(person.dob.date).format('MMMM Do, YYYY')}</h3>
                                        </div>
                                        <div className='row'>
                                            <h3 className='title'>Gender</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'>{person.gender.charAt(0).toUpperCase() + person.gender.slice(1)}</h3>
                                        </div>
                                        <div className='row'>
                                            <h3 className='title'>Phone</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'>{person.phone}</h3>
                                        </div>
                                        <div className='row'>
                                            <h3 className='title'>Email</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'>{person.email}</h3>
                                        </div>
                                        <div className='row'>
                                            <h3 className='title'>Address</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'>{person.location.street + ', ' + person.location.city[0].toUpperCase() + person.location.city.slice(1) + ', ' + person.location.state[0].toUpperCase() + person.location.state.slice(1)}</h3>
                                        </div>
                                        <div className='row'>
                                            <h3 className='title'>Location</h3>
                                            <h3>: &nbsp;</h3>
                                            <h3 className='value'></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <footer className='footer'>

                </footer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps)(Portofolio)