import HelloWorld from '~/src/components/HelloWorld'

export default function Home() {
    return (
        <>
            <h1>{process.env.APP_NAME}</h1>
            <HelloWorld />
        </>
    )
}
