import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class  Register extends Component {

  state = {
    scheduler: {
      firstName: '',
      lastName: '',
      age: '',
      email: '',
      telephone: '',
      password: ''
    }
  }

  // signup = (event) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:8080/submitStudentDetails', this.state.scheduler)
  //   .then(response => {
      
  //     this.props.history.push('/thankyou');
  //     //navigate tp thank you page
      
  //   }).catch(error => {
  //     console.log('error');
  //   });
  // }

  

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const tempStudent = {...this.state.scheduler};
    tempStudent[name] = value;
    this.setState(
      {
        student: tempStudent
      }
    );
  }
    render() {
        return (
          <div>
            <form className="container signup-form"  onSubmit={this.signup}>
                <h3>Sign up below!!!</h3> 
              <div className="row mb-1">
                <div className="col">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="firstName"
                    value={this.state.scheduler.firstName}
                    class="form-control"
                    placeholder="First Name"
                    aria-label="First Name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="lastName"
                    value={this.state.scheduler.lastName}
                    class="form-control"
                    placeholder="Last Name"
                    aria-label="Last Name"
                  />
                </div>
              </div>
              <div className="row mb-1">
                <div className="col">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="age"
                    value={this.state.scheduler.age}
                    class="form-control"
                    placeholder="Age"
                    aria-label="Age"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="telephone"
                    value={this.state.scheduler.telephone}
                    class="form-control"
                    placeholder="Telephone"
                    aria-label="Telephone"
                  />
                </div>
              </div>
              <div className="row mb-1">
                <div className="col">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.scheduler.email}
                    class="form-control"
                    placeholder="Email"
                    aria-label="email"
                  />
                </div>
                <div className="col">
                  <input
                    type="password"
                    onChange={this.handleChange}
                    name="password"
                    value={this.state.scheduler.password}
                    class="form-control"
                    placeholder="password"
                    aria-label="password"
                  />
                </div>
              </div>
              <div class="d-grid gap-2 bg-dark">
                <button class="btn btn-danger" type="submit">
                  Sign up
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default Register;