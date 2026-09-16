
const Notification = ({ showNotification }) => {
  return (
    <div>
      {showNotification && <p>Você tem novas mensagens em sua caixa de entrada!</p>}
    </div>
  );
};

export default Notification;
          