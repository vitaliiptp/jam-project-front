import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginModal({
  show,
  setShow,
  name,
  setName,
  password,
  setPassword,
  login,
  message,
  setMessage,
}) {
  const handleClose = () => {
    setShow(false);
    setMessage('');
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor='input-log-name'>Name</label>
          <input
            type='text'
            id='input-log-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='input-log-password'>Password</label>
          <input
            type='password'
            id='input-log-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <h5>{message}</h5>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              login();
            }}
          >
            Log in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginModal;
