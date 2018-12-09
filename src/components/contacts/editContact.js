import React,{Component} from 'react'
import {Consumer} from '../../context/context'
import uid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios'

class EditContact extends Component{

    state = {
        name:'',
        email:'',
        phone:'',
        errors:{}
    }

    async componentDidMount(){
        const {id} = this.props.match.params

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        const contact = res.data;

        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })
    }

    onSubmitForm = async (dispatch,e) => {
        e.preventDefault();
        const {name,email,phone} = this.state;
        const {id} = this.props.match.params

        if(name == ''){
            this.setState({
                errors:{name:'Name is Required'}
            })
            return;
        }

        if(email == ''){
            this.setState({
                errors:{email:'Email ID is Required'}
            })
            return;

        }
        if(phone == ''){
            this.setState({
                errors:{phone:'PhoneNumber is Required'}
            })
            return;
        }

        const updateContact = {
            name,
            email,
            phone
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);

        dispatch({type:'UPDATE_CONTACT',
            payload:res.data
        })

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        })
        this.props.history.push('/');
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render(){

        const {name,email,phone,errors} = this.state;

        return(
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return(
                            <div className="card mb-3">
                                <div className="card-header">
                                    Edit Contact
                                </div>
                                <div className="card-body">
                                    <form action="" onSubmit={this.onSubmitForm.bind(this,dispatch)}>
                                        <TextInputGroup
                                            name="name"
                                            label="Name"
                                            placeholder = "Enter Name"
                                            onChange = {this.onChange.bind(this)}
                                            value = {name}
                                            error = {errors.name}
                                        />
                                        <TextInputGroup
                                            name="email"
                                            label="Email"
                                            placeholder = "Enter Email"
                                            onChange = {this.onChange.bind(this)}
                                            value = {email}
                                            error = {errors.email}
                                        />
                                        <TextInputGroup
                                            name="phone"
                                            label="phone"
                                            placeholder = "Enter Phone"
                                            onChange = {this.onChange.bind(this)}
                                            value = {phone}
                                            error = {errors.phone}
                                        />

                                        <input type="submit" value="Edit Contact" className="btn btn-primary btn-block"></input>
                                    </form>
                                </div>
                            </div>
                        )
                    }
                }
            </Consumer>
        );

    }
}
export default EditContact
