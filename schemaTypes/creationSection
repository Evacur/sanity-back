export default {
  name: 'creationSection',
  title: 'Section de création',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'description', title: 'Description', type: 'string' },
    {
      name: 'image',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'order', title: 'Ordre d’affichage', type: 'number' },
  ],
};
