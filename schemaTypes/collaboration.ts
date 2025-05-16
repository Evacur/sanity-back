import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'collaboration',
  title: 'CollaborationPage',
  type: 'document',
  fields: [
    defineField({
      name: 'banner',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'annee',
      title: 'Année',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
    }),
    defineField({
      name: 'prestation',
      title: 'Prestation',
      type: 'string',
    }),
    defineField({
      name: 'surface',
      title: 'Surface',
      type: 'string',
    }),
    defineField({
      name: 'section',
      title: 'Section liée',
      type: 'reference',
      to: [{ type: 'creationSection' }],
    }),
  ],
})
