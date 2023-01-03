export class Contact {

  constructor(
      
      public name: string = '',
      public email: string = '',
      public phone: string = '',
      public _id?: string) {
  }

  setId?(id: string = 'r101') {
      // Implement your own set Id
      this._id = id
  }
}

export interface ContactFilter {
  term: string
}