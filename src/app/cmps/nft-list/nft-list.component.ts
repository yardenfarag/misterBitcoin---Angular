import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Nft } from 'src/app/models/nft/nft.model';

@Component({
  selector: 'nft-list',
  templateUrl: './nft-list.component.html',
  styleUrls: ['./nft-list.component.scss']
})
export class NftListComponent {
  @Input() nfts!:Nft[] | undefined | null
  @Output() onRemoveNft = new EventEmitter<Nft>()

  onBuyNft(nft:Nft) {
    this.onRemoveNft.emit(nft)
  }
}
