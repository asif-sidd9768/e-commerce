import { createContext, useState } from "react";

export const NotificationContext = createContext()
export const NotificationProvider = ({children}) => {
  const [triggered, setTriggered] = useState(false)
  const [notificationData, setNotificationData] = useState({type: "", content: ""})

  const triggerNotification = (type, content) => {
    const nData = {type, content}
    setNotificationData(nData)
    setTriggered(true)
    setTimeout(() => {
      setTriggered(false)
    }, 3000)
  }
  return (
    <NotificationContext.Provider value={{triggered, triggerNotification, notificationData}}>
      {children}
    </NotificationContext.Provider>
  )
}