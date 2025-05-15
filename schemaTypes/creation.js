export default {
  name: 'creation',
  title: 'Création',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'title', title: 'Titre', type: 'string' },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: { dateFormat: 'YYYY-MM-DD' },
    },
    { name: 'category', title: 'Catégorie', type: 'string' },
    {
      name: 'section',
      title: 'Section liée',
      type: 'reference',
      to: [{ type: 'creationSection' }],
    },
  ],
};
