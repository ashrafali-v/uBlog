import { prisma } from "@/db"

export default async function Post(){

  const posts = await prisma.posts.findMany()

  return(
    <>
        <p>Hello Post's</p>
        <ul>
          <li>test</li>
        </ul>
    </>
  )
}