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
        dateFormat: 'YYYY',
      },
    }),
    defineField({
      name: 'technique',
      title: 'Technique',
      type: 'string',
    }),
    defineField({
      name: 'format',
      title: 'Format',
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
      technique: 'technique',
      format: 'format',
    },
    prepare({ title, media, date, technique, format }) {
      return {
        title: title || 'Sans titre',
        subtitle: `${format || ''}${technique ? `, ${technique}` : ''}${date ? `, ${date}` : ''}`,
        media
      }
    }
  }
})
