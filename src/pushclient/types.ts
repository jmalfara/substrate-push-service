import { PushNetwork } from './data/types.ts'
export type Channel = "PUSH"

export type Notification = {
    channel: Channel,
    body: string,
    meta: Record<string, unknown>
}

export type Registration = PushRegistration

export type Network = PushNetwork

export type PushRegistration = {
    account: string,
    pushToken: string,
    network: Network
}