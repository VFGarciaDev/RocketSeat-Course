// é Server Component dentro de um Client Component, pois está sendo
// renderizado através da prop 'children'
export async function TestServer() {
    await new Promise(resolve => setTimeout(resolve, 3000))

    return <h1>Hello World, Server Component</h1>
}