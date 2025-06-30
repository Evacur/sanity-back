import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'creation',
  title: 'CréationPage',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
    }),
    defineField({
      name: 'section',
      title: 'Section liée',
      type: 'reference',
      to: [{ type: 'creationSection' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      date: 'date',
      category: 'category'
    },
    prepare({ title, media, date, category }) {
      return {
        title: title || 'Sans titre',
        subtitle: `${category || 'Sans catégorie'}${date ? ` - ${date}` : ''}`,
        media
      }
    }
  }
})
