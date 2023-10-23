import { defineStore } from "pinia";

export const useOverlayStore = defineStore({
    id: 'overlay',
    state: () => ({
        display: false
    }),
    actions: {
        toogleDisplay(bool: boolean) {
            this.display = bool
        }
    }
    
})