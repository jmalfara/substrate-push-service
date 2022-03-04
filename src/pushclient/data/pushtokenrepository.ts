import {
     PushNetwork,
     PushTokens,
     PushTokenRepository as PushTokenRepositoryInterface
} from './types.ts'

export const PushTokenRepository = (): PushTokenRepositoryInterface => ({
    queryPushTokensByAccountId,
    storePushTokenByAccountId
})

const queryPushTokensByAccountId = (accountId: string): PushTokens => {
    console.log(accountId)
    return {
        firebaseCloudMessagingToken: "1234",
        applePushNoticationServiceToken: "4321"
    }
}

const storePushTokenByAccountId = (accountId: string, pushToken: string, channel: PushNetwork) => {
    console.log(accountId)
    console.log(`Storing ${pushToken} ${channel}`)
}

export default PushTokenRepository