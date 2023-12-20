import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import detectEthereumProvider from '@metamask/detect-provider'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = signal('dds');
  provider: any;
  
  
  update(event: any): void {
    this.title.set(event.target.value)
  }

  async ngOnInit(): Promise<void> {
  this.provider = await detectEthereumProvider()

    if (this.provider) {
  
      console.log('Ethereum successfully detected!')
    
      // From now on, this should always be true:
      // provider === window.ethereum
    
      // Access the decentralized web!
    
      // Legacy providers may only have ethereum.sendAsync
      const chainId = await this.provider.request({
        method: 'eth_requestAccounts'
      })
    } else {
    
      // if the provider is not detected, detectEthereumProvider resolves to null
      alert('Please install MetaMask!')
    }
  }

}

