export default {
  name: 'seo',
  type: 'document',
  title: 'SEO',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Override page title in search results and browser bar.',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'Override page description in search results.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Override image for social sharing',
    },
  ],
}
