export class Nft {

  constructor(
      
      public price: number,
      public imgUrl: string,
      public _id?: string) {
      }
      setId?(id: string = 'n101') {
        // Implement your own set Id
        this._id = id
      }

}
