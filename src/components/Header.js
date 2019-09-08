import React, { Component } from 'react'
import { capitalizeName } from './helper'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

class Header extends Component {
    render() {
        return (
            <nav className='navbar'>
                <div className='nav'>
                    <div className='logo'>
                        {
                            this.props.persons.map(person => (
                                <div className='name'>
                                    <h1>{capitalizeName(person.name)}</h1>
                                </div>
                            ))
                        }
                    </div>
                    {
                        this.props.person.isLoading ? '' : this.props.person.isError ? '' :
                        <div className='navbar-menu'>
                            <div className='menu-item'>
                                <h2><NavLink to='/' className='underline'>About</NavLink></h2>
                            </div>
                            <div className='menu-item'>
                                <h2><NavLink to='/resume' className='underline'>Resume</NavLink></h2>
                            </div>
                            <div className='menu-item'>
                                <h2><NavLink to='/education' className='underline'>Education</NavLink></h2>
                            </div>
                            <div className='menu-item'>
                                <h2><NavLink to='/portofolio' className='underline'>Portofolio</NavLink></h2>
                            </div>
                        </div>
                    }
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => {
    return {
        person: state.person
    }
}

export default connect(mapStateToProps)(Header)