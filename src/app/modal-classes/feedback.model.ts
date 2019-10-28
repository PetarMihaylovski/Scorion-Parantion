export interface Feedback {
    id? : number,
    recipientId: number,
    senderId: number,
    context: string,
    description: string,
    isRead: boolean,
    isRequest: boolean,
    respondsTo: number,
    date: string
}