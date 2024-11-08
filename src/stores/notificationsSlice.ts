import { StateCreator } from "zustand";

export type Notificacion = {
    text : string
    error : boolean
    show : boolean
}

export type NotificacionSliceType = {
    notificacion : Notificacion
    showNotification : (payload : Pick<Notificacion, "text" | "error" >) => void
    hideNotification: () => void
}

export const createNotificationsSlice :StateCreator< NotificacionSliceType> = (set) => ({
    notificacion : {
        text : "",
        error : false,
        show : false,
    },
    showNotification : (payload) => {
        set({
            notificacion : {
                text : payload.text,
                error : payload.error,
                show : true
            }
        })
    },
    hideNotification : () => {
        set({
            notificacion : {
                text : "",
                error : false,
                show : false,
            }
        })
    }
})