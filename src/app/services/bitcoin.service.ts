import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private storageService: StorageService) { }
  async getRate(coins:number) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    try {
        const res = await fetch(url, {
            headers: new Headers({
                accept: 'application/json',
        }),
    })
        return res.json()
    } catch (err) {
        console.log('err', err)
    }
}

async getMarketPrice() {
    const url = `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    try {
        const resFromStorage = this.storageService.load('market-price')
        if (!resFromStorage) {
            const res = await fetch(url, {
                headers: new Headers({
                    accept: 'application/json',
                }),
            })
            const result = await res.json()
            this.storageService.store('market-price', result)
            return result
        }
        return resFromStorage
    } catch (err) {
        console.log('err', err)
    }
}

async getConfirmedTransactions() {
    const url = `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    try {
        const resFromStorage = this.storageService.load('trade-volume')
        if (!resFromStorage) {
            const res = await fetch(url, {
                headers: new Headers({
                    accept: 'application/json',
                }),
            })
            const result = await res.json()
            this.storageService.store('trade-volume', result)
            return result
        }
        return resFromStorage
    } catch (err) {
        console.log('err', err)
    }
}

}
