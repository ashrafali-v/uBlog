export default async function Post({ params }: { params: { id: number } }){
  return(
    <p>post {params.id}</p>
  )
}