export type PushNetwork = "FCM" | "APNS"

export type PushTokens = {
    firebaseCloudMessagingToken: string | undefined
    applePushNoticationServiceToken: string | undefined
}

export type PushTokenRepository = {
    queryPushTokensByAccountId(accountId: string): PushTokens
    storePushTokenByAccountId(accountId: string, pushToken: string, channel: PushNetwork): void
}