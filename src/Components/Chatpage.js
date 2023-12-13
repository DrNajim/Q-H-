import React, { useEffect, useRef, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

  function Chatpage( {socket}) {

    const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };
  const [message, setMessage] = useState('');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  const handleSendMessage = (e) => {
    if (message.trim() && localStorage.getItem('userName')) {
        socket.emit('message', {
          text: message,
          name: localStorage.getItem('userName'),
          id: `${socket.id}${Math.random()}`,
          socketID: socket.id,
          time:`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
        });
      }
      setMessage('');
    };
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  const lastMessageRef = useRef(null);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow>
        <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
          <h5 className="font-weight-bold mb-3 text-center text-lg-start">
            Member
          </h5>

          <MDBCard>
            <MDBCardBody>
              <MDBTypography listUnStyled className="mb-0">
                {users.map((user)=> ( <li
                  className="p-2 border-bottom"
                  style={{ backgroundColor: "#eee" }}
                >
                  <a href="#!" className="d-flex justify-content-between">
                    <div className="d-flex flex-row">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
                        alt="avatar"
                        className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                        width="60"
                      />
                      <div className="pt-1">
                        <p className="fw-bold mb-0" key={user.socketID}>{user.userName} </p>
                        <p className="small text-muted">
                          Chat With ME ::
                        </p>
                      </div>
                    </div>
                  </a>
                </li>)
                )}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="7" xl="8">
        <header style={{display:'flex', justifyContent: 'space-evenly', margin:'.7rem', borderRadius:'50px'}}>
        <p>Hangout with Colleagues</p>
        <MDBBtn className='me-1' color='danger' onClick={handleLeaveChat}>
        LEAVE CHAT
      </MDBBtn>
      </header>
          <MDBTypography listUnStyled>
            
            <li className="d-flex justify-content-between mb-4">
              {messages.map((message)=>
                message.name===localStorage.getItem('userName') ?

                 (<MDBCard>
                  <MDBCardHeader className="d-flex justify-content-between p-3">
                   <p className="fw-bold mb-0">You</p>
                   <p className="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> {message.time}
                   </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  {message.name}
                  </p>
                </MDBCardBody>
              </MDBCard> ) : 
              (<li class="d-flex justify-content-between mb-4">
              <MDBCard className="w-100">
                <MDBCardHeader className="d-flex justify-content-between p-3">
                  <p class="fw-bold mb-0">{message.name}</p>
                  <p class="text-muted small mb-0">
                    <MDBIcon far icon="clock" /> {message.time}
                  </p>
                </MDBCardHeader>
                <MDBCardBody>
                  <p className="mb-0">
                  {message.text}
                 </p>
                </MDBCardBody>
              </MDBCard>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                alt="avatar"
                className="rounded-circle d-flex align-self-start ms-3 shadow-1-strong"
                width="60"
              />
            </li>)
              )}
            </li>
            <li className="bg-white mb-3">
            <form className="form" onSubmit={handleSendMessage}>
        <MDBTextArea
          label="Message" id="textAreaExample" rows={4}
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MDBBtn color="info" rounded className="float-end">
              Send
            </MDBBtn>
      </form>
            </li>

          </MDBTypography>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
export default Chatpage
