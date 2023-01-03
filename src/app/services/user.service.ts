import { Injectable } from '@angular/core';
import { now } from 'd3';
import { Contact } from '../models/contact/contact.model';
import { Move } from '../models/move/move.model';
import { Nft } from '../models/nft/nft.model';
import { User } from '../models/user/user.model';
import { BitcoinService } from './bitcoin.service';
import { StorageService } from './storage.service';

const USER_NFTS = [
  {
    "_id": "n556",
    "price": 5,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/hgoulf3lvja8earj6xpd.png"
  },
  {
    "_id": "n557",
    "price": 7,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731631/ssy2b9scptel2qxdmw9h.png"
  },
  {
    "_id": "n558",
    "price": 3,
    "imgUrl": "https://res.cloudinary.com/trellis22/image/upload/v1672731676/jocg0sulhpcmoxj5bqqm.jpg"
  },
]

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private bitcoinService: BitcoinService, private storageService: StorageService) { }
  USER_KEY = 'user_db'

  getUser() {
    return this.storageService.load(this.USER_KEY)
  }

  signup(name: string) {
    const user = {
      name,
      coins: 100,
      moves: [],
      nfts: USER_NFTS
    }
    this.storageService.store(this.USER_KEY, user)
  }

  addMove(contact: Contact, amount: number) {
    const user = this.storageService.load(this.USER_KEY)
    const move:Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    }
    if (amount > user.coins) return alert('You dont have enough money')
    user.moves.unshift(move)
    user.coins -= amount
    this.storageService.store(this.USER_KEY, user)
  }
  addNft(nft: Nft) {
    const user = this.storageService.load(this.USER_KEY)
    if (nft.price > user.coins) return alert('You dont have enough money')
    user.nfts.unshift(nft)
    user.coins -= nft.price
    this.storageService.store(this.USER_KEY, user)
  }
  removeNft(nft: Nft) {
    const user = this.storageService.load(this.USER_KEY)
    const idx = user.nfts.findIndex((n:Nft) => n._id === nft._id)
    user.nfts.splice(idx,1)
    user.coins += nft.price
    this.storageService.store(this.USER_KEY, user)
  }

  logout() {
    this.storageService.store(this.USER_KEY, null)
  }

 
}
