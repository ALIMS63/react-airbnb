import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import ProfileDash from "./ProfileDash";

const style = {
  padding: '0px 20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  outline: {
    border: '1px solid #dce0e0'
  },
  headerStyle: {
    height: '48px',
    padding: '15px 24px',
    backgroundColor: '#EDEFED',
    fontSize: '16px',
    borderBottom: '1px solid #dce0e0',
  },
  info: {
    fontSize: '14px',
    lineHeight: '1.43',
    color: '#484848',
    padding: '25px',
    backgroundColor: '#fff',
  },
  pink: {
    color: '#FF5A5F',
    cursor: 'pointer',
    listStyleType: 'none',
  }
}



class Profile extends Component {
    render() {
        return (
          <div>
            <ProfileDash />
            <br/>
            <div style={style} className="row bodyWidth">
              <div className="col-md-3 col-sm-3 col-xs-12">
                  <img className="profilePic" src="https://a2.muscache.com/im/pictures/07389693-7185-429e-8e86-9c7d3f9dd248.jpg"/>
                  <div style={style.info}>
                    <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '32px', marginBottom:'15px'}}>Gial</div>
                      <div style={style.pink}>View Profile</div>
                      <div style={style.pink}>Edit Profile</div>
                    </div>
                  </div>
                  <br/>
                  <br/>
                <div style={style.outline}>
                  <div style={style.headerStyle}> Verifications</div>
                  <div style={style.info}><div style={style.pink}>Add Verifications</div></div>
                </div>
                <br/>
                <br/>
                <div style={style.outline}>
                  <div style={style.headerStyle}> Quick Links</div>
                  <div style={style.info}>
                      <div style={style.pink}>Upcoming Trips</div>
                      <div style={style.pink}>Hosting on Airbnb</div>
                      <div style={style.pink}>Traceling on Airbnb</div>
                      <div style={style.pink}>Help Center</div>
                </div>
              </div>
                <br/>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-12">
                <div style={style.outline}>
                  <div style={style.headerStyle}> Notifications</div>
                  <div style={style.info}>	Please confirm your email address by clicking on the link we just emailed you. If you cannot find the email, you can <span style={style.pink}>request a new confirmation email</span> or <span style={style.pink}>change your email address</span>.</div>
                </div>
                <br/>

              <MuiThemeProvider>
                <div style={{border: '1px solid #dce0e0'}}>
                  <div style={style.info}>
                      <FlatButton style={{backgroundColor:'#FF5A5F', float: 'right'}} label="Travel Credit"  labelStyle={{textTransform: "none", color:'#fff', margin: "0 20px"}}  />
                    <div style={{fontSize:'18px', fontWeight:"bold"}}>Invite friends, earn travel credit!</div>
                    <br/>
                    Invite friends, earn travel credit!
                  </div>
                </div>
              </MuiThemeProvider>
                <br/>
                  <div style={style.outline}>
                    <div style={style.headerStyle}>Messages</div>
                    <div style={style.info}>When you message hosts or send reservation requests, you’ll see their responses here.</div>
                  </div>
              </div>
            </div>




          </div>
        );
    }
}

export default Profile;
