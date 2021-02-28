export class Realisation {
    constructor(
      public titre: string,
      public descriptionCourte: string,
      public photoPrincipale: string,
      public photoPrincipaleDescription: string,
      public dossierAlbum: string,
      public descriptionDetaille: string[],
      public hover: boolean
    ) {}
}
