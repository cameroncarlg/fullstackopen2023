const Notification = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className='not'>{message}</div>;
};

export default Notification;
