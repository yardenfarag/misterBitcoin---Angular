import { Move } from "../move/move.model";
import { Nft } from "../nft/nft.model";

export class User {

  constructor(
      
      public name: string = '',
      public coins: number ,
      public BTC?: number,
      public moves?:Move[],
      public nfts?:Nft[]
     ) {
  }

}
