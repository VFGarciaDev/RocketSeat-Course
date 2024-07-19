export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))  // renderizar componente após 2s

  const response = await fetch('https://api.github.com/users/VFGarciaDev')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}