import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-whatsapp-marketing',
  standalone: true,
  imports: [TabViewModule, CommonModule],
  templateUrl: './whatsapp-marketing.component.html',
  styleUrl: './whatsapp-marketing.component.css'
})
export class WhatsappMarketingComponent {
cards = [
    {
      image: 'assets/images/news1.png',
      title: 'Sensex sees biggest single-day jump in 4 years',
      description: 'Ends 2,975 points higher'
    },
    {
      image: 'assets/images/news2.png',
      title: 'We stopped nuclear conflict<br>between India and Pakistan',
      description: '— US President Trump'
    },
    {
      image: 'assets/images/news3.png',
      title: 'Tiranga Yatra<br><small>13 to 23 May</small>',
      description: 'BJP will conduct a 10-day Yatra to highlight Operation Sindoor.'
    },
    {
      image: 'assets/images/news4.png',
      title: 'NIFTY AT <span class="text-success">over 885 Points</span>',
      description: 'Biggest intraday gain since Feb 2021.'
    },
    {
      image: 'assets/images/news5.png',
      title: 'Congratulations!',
      description: 'Nifty continues to register biggest intraday gain since Feb 2021.'
    },
    {
      image: 'assets/images/news6.png',
      title: 'भारत व पाकिस्तान के बीच<br>सीज़फायर के बाद 2000 अंक बढ़ा सेंसेक्स',
      description: 'Sensex jumps after ceasefire agreement'
    },
    {
      image: 'assets/images/news7.png',
      title: 'THANK YOU <b>Virat Kohli</b>',
      description: 'For redefining test cricket'
    },
    {
      image: 'assets/images/news8.png',
      title: 'THE KING<br><b>VIRAT KOHLI</b>',
      description: 'The King of passion and pride'
    },
    {
      image: 'assets/images/news9.png',
      title: 'There will be another captain...<br>But never another <b>VIRAT KOHLI</b>',
      description: ''
    },
    {
      image: 'assets/images/news10.png',
      title: '<b>VIRAT KOHLI</b>',
      description: 'A player who made test cricket his canvas'
    }
  ];

    morningQuotes = [
    {
      imageUrl: 'assets/images/gm1.jpg',
      title: 'Good Morning.',
      subtitle: 'Every sunrise is a new opportunity to shine. Embrace the day with gratitude and joy.'
    },
    {
      imageUrl: 'assets/images/gm2.jpg',
      title: 'Good Morning',
      subtitle: 'Each morning we are born again. What we do today is what matters most.'
    },
    {
      imageUrl: 'assets/images/gm3.jpg',
      title: 'Good Morning',
      subtitle: 'Wake up with determination, go to bed with satisfaction.'
    },
    
  ];

  // DIV 2 
    // DIV 2 
      // DIV 2 


  newsCards = [
    {
      image: 'assets/news1.jpg',
      title:
        'Heavy to extremely heavy rainfall warning issued for <b>14 states</b>',
      subtitle: 'Assam, Kerala, Goa, TN, etc.'
    },
    {
      image: 'assets/news2.jpg',
      title: 'IIT Bombay suspends agreements with Turkish universities'
    },
    {
      image: 'assets/news3.jpg',
      title:
        'Russia launches war\'s largest drone attack against Ukraine after peace talks'
    },
    {
      image: 'assets/news4.jpg',
      title:
        'Lashkar terrorist <b>Saifullah</b>, mastermind of Indian attacks, shot dead in Pak'
    },
    {
      image: 'assets/news5.jpg',
      title:
        '2 ex-Jihadists appointed to WH panel by Trump, one trained in LeT camp in Pak'
    },
    {
      image: 'assets/news6.jpg',
      title:
        'Indian Army shares new video of attack on Pak military targets under Op Sindoor'
    },
    {
      image: 'assets/news7.jpg',
      title:
        'Indian javelin star <b>Neeraj Chopra</b> throws personal best at Doha Diamond League'
    },
    {
      image: 'assets/news8.jpg',
      title: '800 Gujaratis cancel Turkey trip',
      subtitle: "Say 'Least we can do for India'"
    },
    {
      image: 'assets/news9.jpg',
      title:
        'LINE OF BEGGARS begins where Pakistan stands: <b>Defence Minister</b>'
    },
    {
      image: 'assets/news10.jpg',
      title: '3 terrorists killed under Operation Nader'
    }
  ];



  // DIV 3  
    // DIV 3  

quotes = [
    {
      title: 'Good Morning',
      text: 'Each sunrise brings a new chance to grow.',
      image: 'assets/gm1.jpg'
    },
    {
      title: 'Good Morning',
      text: 'The world is waiting for your light.',
      image: 'assets/gm2.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Every sunrise is a new opportunity to shine.',
      image: 'assets/gm3.jpg'
    },
    {
      title: 'Good Morning',
      text: 'What we do today is what matters most.',
      image: 'assets/gm4.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Wake up with determination, go to bed with satisfaction.',
      image: 'assets/gm5.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Success begins with a single step. Ignite your potential today.',
      image: 'assets/gm6.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Let’s make today count together.',
      image: 'assets/gm7.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Rise and soar towards your dreams.',
      image: 'assets/gm8.jpg'
    },
    {
      title: 'Good Morning',
      text: 'Each sunrise gives a new beginning.',
      image: 'assets/gm9.jpg'
    }
  ];

    
       
}
