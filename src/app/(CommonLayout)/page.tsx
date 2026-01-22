
import Banner from "@/components/page/Banner/Banner";
import BlogPost from "@/components/page/blogs/blog";
import { blogsPostService } from "@/services/blog.post";



export default async function Home() {
  const posts = await blogsPostService.getBlogPost();
  return (
    <div>
      {JSON.stringify(posts.data?.data?.pagination)}

      <Banner />
      <BlogPost post={posts.data?.data?.result} pagination={posts.data?.data?.pagination} />
    </div>
  );
}
