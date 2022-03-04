import { Notification, Registration } from './types.ts'
import { PushTokenRepository } from './data/types.ts'

const PushClient = (
    pushTokenRepo: PushTokenRepository
) => ({
    sendNotification: (notification: Notification) => _sendNotification(pushTokenRepo, notification),
    registerNotification: (registration: Registration) => _registerNotification(pushTokenRepo, registration)
})

const _sendNotification = (repo: PushTokenRepository, notification: Notification) => {
    console.log(notification)
    if (notification.channel == "PUSH") {
        const tokens = repo.queryPushTokensByAccountId(notification.accountId)
        
        console.log(`Sending FCM ${tokens.firebaseCloudMessagingToken}`)
        console.log(`Sending APNS ${tokens.applePushNoticationServiceToken}`)
    }
}

const _registerNotification = (repo: PushTokenRepository, registration: Registration) => {
    console.log(registration)
    console.log(repo)
}

export default PushClient