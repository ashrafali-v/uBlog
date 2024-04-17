import { prisma } from "@/db"
import { Prisma } from '@prisma/client'
import {PostItem} from "./components/post"
async function getUsersWithPosts() {
  const posts = await prisma.post.findMany({
    include:{
      author:{
        select:{
          name:true
        }
      },
      categories:true
    }
  })
  return posts
}

export type postwithAuthor = Prisma.PromiseReturnType<typeof getUsersWithPosts>

export default async function Post(){

  const postsWitAuthor:postwithAuthor = await getUsersWithPosts();
  console.log(postsWitAuthor);
  
  //await prisma.posts.create({data: {title:"title3",description:"desc3",updatedAt:new Date}})
  //await prisma.posts.deleteMany({}) 

  //return <p>test</p>
  return(
        <div className={"text-slate-700 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"}>
          {postsWitAuthor.map(post => {
            return <PostItem key={post.id} {...post}/>
          })}
        </div>
  )
}