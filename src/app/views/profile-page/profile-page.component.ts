import { Component, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move/move.model';
import { Nft } from 'src/app/models/nft/nft.model';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/user/user.model'
@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  constructor(private userService: UserService, private bitcoinService: BitcoinService) {}
  user!: User
  moves!: Move[] | undefined
  nfts!: Nft[] | undefined

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    this.user = this.userService.getUser()
    this.nfts = this.user.nfts
    this.moves = this.user.moves
    const BTC = this.bitcoinService.getRate(this.user.coins)
    BTC.then(res => {
      this.user.BTC = res
    })
  }

  onSellNft(nft:Nft) {
    this.userService.removeNft(nft)
    this.loadUser()
  }
}
