import { atom } from 'recoil'

export const AppUpdateRequired = atom<boolean>({
    key: 'AppUpdateRequired',
    default: false,
    effects_UNSTABLE: [
        ({ setSelf }) => {
            const onEvent = (e: CustomEvent) => setSelf(true)
            window.addEventListener('NEW_APP_VERSION', onEvent)
            return () => {
                window.removeEventListener('NEW_APP_VERSION', onEvent)
            }
        },
    ],
})

/*
 *Example Trigger By Event
 *To be used during data fetching if the client is behind.
 */
//window.dispatchEvent(new CustomEvent('NEW_APP_VERSION'))
