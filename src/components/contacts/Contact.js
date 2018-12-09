import React, { Component } from 'react';
import propTypes from 'prop-types';
import {Consumer} from '../../context/context'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Contact extends Component{

    state = {
        showContactInfo:false
    }

    componentDidMount(){
        //console.log("component did mount called...")
    }

    componentWillMount(){
        //console.log("component will mount called...")
    }

    componentWillUpdate(){
        //console.log("component will update called...")
    }

    componentDidUpdate(){
        //console.log("component did update called...")
    }

    componentWillReceiveProps(nextProps,prevState){
        //console.log("component will receive props called...")
        //console.log(nextProps)
        //console.log(prevState)
    }

    onIconClick = (name,e) =>{
        this.setState({
            showContactInfo:!this.state.showContactInfo
        })
    }

    deleteContact = async (id,dispatch) => {

        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)

        dispatch({
            type: 'DELETE_CONTACT',
            payload: id
        });
    }

    render(){
        //console.log("render called...")
        const { id,name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;

        return (
        <Consumer>{

            value => {
                const {dispatch} = value;
                return(
                    <div className="card card-body mb-3">
                        <h4>{name} <i style={{cursor:'pointer'}} onClick={this.onIconClick.bind(this,name)} className="fas fa-sort-down"></i>
                            <i style={{cursor:'pointer',float:'right',color:'red'}} onClick={this.deleteContact.bind(this,id,dispatch)} className='fas fa-times'></i>
                            <Link  to ={`contact/edit/${id}`}>
                                <i className='fas fa-pen-alt' style={{cursor:'pointer',float:'right',color:'black',marginRight:'1rem'}}></i>
                            </Link>
                        </h4>

                        {showContactInfo?(<ul className="list-group">
                            <li className="list-group-item">Email:{email}</li>
                            <li className="list-group-item">phone:{phone}</li>
                        </ul>):null}

                    </div>
                );
            }
        }
        </Consumer>
        );
    }
}

Contact.propTypes = {
    contact:propTypes.object.isRequired
}
export default Contact;

