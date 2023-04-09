import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string().transform((val) => new Date(val)),
    tag: z.string().optional(),
  }),
})

export const collections = {
  blog: blogCollection,
}
