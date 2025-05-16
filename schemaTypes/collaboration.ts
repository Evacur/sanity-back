import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'collaboration',
  title: 'CollaborationPage',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
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
      validation: (Rule) => Rule.required(),
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
      name: 'video',
      title: 'Vidéo',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'images',
      title: 'Galerie d’images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.max(12),
    }),
    defineField({
      name: 'content',
      title: 'Contenu textuel',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Titre',
          type: 'string',
        }),
        defineField({
          name: 'body',
          title: 'Texte',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),
  ],
})
