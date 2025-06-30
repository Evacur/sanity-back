import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'exposition',
  title: 'ExpositionPage',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
    }),
    defineField({
      name: 'lieu',
      title: 'Lieu',
      type: 'string',
    }),
    defineField({
      name: 'organisateur',
      title: 'Organisateur',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: "Contenu de l'exposition",
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'videoBlock',
          title: 'Vidéo plein écran',
          fields: [
            defineField({
              name: 'video',
              type: 'file',
              title: 'Vidéo',
              options: { accept: 'video/*' },
            }),
          ],
          preview: {
            select: {
              video: 'video.asset',
            },
            prepare({ video }) {
              return {
                title: 'Vidéo plein écran',
                subtitle: video ? 'Vidéo sélectionnée' : 'Aucune vidéo',
              }
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'imageDuo',
          title: '2 images côte à côte',
          fields: [
            defineField({ name: 'leftImage', type: 'image', title: 'Image gauche', options: { hotspot: true } }),
            defineField({ name: 'rightImage', type: 'image', title: 'Image droite', options: { hotspot: true } }),
          ],
          preview: {
            select: {
              left: 'leftImage.asset',
              right: 'rightImage.asset',
            },
            prepare({ left, right }) {
              return {
                title: 'Duo d’images',
                subtitle: `${left ? 'Image gauche' : ''}${left && right ? ' + ' : ''}${right ? 'Image droite' : ''}`
              }
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'imageText',
          title: 'Image + Texte',
          fields: [
            defineField({ name: 'image', type: 'image', title: 'Image', options: { hotspot: true } }),
            defineField({
              name: 'imagePosition',
              type: 'string',
              title: 'Position de l’image',
              options: {
                list: [
                  { title: 'Gauche', value: 'left' },
                  { title: 'Droite', value: 'right' },
                ],
              },
              initialValue: 'left',
            }),
            defineField({ name: 'title', type: 'string', title: 'Titre' }),
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texte',
              of: [{ type: 'block' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              position: 'imagePosition',
              image: 'image.asset',
            },
            prepare({ title, position, image }) {
              return {
                title: `Image + Texte${title ? `: ${title}` : ''}`,
                subtitle: `Position: ${position}, ${image ? 'Image présente' : 'Pas d’image'}`,
              }
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'imageTriple',
          title: '1 image droite + 2 images à gauche',
          fields: [
            defineField({ name: 'topImage', type: 'image', title: 'Image en haut à gauche', options: { hotspot: true } }),
            defineField({ name: 'bottomImage', type: 'image', title: 'Image en bas à gauche', options: { hotspot: true } }),
            defineField({ name: 'rightImage', type: 'image', title: 'Image à droite', options: { hotspot: true } }),
          ],
          preview: {
            select: {
              top: 'topImage.asset',
              bottom: 'bottomImage.asset',
              right: 'rightImage.asset',
            },
            prepare({ top, bottom, right }) {
              return {
                title: 'Triple image',
                subtitle: `${top ? 'Top' : ''}${top && bottom ? '+' : ''}${bottom ? 'Bottom' : ''}${(top || bottom) && right ? ' + ' : ''}${right ? 'Right' : ''}`,
              }
            },
          },
        }),
        defineField({
          type: 'object',
          name: 'texteSimple',
          title: 'Texte simple',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Titre' }),
            defineField({
              name: 'text',
              type: 'array',
              title: 'Texte',
              of: [{ type: 'block' }],
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({ title }) {
              return {
                title: 'Texte simple',
                subtitle: title ? `Titre : ${title}` : 'Sans titre',
              }
            },
          },
        }),
      ],
    }),
  ],
})
