import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RegisterModal({
  show,
  setShow,
  name,
  setName,
  password,
  setPassword,
  register,
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
          <Modal.Title>Create a new account</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column justify-content-center align-items-center'>
          <label htmlFor='input-reg-name'>Name</label>
          <input
            type='text'
            id='input-reg-name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='input-reg-password'>Password</label>
          <input
            type='password'
            id='input-reg-password'
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
              register();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterModal;
