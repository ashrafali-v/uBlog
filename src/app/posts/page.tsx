import { Suspense } from "react";
import {PostItem} from "./components/post"

export default async function Post(){
  
  //await prisma.posts.create({data: {title:"title3",description:"desc3",updatedAt:new Date}})
  //await prisma.posts.deleteMany({}) 

  //return <p>test</p>
  return (
    <div
      className={
        "text-slate-700 mx-auto mt-10  flex flex-col border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      }
    >
      <h1 className="text-lg text-slate-900 text-center mb-10 font-bold">
        uBlog
      </h1>
      <div className="flex flex-row flex-wrap">
        <Suspense fallback={<p>Loading feed...</p>}>
          <PostItem />
        </Suspense>
      </div>
    </div>
  );
}