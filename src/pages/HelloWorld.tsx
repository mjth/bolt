export default function HelloWorld() {
  return (
    <>
      <h1>{process.env.APP_NAME}</h1>
      <span>Hello World</span>
    </>
  );
}
