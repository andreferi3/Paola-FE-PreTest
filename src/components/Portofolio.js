import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPerson } from '../public/redux/actions/person'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './styles/portofolio.css'

class Portofolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            persons: []
        }
    }

    async componentDidMount() {
        const {dispatch} = this.props
        await dispatch(getPerson())
        this.setState({
            persons: this.props.person.data
        })
    }

    render() {
        return (
            <div className='root'>
                <Header persons={this.state.persons} />
                <Content persons={this.state.persons} />
                <Footer />
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