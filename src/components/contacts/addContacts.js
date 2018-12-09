import React,{Component} from 'react'
import {Consumer} from '../../context/context'
import uid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component{

    state = {
        name:'',
        email:'',
        phone:'',
        errors:{}
    }

    onSubmitForm = async (dispatch,e) => {
        e.preventDefault();
        const {name,email,phone} = this.state;

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
        const newContact = {
            name:name,
            email:email,
            phone:phone
        }

        const res = await axios.post('https://jsonplaceholder.typicode.com/users/',newContact)

        dispatch({type:'ADD_CONTACT',payload:res.data})


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
                                Add Contact
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

                                    <input type="submit" value="Add Contact" className="btn btn-primary btn-block"></input>
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
export default AddContact
