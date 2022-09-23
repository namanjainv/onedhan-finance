import "./Home.css";
import Table from './../../components/Table';


function App() {
    const d = 
    [
      {
        id: 7,
        code: 'AAPL',
        name: 'Apple Inc',
        value: '152.74',
        score: '0.6446664634146342',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 8,
        code: 'MSFT',
        name: 'Microsoft Corp',
        value: '240.98',
        score: '0.8045877659574469',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 9,
        code: 'AMZN',
        name: 'Amazon.com Inc',
        value: '117.31',
        score: '0.6964088003662171',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 10,
        code: 'TSLA',
        name: 'Tesla Inc',
        value: '288.59',
        score: '0.5715718309121469',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 11,
        code: 'GOOG',
        name: 'Alphabet Inc',
        value: '100.57',
        score: '0.8154895833333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 12,
        code: 'GOOGL',
        name: 'Alphabet Inc',
        value: '100.14',
        score: '0.7587083333333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 13,
        code: 'META',
        name: 'Meta Platforms Inc',
        value: '142.82',
        score: '0.726811674528302',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 14,
        code: 'NVDA',
        name: 'NVIDIA Corp',
        value: '125.61',
        score: '0.6322266924935529',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 15,
        code: 'PEP',
        name: 'PepsiCo Inc',
        value: '168.6',
        score: '0.52215',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 16,
        code: 'COST',
        name: 'Costco Wholesale Corp',
        value: '487.17',
        score: '0.607378125',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 17,
        code: 'AVGO',
        name: 'Broadcom Inc',
        value: '477.61',
        score: '0.7775',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 18,
        code: 'CSCO',
        name: 'Cisco Systems Inc',
        value: '41.15',
        score: '0.5271582747751941',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 19,
        code: 'TMUS',
        name: 'T-Mobile US Inc',
        value: '135.05',
        score: '0.7354249999999999',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 20,
        code: 'TXN',
        name: 'Texas Instruments Inc',
        value: '162.62',
        score: '0.5634610294362771',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 21,
        code: 'CMCSA',
        name: 'Comcast Corp',
        value: '32.47',
        score: '0.7555666666666666',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 22,
        code: 'QCOM',
        name: 'QUALCOMM Inc',
        value: '123.68',
        score: '0.7986125000000001',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 23,
        code: 'ADBE',
        name: 'Adobe Inc',
        value: '287.06',
        score: '0.7069308712121212',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 24,
        code: 'AMGN',
        name: 'Amgen Inc',
        value: '227.75',
        score: '0.5624877321065439',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 25,
        code: 'AMD',
        name: 'Advanced Micro Devices Inc',
        value: '69.5',
        score: '0.72395',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 26,
        code: 'HON',
        name: 'Honeywell International Inc',
        value: '173.25',
        score: '0.6618464910089911',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 27,
        code: 'INTC',
        name: 'Intel Corp',
        value: '28.07',
        score: '0.48428940923475217',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 28,
        code: 'INTU',
        name: 'Intuit Inc',
        value: '396.71',
        score: '0.6094916666666667',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 29,
        code: 'NFLX',
        name: 'Netflix Inc',
        value: '237.05',
        score: '0.5607931434129314',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 30,
        code: 'PYPL',
        name: 'PayPal Holdings Inc',
        value: '87.66',
        score: '0.7288076530612244',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 31,
        code: 'SBUX',
        name: 'Starbucks Corp',
        value: '84.7',
        score: '0.654405351376627',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 32,
        code: 'ADP',
        name: 'Automatic Data Processing Inc',
        value: '230.47',
        score: '0.3666666666666667',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 33,
        code: 'MDLZ',
        name: 'Mondelez International Inc',
        value: '59.8',
        score: '0.5943333333333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 34,
        code: 'GILD',
        name: 'Gilead Sciences Inc',
        value: '63.77',
        score: '0.7183167167167167',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 35,
        code: 'ADI',
        name: 'Analog Devices Inc',
        value: '145.34',
        score: '0.6393560185185185',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 36,
        code: 'AMAT',
        name: 'Applied Materials Inc',
        value: '85.04',
        score: '0.7383129446565346',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 37,
        code: 'REGN',
        name: 'Regeneron Pharmaceuticals Inc',
        value: '688.26',
        score: '0.64744214806096',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 38,
        code: 'BKNG',
        name: 'Booking Holdings Inc',
        value: '1',
        score: '0.8035392992424242',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 39,
        code: 'VRTX',
        name: 'Vertex Pharmaceuticals Inc',
        value: '286.34',
        score: '0.8094161023245182',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 40,
        code: 'ISRG',
        name: 'Intuitive Surgical Inc',
        value: '191.08',
        score: '0.5963773809523809',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 41,
        code: 'FISV',
        name: 'Fiserv Inc',
        value: '98.56',
        score: '0.6213161764705882',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 42,
        code: 'CSX',
        name: 'CSX Corp',
        value: '28.57',
        score: '0.7097535714285714',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 43,
        code: 'ATVI',
        name: 'Activision Blizzard Inc',
        value: '77.03',
        score: '0.5593947115384615',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 44,
        code: 'CHTR',
        name: 'Charter Communications Inc',
        value: '333.96',
        score: '0.6944311588132824',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 45,
        code: 'MU',
        name: 'Micron Technology Inc',
        value: '49.66',
        score: '0.8257751248751249',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 46,
        code: 'LRCX',
        name: 'Lam Research Corp',
        value: '386.83',
        score: '0.6728999999999999',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 47,
        code: 'KDP',
        name: 'Keurig Dr Pepper Inc',
        value: '37.11',
        score: '0.4923215700965701',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 48,
        code: 'PANW',
        name: 'Palo Alto Networks Inc',
        value: '166.18',
        score: '0.6179',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 49,
        code: 'AEP',
        name: 'American Electric Power Co Inc',
        value: '98.88',
        score: '0.517',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 50,
        code: 'MAR',
        name: 'Marriott International Inc/MD',
        value: '140.11',
        score: '0.75404375',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 51,
        code: 'MRNA',
        name: 'Moderna Inc',
        value: '124.32',
        score: '0.7117444078947368',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 52,
        code: 'SNPS',
        name: 'Synopsys Inc',
        value: '306.97',
        score: '0.6815663691369137',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 53,
        code: 'KLAC',
        name: 'KLA Corp',
        value: '313.07',
        score: '0.6982142857142858',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 54,
        code: 'ABNB',
        name: 'Airbnb Inc',
        value: '103.72',
        score: '0.4598941860199945',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 55,
        code: 'MNST',
        name: 'Monster Beverage Corp',
        value: '86.77',
        score: '0.5679513586956522',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 56,
        code: 'CDNS',
        name: 'Cadence Design Systems Inc',
        value: '162.32',
        score: '0.6092453870387038',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 57,
        code: 'MELI',
        name: 'MercadoLibre Inc',
        value: '850',
        score: '0.6926991071428571',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 58,
        code: 'PAYX',
        name: 'Paychex Inc',
        value: '117.61',
        score: '0.42812500000000003',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 59,
        code: 'EXC',
        name: 'Exelon Corp',
        value: '41.68',
        score: '0.5210526315789473',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 60,
        code: 'NXPI',
        name: 'NXP Semiconductors NV',
        value: '155.13',
        score: '0.6641333333333334',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 61,
        code: 'ADSK',
        name: 'Autodesk Inc',
        value: '187.15',
        score: '0.41977499999999995',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 62,
        code: 'KHC',
        name: 'Kraft Heinz Co/The',
        value: '34.26',
        score: '0.4310583333333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 63,
        code: 'CTAS',
        name: 'Cintas Corp',
        value: '388.77',
        score: '0.5127083333333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 64,
        code: 'LULU',
        name: 'Lululemon Athletica Inc',
        value: '306.3',
        score: '0.6930471934315684',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 65,
        code: 'XEL',
        name: 'Xcel Energy Inc',
        value: '72.45',
        score: '0.4837104062604063',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 66,
        code: 'FTNT',
        name: 'Fortinet Inc',
        value: '48.74',
        score: '0.6393023492004373',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 67,
        code: 'ASML',
        name: 'ASML Holding NV',
        value: '441.04',
        score: '0.7499063436563437',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 68,
        code: 'MRVL',
        name: 'Marvell Technology Inc',
        value: '43.52',
        score: '0.68515625',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 69,
        code: 'CRWD',
        name: 'Crowdstrike Holdings Inc',
        value: '161.28',
        score: '0.7123536392100749',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 70,
        code: 'MCHP',
        name: 'Microchip Technology Inc',
        value: '63.31',
        score: '0.5651666666666667',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 71,
        code: 'DXCM',
        name: 'Dexcom Inc',
        value: '80.96',
        score: '0.4764801480148015',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 72,
        code: 'TEAM',
        name: 'Atlassian Corp PLC',
        value: '220.69',
        score: '0.584615705096157',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 73,
        code: 'AZN',
        name: 'AstraZeneca PLC ADR',
        value: '56.31',
        score: '0.6864383928571428',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 74,
        code: 'EA',
        name: 'Electronic Arts Inc',
        value: '117.42',
        score: '0.7058080808080808',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 75,
        code: 'CTSH',
        name: 'Cognizant Technology Solutions Corp',
        value: '59.8',
        score: '0.5883583333333333',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 76,
        code: 'DLTR',
        name: 'Dollar Tree Inc',
        value: '139.33',
        score: '0.7618539353935393',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 77,
        code: 'PDD',
        name: 'Pinduoduo Inc ADR',
        value: '63.46',
        score: '0.9031116071428572',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 78,
        code: 'ROST',
        name: 'Ross Stores Inc',
        value: '86.59',
        score: '0.6745192706770677',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 79,
        code: 'WDAY',
        name: 'Workday Inc',
        value: '150.49',
        score: '0.6610776785714286',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 80,
        code: 'ILMN',
        name: 'Illumina Inc',
        value: '193.49',
        score: '0.5541473685964736',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 81,
        code: 'PCAR',
        name: 'PACCAR Inc',
        value: '84.9',
        score: '0.58555',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 82,
        code: 'BIIB',
        name: 'Biogen Inc',
        value: '200.62',
        score: '0.489075',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 83,
        code: 'WBA',
        name: 'Walgreens Boots Alliance Inc',
        value: '33.32',
        score: '0.365625',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 84,
        code: 'JD',
        name: 'JD.com Inc ADR',
        value: '53.47',
        score: '0.700675',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 85,
        code: 'CEG',
        name: 'Constellation Energy Corp',
        value: '85.38',
        score: '0.7291666666666666',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 86,
        code: 'VRSK',
        name: 'Verisk Analytics Inc',
        value: '175.06',
        score: '0.496875',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 87,
        code: 'ODFL',
        name: 'Old Dominion Freight Line Inc',
        value: '244.38',
        score: '0.5255116476988665',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 88,
        code: 'IDXX',
        name: 'IDEXX Laboratories Inc',
        value: '326.08',
        score: '0.5056334167500834',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 89,
        code: 'FAST',
        name: 'Fastenal Co',
        value: '47.59',
        score: '0.34280114280947616',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 90,
        code: 'DDOG',
        name: 'Datadog Inc',
        value: '89.44',
        score: '0.44815000000000005',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 91,
        code: 'SGEN',
        name: 'Seagen Inc',
        value: '140.55',
        score: '0.5257861111111112',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 92,
        code: 'CPRT',
        name: 'Copart Inc',
        value: '105.08',
        score: '0.88125',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 93,
        code: 'LCID',
        name: 'Lucid Group Inc',
        value: '14.31',
        score: '0.45462962962962966',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 94,
        code: 'ZS',
        name: 'Zscaler Inc',
        value: '162.56',
        score: '0.6798272058823529',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 95,
        code: 'SIRI',
        name: 'Sirius XM Holdings Inc',
        value: '5.87',
        score: '0.5618240740740741',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 96,
        code: 'BIDU',
        name: 'Baidu Inc ADR',
        value: '118.82',
        score: '0.7791263297872341',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 97,
        code: 'EBAY',
        name: 'eBay Inc',
        value: '38.3',
        score: '0.4408789174362617',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 98,
        code: 'ANSS',
        name: 'ANSYS Inc',
        value: '232.04',
        score: '0.37143750000000003',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 99,
        code: 'ZM',
        name: 'Zoom Video Communications Inc',
        value: '74.54',
        score: '0.48581695703055994',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 100,
        code: 'VRSN',
        name: 'VeriSign Inc',
        value: '174.64',
        score: '0.4222194444444445',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 101,
        code: 'ALGN',
        name: 'Align Technology Inc',
        value: '217.95',
        score: '0.6776903857052371',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 102,
        code: 'SWKS',
        name: 'Skyworks Solutions Inc',
        value: '95.65',
        score: '0.7476367178097005',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 103,
        code: 'MTCH',
        name: 'Match Group Inc',
        value: '48.56',
        score: '0.6131',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 104,
        code: 'SPLK',
        name: 'Splunk Inc',
        value: '83.28',
        score: '0.408976602339766',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 105,
        code: 'NTES',
        name: 'NetEase Inc ADR',
        value: '78.95',
        score: '0.8124083333333334',
        posted_on: '2022-09-22T04:00:00.000Z'
      },
      {
        id: 106,
        code: 'DOCU',
        name: 'DocuSign Inc',
        value: '54',
        score: '0.42159090909090907',
        posted_on: '2022-09-22T04:00:00.000Z'
      }
    ];

    const cols = [
        {
            name: 'code',
            displayName: 'Code',
            className: 'Table-center '
        },
        {
            name: 'name',
            displayName: 'Name',
            className: 'Table-lText'
        },
        {
            name: 'value',
            displayName: 'Value',
            className: 'Table-center '
        },
        {
            name: 'score',
            displayName: 'Prediction',
            className: 'Table-center ',
            displayFormat: (value) => {
                if(value <= 0.20) {
                    return 'Strongly Sell'
                }
                if( value > 0.20 && value <= 0.40 ) {
                    return 'Sell'
                }
                if( value > 0.40 && value <= 0.60 ) {
                    return 'Hold'
                }
                if( value > 0.60 && value <= 0.80 ) {
                    return 'Buy'
                }
                if( value > 0.80 ) {
                    return 'Strongly Buy'
                }
            }
        },
        {
            name: 'posted_on',
            displayName: 'Date',
            className: 'Table-center ',
            displayFormat: (value) => {
                
                const d = new Date(value);

                let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
                let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
                let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);

                return `${day} ${month} ${year}`;
            }
        },
    ]
    return (
        <Table columns={cols} data={d} />
    );
}

export default App;