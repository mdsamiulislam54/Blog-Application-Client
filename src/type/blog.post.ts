export type BlogPost = {
  post_id: string
  title: string
  content: string
  thumbnail: string
  isFeatured: boolean
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED"
  tags: string[]
  view: number
  author_id: string
  createdAt: Date
  updatedAt: Date
  comment: string[]
}
