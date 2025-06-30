import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'creationSection',
  title: 'Section de création',
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
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image de couverture',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/png, image/jpeg, image/webp, image/heic'
      },
    }),
    defineField({
      name: 'order',
      title: 'Ordre d’affichage',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      description: 'description',
      order: 'order',
    },
    prepare({ title, media, description, order }) {
      return {
        title: title || 'Sans titre',
        subtitle: `${description || 'Pas de description'}${order !== undefined ? ` (Ordre: ${order})` : ''}`,
        media
      }
    }
  }
})
