import { useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { AppUpdateRequired } from '~src/atoms/AppUpdateRequired'

export default function AppUpdateNotice() {
    const reloadIsRequired = useRecoilValue(AppUpdateRequired)
    const [noticeIsHidden, setNoticeIsHidden] = useState(false)
    const remindMeLaterTimer = useRef(null)

    if (!reloadIsRequired || noticeIsHidden) {
        return <></>
    }

    const remindMeLaterButton = () => {
        remindMeLaterTimer.current = setTimeout(
            () => setNoticeIsHidden(false),
            60 * 60 * 1000
        )
        setNoticeIsHidden(true)
    }

    return (
        <div style={styles}>
            <div>An app update is required.</div>
            <button onClick={() => window.location.reload()}>Reload Now</button>
            <button onClick={remindMeLaterButton}>Remind me in an hour.</button>
        </div>
    )
}

const styles: React.CSSProperties = {
    position: 'absolute',
    right: '10px',
    bottom: '10px',
    padding: '10px',
    background: 'lightgray',
}
