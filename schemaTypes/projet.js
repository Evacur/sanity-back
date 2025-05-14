export default {
  name: 'projet',
  title: 'Projet',
  type: 'document',
  fields: [
    { name: 'titre', title: 'Titre du projet', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'lien', title: 'Lien du projet', type: 'url' },
  ],
}
