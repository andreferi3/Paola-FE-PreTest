import React, { Component } from 'react'
import { connect } from 'react-redux'
import { capitalizeName } from './helper'
import moment from 'moment'
import Maps from './Maps'
import './styles/content.css'

class Content extends Component {
    render() {
        return (
            <div className='root-content'>
                {
                    this.props.person.isLoading ? <h1 className='loader'>Loading</h1> : this.props.person.isError ? <h1 className='loader'>Error</h1> :
                    this.props.persons.map(person => (
                        <div className='container'>
                            <div className='person-image'>
                                <img src={person.picture.large} alt={capitalizeName(person.name)} width='500px' height='auto' />
                            </div>
                            <div className='person-details'>
                                <div className='id'>
                                    <h1 className='name'>{capitalizeName(person.name)}</h1>
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
                                        <div className='value'><Maps lat={person.location.coordinates.latitude} lng={person.location.coordinates.longitude} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps)(Content)