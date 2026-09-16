
import { useState } from 'react';

const NotificationPanel = () => {
  const [showPanel, setShowPanel] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Novo comentário', priority: 'alta' },
    { id: 2, text: 'Atualização disponível', priority: 'media' },
    { id: 3, text: 'Bem-vindo!', priority: 'baixa' },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div>
      <button onClick={() => setShowPanel(!showPanel)}>
        {showPanel ? 'Ocultar' : 'Mostrar'} Notificações
      </button>

      {showPanel && (
        <div className="panel">
          <h3>Notificações</h3>
          {notifications.length === 0 ? (
            <p>Nenhuma notificação</p>
          ) : (
            <ul>
              {notifications.map(notif => (
                <li key={notif.id}>
                  {notif.priority === 'alta' ? '🔴' : notif.priority === 'media' ? '🟡' : '🟢'}
                  {notif.text}
                  <button onClick={() => removeNotification(notif.id)}>Remover</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationPanel;
                