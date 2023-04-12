import "./Notification.css"

export const Notification = ({typeOfNotification, content}) => {
  return (
    <div className="notification-container">
      <div className={`notification-bg-${typeOfNotification}`} >
        <span className="notification-text">{content}</span>
      </div>
    </div>
  )
}