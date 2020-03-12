import React, { Component } from 'react';
import Image from '../images/wk1.png'
import ImageProfile from '../images/bghaha.png'
import ImageHobbies from '../images/wk2.png'
import './Biodata.css';

class Home extends Component {
  render() {
    return (
      <div>
          <section style={{backgroundImage: `url(${Image})`, height:'100vh'}}>
        <div className="container">
            <div className="row">
              <div className="col-5">
              </div>
              <div className="col-7 justify-content-left d-flex align-items-center vh-100">
              <div>
              <h2>Hello!</h2>
              <h1>Denatan Bagus Firman Syah</h1>
              <h3>I'm a Student</h3>
              </div>
              </div>
            </div>
          </div>
          </section>
          <section style={{height:'70vh'}}>
            <div className="container">
              <br/><br/>
                <h2 className="text-about">About Me</h2>
                <div className="row">
                  <div className="col-md-3">
                    <hr className="border"/>
                  </div>
                </div>
            <div className="row">
              <div className="col-4 text-left">
                I'm Denatan Bagus Firman Syah, I'm 19 years old. I was born in Lumajang on the 18th of August 1999. I am so glad to be traveling so I hope you have the same hobbies as I am. I am very in love with my closest people and they are the ones that make me comfortable. I have a lot of valuable stories and experiences, thanks for visiting my site. Regards.
              </div>
              <div className="col-4">
                <img src={ImageProfile} alt="profile"/>
              </div>
              <div className="col-4 text-left">
                <h3 className="text-left">Phone</h3>
                <h5 className="text-left">085236201517</h5>
                <hr/>
                <h3 className="text-left">Email</h3>
                <h5 className="text-left">denatanbagusfs@gmail.com</h5>
                <hr/>
                <h3 className="text-left">Address</h3>
                <h5 className="text-left">Senggani St, 26 - Malang</h5>
              </div>
            </div>
            </div>
          </section>
          <section style={{height:'90vh'}}>
          <div className="container">
            <div>
              <br/>
              <h2>My Hobbies</h2>
            </div>
            <div>
              <br/>
              <img src={ImageHobbies} alt="profile"/>
            </div>
          </div>
          </section>
      </div>
    );
  }
}

export default Home;