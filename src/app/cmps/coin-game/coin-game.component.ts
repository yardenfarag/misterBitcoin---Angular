import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserMsgService } from 'src/app/services/user-msg.service';
import { UserService } from 'src/app/services/user.service';

interface Coin {
  x:number
  y:number
}

@Component({
  selector: 'coin-game',
  templateUrl: './coin-game.component.html',
  styleUrls: ['./coin-game.component.scss']
})
export class CoinGameComponent {
  coinsCollected = 0
  coins:Coin[] = []
  isGameOver = false
  
  constructor(
    private el: ElementRef,
    private userService: UserService,
    private userMsgService: UserMsgService
    ) {}

  @ViewChild('coinField') coinField:any;

  startGame() {
    this.isGameOver = false
    this.coinsCollected = 0
    let intervalGame = setInterval(() => {
      this.coins.push({
        x: Math.random() * this.el.nativeElement.offsetWidth - 60,
        y: 0
      });
    }, 500);

    let invervalCoin = setInterval(() => {
      for (let coin of this.coins) {
        if (coin.y > 750) {
          coin.y = -50
        } else {
          coin.y += 5; 
        }
      }
    }, 18);

    setTimeout(() => {
      clearInterval(intervalGame)
      clearInterval(invervalCoin)
      this.gameOver()
    }, 10000);
  }
  
  collectCoin(coin:Coin) {
    this.coins = this.coins.filter(c => c !== coin);
    this.coinsCollected++;
  }

  gameOver() {
    this.userService.addCoins(this.coinsCollected)
    if (this.coinsCollected > 0) {
      this.userMsgService.setMsg(`You won ${this.coinsCollected} coins!`)
    }
    this.coins = []
    this.isGameOver = true
  }
}
