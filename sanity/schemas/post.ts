export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of blog post',
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      description: 'Path for post, ie theconvergencebooks.com/post/SLUG',
    },
    {
      name: 'seoOverrides',
      type: 'reference',
      title: 'SEO Overrides',
      to: [{type: 'seo'}],
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
