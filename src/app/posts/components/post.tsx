import {postwithAuthor} from "../page"
import Link from "next/link"
export type TPost = {
  id : Number
  createdAt : Date
  updatedAt : Date
  title     : String
  description: String
  published : Boolean
  author? : User
  authorId: Number
  categories?: Category[]
}

export type User ={
  id : Number
  email : String
  name? : String
  posts:   TPost[]
  profile : Profile
}

export type Category = {
  id : Number
  name : String
  post:  TPost[]
}
export type Profile = {
  id : Number
  bio : String
  user : User
  userId: String
}

type TPostWithAuthor = {
  author:{
    name:string | null
  };
  categories:Category[]
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  published: boolean;
  authorId: number;
}

export function PostItem(post:TPostWithAuthor){
  return (
        <article className={'flex max-w-xl flex-col items-start justify-between'}>
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.updatedAt.toISOString()} className="text-gray-500">
              {post.updatedAt.toISOString()}
            </time>
            {post.categories.map(category=>{
                return <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {category.name}
                </a>

            })}
          </div>
          <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0"></span>
                  {post.author.name}
                </a>
              </p>
              <p className="text-gray-600">Co-Founder / CTO</p>
            </div>
          </div>
          <div className="text-sm text-blue-300">
              <Link href={`/posts/${post.id}`}>Go to</Link>
          </div>
        </article>
  )
}