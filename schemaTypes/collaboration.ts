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
      validation: (Rule) => Rule.required(),
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
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'sections',
      title: 'Contenu du projet',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'videoBlock',
          title: 'Vidéo plein écran',
          fields: [
            {
              name: 'video',
              type: 'file',
              title: 'Vidéo',
              options: {
                accept: 'video/*'
              }
            },
          ],
        },
        {
          type: 'object',
          name: 'imageDuo',
          title: '2 images côte à côte',
          fields: [
            { name: 'leftImage', type: 'image', title: 'Image gauche', options: { hotspot: true } },
            { name: 'rightImage', type: 'image', title: 'Image droite', options: { hotspot: true } },
          ],
        },
        {
          type: 'object',
          name: 'imageText',
          title: 'Image + Texte',
          fields: [
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
            {
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
            },
            {
              name: 'title',
              type: 'string',
              title: 'Titre',
            },
            {
              name: 'text',
              type: 'array',
              title: 'Texte',
              of: [{ type: 'block' }],
            },
          ],
        },
        {
          type: 'object',
          name: 'imageTriple',
          title: '1 image droite + 2 images à gauche',
          fields: [
            { name: 'topImage', type: 'image', title: 'Image en haut à gauche', options: { hotspot: true } },
            { name: 'bottomImage', type: 'image', title: 'Image en bas à gauche', options: { hotspot: true } },
            { name: 'rightImage', type: 'image', title: 'Image à droite', options: { hotspot: true } },
          ],
        },
      ],
    }),
  ],
})
