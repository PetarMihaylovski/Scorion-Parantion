export interface Feedback {
    id? : string,
    recipientId: number,
    senderId: number,
    context: string,
    description: string,
    isRead: boolean,
    isRequest: boolean,
    respondsTo: number,
    date: string
}