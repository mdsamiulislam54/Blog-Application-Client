'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { BlogPost as BlogPostType } from "@/type/blog.post"
import Paginations from "@/components/modules/pagination/page"
import { PaginationMeta } from "@/type/pagination.type"

type Props = {
  post: BlogPostType[]
  pagination: PaginationMeta
}

const BlogPost = ({ post, pagination }: Props) => {
    
  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {post?.map((blog) => (
          <Card
            key={blog.post_id}
            className="group overflow-hidden transition-all hover:shadow-xl"
          >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              {blog.thumbnail ? (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  No Image
                </div>
              )}
            </div>

            <CardHeader>
              <CardTitle className="line-clamp-2 text-lg">
                {blog.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {blog.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{blog.view} views</span>
              <Button size="sm" variant="outline">
                Read more
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Paginations pagination={pagination} />
    </section>
  )
}

export default BlogPost

