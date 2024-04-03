export const applicationProperties = {
  defaultTheme: {
    code: 'dark',
    icon: 'Dark',
    name: 'Dark',
  },
  themes: [
    {
      code: 'dark',
      icon: 'Dark',
      name: 'Dark',
    },
    {
      code: 'light',
      icon: 'Light',
      name: 'Light',
    },
  ],
  defaultCurrency: {code: 'USD', value: 0, name: 'US Dollar', symbol: '$'},
  currencies: [
    {
      code: 'AUD',
      name: 'Australian Dollar',
      symbol: '$',
    },
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
    },
    {
      code: 'GBP',
      name: 'British Pound',
      symbol: '£',
    },
    {
      code: 'RUB',
      name: 'Russian Ruble',
      symbol: '₽',
    },
    {
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
    },
    {
      code: 'BTC',
      name: 'Bitcoin',
      symbol: '₿',
    },
    {
      code: 'ETH',
      name: 'Ethereum',
      symbol: '⟠',
    },
    {
      code: 'BNB',
      name: 'BNB Beacon Chain',
      symbol: 'bnb',
    },
  ],
  defaultWalletName: 'Main Wallet',
  logoURI: {
    app: 'https://avatars.githubusercontent.com/u/110483531?s=200&v=4',
    eth: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    bsc: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
    polygon:
      'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
    tron: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
    ripple: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
    solana: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  },
  endpoints: {
    app: {
      url: 'https://nexiscoinnetwork.herokuapp.com/',
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MzE3MDMzNTM4OTgzLCJpYXQiOjE2NzM1Mzg5ODN9.ybs7wvtymTvyAQDmKwfoubmWseIl5SzEiOhqpp-dydfUzMqvuseJ5M__zJHCvWR7AVO4EL_8eqOOr-40DkeVvg',
    },
    apiBtc: 'https://blockstream.info/api/',
    apiBsc:
      'https://api.bscscan.com/api?apiKey=CPIDUUMXVJNYT6JKF6HR1KZ7PJMW4Q43Z8',
    apiEth:
      'https://api.etherscan.com/api?apiKey=EI95F1A7XHVT219DDCM9472XE7NGWQ8T3V',
    apiPolygon:
      'https://api.polygonscan.com/api?apiKey=PWDHTP6FGSVSTMYSTPBJ4BFN44Z7GNXWPZ',
    privacyPolicy: 'https://nexis.network/privacy-policy',
    termsOfService: 'https://nexis.network/terms-of-use',
    ramp: 'https://buy.ramp.network/?hostAppName=balancewallet&variant=mobile&hostApiKey=ycrtmt9ec9xmgn3cgqvgbt9sw6jyptmxyfnm7f3x',
    helpCenter: 'https://forum.nexis.network',
    twitter: 'https://twitter.com/Nexis_Network',
    telegram: 'https://t.me/Nexis_Network',
    facebook: 'https://t.me/Nexis_Network',
    reddit: 'https://www.reddit.com/r/nexis_network/',
    youtube: 'https://www.youtube.com/@nexis_network',
    about: 'https://nexis.network',
    discord: 'https://discord.gg/nexis',
  },
  dapps: {
    hot: [
      {
        id: 'nexisswap',
        name: 'NexisSwap',
        desc: 'NexisSwap is a protocal for automated token exchanges on multiple blockchains.',
        logo: 'https://raw.githubusercontent.com/NexisNetwork/DeFi-Wallet-Assets/main/NexisSwap.png',
        url: 'https://swap.nexis.network',
      },
    ],
    defi: [
      {
        id: 'nexisswap1',
        name: 'NexisSwap',
        desc: 'NexisSwap is a protocal for automated token exchanges on multiple blockchains.',
        logo: 'https://raw.githubusercontent.com/NexisNetwork/DeFi-Wallet-Assets/main/NexisSwap.png',
        url: 'https://swap.nexis.network',
      },
    ],
    eth: [
      {
        id: 'nexisswap',
        name: 'NexisSwap',
        desc: 'NexisSwap is a protocal for automated token exchanges on multiple blockchains.',
        logo: 'https://raw.githubusercontent.com/NexisNetwork/DeFi-Wallet-Assets/main/NexisSwap.png',
        url: 'https://swap.nexis.network',
      },
    ],
  },
  networks: [
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      chain: 'ETH',
      logoURI:
        'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    },
    {
      id: 'binance-chain',
      name: 'Binance Smart Chain',
      chain: 'BSC',
      symbol: 'BNB',
      logoURI:
        'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
    },
    {
      id: 'polygon',
      name: 'Polygon',
      chain: 'POLYGON',
      symbol: 'MATIC',
      logoURI:
        'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png',
    },
  ],
  walletConnect: {
    description: 'ExoCoin Wallet',
    url: 'https://nexis.network',
    icons: ['https://s2.coinmarketcap.com/static/img/coins/64x64/22072.png'],
    name: 'ExoCoin Wallet',
    ssl: true,
  },
  oneSignal: {
    appId: '',
  },
  languages: {
    en: 'English (UK)',
    ru: 'Russian',
    es: 'Spain',
    cn: 'Chinese',
    pt: 'Portuguese',
    ht: 'Haiti',
    fr: 'French',
  },
};
