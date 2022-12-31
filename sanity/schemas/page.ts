export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'slug',
      type: 'string',
      title: 'Slug',
      description: 'Path for page, ie convergencebooks.com/SLUG',
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero image',
      description: 'Image at top of page',
    },
  ],
}
