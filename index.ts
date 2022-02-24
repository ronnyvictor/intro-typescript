interface User {
  id: string
  username: string
}

interface Messages {
  id: string
  userId: string
  text: string
  sentAt: Date
}

const createUser = (user: User) => {
  
}

const sendMessage = (message: Messages) => {

}

const getMessages = (): Messages[] => {
  return []

}