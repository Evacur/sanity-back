import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
    }),
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
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Carrousel d’images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.max(4),
    }),
    defineField({
      name: 'format',
      title: 'Format',
      type: 'string',
    }),
    defineField({
      name: 'prix',
      title: 'Prix',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'livraison',
      title: 'Livraison',
      type: 'text',
    }),
    defineField({
      name: 'stripeUrl',
      title: 'Lien Stripe',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      prix: 'prix',
      format: 'format',
    },
    prepare({ title, media, prix, format }) {
      return {
        title: title || 'Sans titre',
        subtitle: `${format || ''}${prix ? ` - ${prix} €` : ''}`,
        media,
      }
    }
  }
})
