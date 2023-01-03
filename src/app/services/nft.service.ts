import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Nft } from '../models/nft/nft.model';

const NFTS = [
  {
    "_id": "n101",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/wrzyzs4y1d9ely6d3ogu.jpg"
  },
  {
    "_id": "n102",
    "price": 4,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/mfm70juyxh2kij2kjtna.png"
  },
  {
    "_id": "n103",
    "price": 2,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/vmdivujskkxlhlwcxaoq.jpg"
  },
  {
    "_id": "n104",
    "price": 5,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/hgoulf3lvja8earj6xpd.png"
  },
  {
    "_id": "n105",
    "price": 7,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/ssy2b9scptel2qxdmw9h.png"
  },
  {
    "_id": "n106",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/jocg0sulhpcmoxj5bqqm.jpg"
  },
  {
    "_id": "n107",
    "price": 10,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/cv5q1qs4gwm4aru3g2zr.jpg"
  },
  {
    "_id": "n108",
    "price": 8,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/gyczxk894bmxzhquxc3y.jpg"
  },
  {
    "_id": "n109",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/w4rbxcgvkm7xjsgfsury.jpg"
  },
  {
    "_id": "n110",
    "price": 4,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731619/mgmusgnxgd93sn5czpq2.png"
  },
  {
    "_id": "n111",
    "price": 8,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731619/dyebmepigyyk1jpzns9c.png"
  },
  {
    "_id": "n112",
    "price": 22,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731619/apx4rogttgrjjeuuhdkd.png"
  },
  {
    "_id": "n113",
    "price": 12,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/vmdivujskkxlhlwcxaoq.jpg"
  },
  {
    "_id": "n114",
    "price": 5,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/umdp3xfvylo8ypwxqaft.jpg"
  },
  {
    "_id": "n115",
    "price": 7,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/jo5zheuna27pwy29y4c4.jpg"
  },
  {
    "_id": "n116",
    "price": 13,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731619/xip3blai3zduuslpv3sf.png"
  },
  {
    "_id": "n117",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731618/chkf7lupnyvujig9gakn.png"
  },
  {
    "_id": "n118",
    "price": 9,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731618/ngmp8lrwwobwnnd0rgya.png"
  },
  {
    "_id": "n119",
    "price": 15,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/nqsk3dcyeiroxvff7hjo.jpg"
  },
  {
    "_id": "n120",
    "price": 6,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731656/c7b5vaixrbnwuince4jq.jpg"
  },
  {
    "_id": "n121",
    "price": 2,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731618/vw1qbbres1seudnzvuju.png"
  },
  {
    "_id": "n122",
    "price": 11,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731618/z1bwvs3ispy7gzap3vus.png"
  },
  {
    "_id": "n123",
    "price": 25,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731618/n4wr87ru0oqyvi8zg4gi.png"
  },
  {
    "_id": "n124",
    "price": 7,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/owudgi61zdpjs8bflznq.png"
  },
  {
    "_id": "n125",
    "price": 13,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/y38xde9c2l7liznfebcx.png"
  },
  {
    "_id": "n126",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/itdgt4jkwx7g2nt2jxbt.png"
  },
  {
    "_id": "n127",
    "price": 6,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/dkdhx0c1sebrj4vya6l5.png"
  },
  {
    "_id": "n128",
    "price": 14,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/uun6utdhaltguwqhtgmn.png"
  },
  {
    "_id": "n129",
    "price": 2,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/raz6wbcxhmpq53spe9sh.jpg"
  },
  {
    "_id": "n130",
    "price": 52,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731617/maplthenehqdyordtow3.png"
  },
]

@Injectable({
  providedIn: 'root'
})
export class NftService {
  private _nftsDb: Nft[] = NFTS;

  private _nfts$ = new BehaviorSubject<Nft[]>([])
  public nfts$ = this._nfts$.asObservable()
  constructor() { }

  public loadNfts(): void {
    let nfts = this._nftsDb;
    this._nfts$.next(nfts)
  }

  removeNft(nft: Nft) {
    this._nftsDb = this._nftsDb.filter((n: Nft) => n._id !== nft._id)
    this._nfts$.next(this._nftsDb)
  }

  addNft(nft: Nft) {
    const newNft = new Nft(nft.price, nft.imgUrl);
    if (typeof newNft.setId === 'function') newNft.setId(this.getRandomId());
    this._nftsDb.push(newNft)
    this._nfts$.next(this._nftsDb)
  }

  getRandomId(length = 4) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() *
        characters.length));
    }
    return result;
  }
}
