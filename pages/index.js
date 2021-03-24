
import { connectToDatabase } from '../mongodb'

function HomePage({ isConnected }) {
  return <div>
    Hello World! <br />
    Database connection: { isConnected ? 'true' : 'false' }
  </div>
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase()
  const isConnected = await client.isConnected()
  return {
    props: { isConnected },
  }
}

export default HomePage