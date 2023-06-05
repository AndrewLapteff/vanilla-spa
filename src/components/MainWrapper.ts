export class MainWrapper extends HTMLElement {
  constructor() {
    super()
    this.style.cssText = 'height: 97%; display: flex; justify-content: center; '
    this.innerText = `TEST`
  }
  static get observedAttributes() {
    return [ 'data-theme' ]
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name == 'data-theme') {
      const data = {
        "status": "ok",
        "totalResults": 262,
        "articles": [
          {
            "source": {
              "id": null,
              "name": "heise online"
            },
            "author": "Patrick Bellmer",
            "title": "heise+ | Kaufberatung: Elektroauto-Wallboxen von 300 bis 1600 Euro",
            "description": "Wallboxen können 300, aber auch 1600 Euro kosten. Wir zeigen anhand von 30 Modellen, welche Ausstattung Sie zu welchem Preis erwarten können.",
            "url": "https://www.heise.de/ratgeber/Kaufberatung-Elektroauto-Wallboxen-von-300-bis-1600-Euro-9155333.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/2/3/8/9/5/6/HomeCharging_96-b0b63ccb0a3784f8.jpg",
            "publishedAt": "2023-06-05T05:30:00Z",
            "content": "Inhaltsverzeichnis\r\nWie nahtlos ein Elektroauto den bisherigen Verbrenner ablösen kann, hängt unter anderem von der Lademöglichkeit ab. Zählen Sie zu dem Personenkreis, die eine Wallbox installieren … [+3944 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "9to5Mac"
            },
            "author": "Chance Miller",
            "title": "Pre-WWDC Apple Park drone images show headset demo area, new shaded viewing for keynote",
            "description": "Apple’s preparation for WWDC 2023 is in full swing ahead of tomorrow morning’s keynote. New drone footage from above Apple Park today showcases one big thing Apple has in store for this year’s festivities: a special demo area reportedly dedicated to its forth…",
            "url": "https://9to5mac.com/2023/06/04/wwdc-2023-drone-footage-keynote/",
            "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/06/apple-park-wwdc.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            "publishedAt": "2023-06-05T03:56:45Z",
            "content": "Apple’s preparation for WWDC 2023 is in full swing ahead of tomorrow morning’s keynote. New drone footage from above Apple Park today showcases one big thing Apple has in store for this year’s festiv… [+1388 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Wikihow.com"
            },
            "author": "Lauren Kurtz",
            "title": "How to Dwarf an Apple Tree",
            "description": "Apple trees are a great addition to a backyard garden, providing shade and delicious fruit. If you have a smaller garden and do not want to maintain a large apple tree, a dwarf apple tree may be ideal. They grow only tall, but still produce regular-sized frui…",
            "url": "https://www.wikihow.com/Dwarf-an-Apple-Tree",
            "urlToImage": "https://www.wikihow.com/images/0/04/Dwarf-an-Apple-Tree-Step-12-Version-2.jpg",
            "publishedAt": "2023-06-05T00:00:00Z",
            "content": "This article was co-authored by Lauren Kurtz. Lauren Kurtz is a Naturalist and Horticultural Specialist. Lauren has worked for Aurora, Colorado managing the Water-Wise Garden at Aurora Municipal Cent… [+186 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Amanda Laskin)",
            "title": "Get Apple's M1 MacBook Pro 13-inch with 16GB RAM, 1TB SSD for $1,299 ($600 off) today only",
            "description": "B&H is offering an excellent deal on an M1 MacBook Pro 13-inch with 16GB of RAM and a spacious 1TB SSD. Now available for just $1,299, a discount of $600 off, this deal is available for 24 hours only.Save $600 on the M1 MacBook ProHurry if you want to take ad…",
            "url": "https://appleinsider.com/articles/23/06/05/get-apples-m1-macbook-pro-13-inch-with-16gb-ram-1tb-ssd-for-1299-600-off-today-only",
            "urlToImage": "https://photos5.appleinsider.com/gallery/54738-110796-m1-macbook-pro-13-inch-xl.jpg",
            "publishedAt": "2023-06-05T04:12:21Z",
            "content": "Save $600 on the M1 MacBook Pro\r\nB&amp;H is offering an excellent deal on an M1 MacBook Pro 13-inch with 16GB of RAM and a spacious 1TB SSD. Now available for just $1,299, a discount of $600 off, thi… [+1843 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.jp"
            },
            "author": "かみやまたくみ",
            "title": "明日開催、「WWDC23」を観る方法。新しいApple製品が発表されそうですよ",
            "description": "Image:Appleまずは要点をさくっとまとめます。・6月6日午前2時から始まる基調講演（キーノート）がAppleのイベント「WWDC23」の目玉です。こちらをクリックするとカレンダーに予定を追加できます。・そんな基調講演はAppleの公式サイトかYouTubeで視聴できます。どちらかはお好みで。これだけだと「そもそもWWDCって何？」「どうして観るといいの？」「公式とYouTube、選ぶ基準は",
            "url": "https://www.gizmodo.jp/2023/06/how-to-watch-wwdc23.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/06/04/wwdc23.jpg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-06-05T00:00:00Z",
            "content": "662AppleWWDC23\r\nAppleYouTube\r\nWWDCYouTube\r\n WWDC23 \r\nWWDC23AppleWorldwide Developers ConferenceiPhoneiPadMac1\r\nApple\r\nMacBookMacAR/MRiPhoneiPhone9\r\nApple\r\nAppleYouTube\r\nApple\r\nApple\r\nApple\r\nYouTube\r\n… [+162 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.jp"
            },
            "author": "三浦一紀",
            "title": "イヤホンってどうやって選んでる？ 教えてください #ギズモード総研",
            "description": "Image:大口遼,ギズモード・ジャパンはっじまるよーーー！ギズモード読者のみなさまが使っているモノやサービスについて聞いていくアンケート企画「ギズモード総研」の第3回を開催させていただきます。今回のテーマは「イヤホン」。一口にイヤホンといっても、有線・無線、ノイキャンの有無など、一人ひとり好みが異なることと思います。また、最近はいろいろなメーカーがイヤホンを発売しているので、どのメーカーのどの製",
            "url": "https://www.gizmodo.jp/2023/06/giz-soken-3-earbuds.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/05/29/20230529_60239_01.jpeg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-06-05T04:00:00Z",
            "content": "3\r\nImage: Apple\r\nAppleEarPods with Lightning Connector\r\niPhoneEarPods\r\nImage: BOSE\r\nBOSEQuietComfort Earbuds2\r\nBOSE\r\nImage: Apple\r\nAppleAirPods3\r\nAirPods\r\nAppleAirPods\r\nAirPods\r\nImage: Noble Audio\r\nN… [+29 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "Gizmodo.jp"
            },
            "author": "amito",
            "title": "「Apple Park」に行ってみた。WWDC 2023の前日だから",
            "description": "Image:amitoこんにちは、ギズモード編集部の綱藤（あみとう）です。明日、日本時間6月6日午前2時から開催される「WWDC23」を取材するために、ApplePark（アップルパーク、米カリフォルニア州クパチーノ市）にやってきました。Apple初のVR/MRヘッドセットや新しいMacが発表されるというウワサでネットは盛り上がっていますが、まさにその発表が行なわれる会場となります。ということで、",
            "url": "https://www.gizmodo.jp/2023/06/amito-visits-apple-park.html",
            "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/06/05/IMG_5281.jpeg?w=1280&h=630&f=jpg",
            "publishedAt": "2023-06-05T02:00:00Z",
            "content": "Copyright © mediagene Inc. All Rights Reserved."
          },
        ]
      }
      this.innerHTML = `<div style="margin-top: 40px; width: 80%; display: flex;gap: 40px; flex-wrap: wrap; align-items: start;"> ${data.articles.map(article => {
        return `
        <div style='width: 30%; height: fit-content;';>${article.title}</div>`
      }).join('')
        }</div>`
    } // TODO зроби компоненту для артікла, пропсом буде aricle в циклі (нада тип для новості)
  }

}

customElements.define('main-wrapper', MainWrapper)