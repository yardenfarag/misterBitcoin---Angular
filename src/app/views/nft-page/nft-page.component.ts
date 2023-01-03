import { Component, OnInit } from '@angular/core';
import { Nft } from 'src/app/models/nft/nft.model';
import { Observable, Subscription } from 'rxjs';
import { NftService } from 'src/app/services/nft.service';
import { UserService } from 'src/app/services/user.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'nft-page',
  templateUrl: './nft-page.component.html',
  styleUrls: ['./nft-page.component.scss']
})
export class NftPageComponent implements OnInit{
  constructor(
    private nftService: NftService, 
    private userService: UserService,
    private userMsgService: UserMsgService
    )
     {}

  nfts$!: Observable<Nft[]>
  isLoading = true

  ngOnInit(): void {
    this.nftService.loadNfts()
    setTimeout(()=>{
      this.nfts$ = this.nftService.nfts$
      this.isLoading = false
    },2000)
  }

  onRemoveNft(nft: Nft) {
    const user = this.userService.getUser()
    if (nft.price > user.coins) {
      this.userMsgService.setMsg('Not enough coins!')
      return
    }
    this.nftService.removeNft(nft)
    this.userMsgService.setMsg('NFT purchased!')
    this.userService.addNft(nft)
}
}
