import "./Home.css";
import Table from './../../components/Table';


function App() {
    const c = ['name', 'code', 'market'];
    const d = [
        {
          "name": "Apple Inc",
          "code": "AAPL",
          "market": "NASDAQ"
        },
        {
          "name": "Microsoft Corp",
          "code": "MSFT",
          "market": "NASDAQ"
        },
        {
          "name": "Amazon.com Inc",
          "code": "AMZN",
          "market": "NASDAQ"
        },
        {
          "name": "Tesla Inc",
          "code": "TSLA",
          "market": "NASDAQ"
        },
        {
          "name": "Alphabet Inc",
          "code": "GOOG",
          "market": "NASDAQ"
        },
        {
          "name": "Alphabet Inc",
          "code": "GOOGL",
          "market": "NASDAQ"
        },
        {
          "name": "Meta Platforms Inc",
          "code": "META",
          "market": "NASDAQ"
        },
        {
          "name": "NVIDIA Corp",
          "code": "NVDA",
          "market": "NASDAQ"
        },
        {
          "name": "PepsiCo Inc",
          "code": "PEP",
          "market": "NASDAQ"
        },
        {
          "name": "Costco Wholesale Corp",
          "code": "COST",
          "market": "NASDAQ"
        },
        {
          "name": "Broadcom Inc",
          "code": "AVGO",
          "market": "NASDAQ"
        },
        {
          "name": "Cisco Systems Inc",
          "code": "CSCO",
          "market": "NASDAQ"
        },
        {
          "name": "T-Mobile US Inc",
          "code": "TMUS",
          "market": "NASDAQ"
        },
        {
          "name": "Texas Instruments Inc",
          "code": "TXN",
          "market": "NASDAQ"
        },
        {
          "name": "Comcast Corp",
          "code": "CMCSA",
          "market": "NASDAQ"
        },
        {
          "name": "QUALCOMM Inc",
          "code": "QCOM",
          "market": "NASDAQ"
        },
        {
          "name": "Adobe Inc",
          "code": "ADBE",
          "market": "NASDAQ"
        },
        {
          "name": "Amgen Inc",
          "code": "AMGN",
          "market": "NASDAQ"
        },
        {
          "name": "Advanced Micro Devices Inc",
          "code": "AMD",
          "market": "NASDAQ"
        },
        {
          "name": "Honeywell International Inc",
          "code": "HON",
          "market": "NASDAQ"
        },
        {
          "name": "Intel Corp",
          "code": "INTC",
          "market": "NASDAQ"
        },
        {
          "name": "Intuit Inc",
          "code": "INTU",
          "market": "NASDAQ"
        },
        {
          "name": "Netflix Inc",
          "code": "NFLX",
          "market": "NASDAQ"
        },
        {
          "name": "PayPal Holdings Inc",
          "code": "PYPL",
          "market": "NASDAQ"
        },
        {
          "name": "Starbucks Corp",
          "code": "SBUX",
          "market": "NASDAQ"
        },
        {
          "name": "Automatic Data Processing Inc",
          "code": "ADP",
          "market": "NASDAQ"
        },
        {
          "name": "Mondelez International Inc",
          "code": "MDLZ",
          "market": "NASDAQ"
        },
        {
          "name": "Gilead Sciences Inc",
          "code": "GILD",
          "market": "NASDAQ"
        },
        {
          "name": "Analog Devices Inc",
          "code": "ADI",
          "market": "NASDAQ"
        },
        {
          "name": "Applied Materials Inc",
          "code": "AMAT",
          "market": "NASDAQ"
        },
        {
          "name": "Regeneron Pharmaceuticals Inc",
          "code": "REGN",
          "market": "NASDAQ"
        },
        {
          "name": "Booking Holdings Inc",
          "code": "BKNG",
          "market": "NASDAQ"
        },
        {
          "name": "Vertex Pharmaceuticals Inc",
          "code": "VRTX",
          "market": "NASDAQ"
        },
        {
          "name": "Intuitive Surgical Inc",
          "code": "ISRG",
          "market": "NASDAQ"
        },
        {
          "name": "Fiserv Inc",
          "code": "FISV",
          "market": "NASDAQ"
        },
        {
          "name": "CSX Corp",
          "code": "CSX",
          "market": "NASDAQ"
        },
        {
          "name": "Activision Blizzard Inc",
          "code": "ATVI",
          "market": "NASDAQ"
        },
        {
          "name": "Charter Communications Inc",
          "code": "CHTR",
          "market": "NASDAQ"
        },
        {
          "name": "Micron Technology Inc",
          "code": "MU",
          "market": "NASDAQ"
        },
        {
          "name": "Lam Research Corp",
          "code": "LRCX",
          "market": "NASDAQ"
        },
        {
          "name": "Keurig Dr Pepper Inc",
          "code": "KDP",
          "market": "NASDAQ"
        },
        {
          "name": "Palo Alto Networks Inc",
          "code": "PANW",
          "market": "NASDAQ"
        },
        {
          "name": "American Electric Power Co Inc",
          "code": "AEP",
          "market": "NASDAQ"
        },
        {
          "name": "Marriott International Inc/MD",
          "code": "MAR",
          "market": "NASDAQ"
        },
        {
          "name": "Moderna Inc",
          "code": "MRNA",
          "market": "NASDAQ"
        },
        {
          "name": "Synopsys Inc",
          "code": "SNPS",
          "market": "NASDAQ"
        },
        {
          "name": "KLA Corp",
          "code": "KLAC",
          "market": "NASDAQ"
        },
        {
          "name": "Airbnb Inc",
          "code": "ABNB",
          "market": "NASDAQ"
        },
        {
          "name": "Monster Beverage Corp",
          "code": "MNST",
          "market": "NASDAQ"
        },
        {
          "name": "Cadence Design Systems Inc",
          "code": "CDNS",
          "market": "NASDAQ"
        },
        {
          "name": "MercadoLibre Inc",
          "code": "MELI",
          "market": "NASDAQ"
        },
        {
          "name": "O'Reilly Automotive Inc",
          "code": "ORLY",
          "market": "NASDAQ"
        },
        {
          "name": "Paychex Inc",
          "code": "PAYX",
          "market": "NASDAQ"
        },
        {
          "name": "Exelon Corp",
          "code": "EXC",
          "market": "NASDAQ"
        },
        {
          "name": "NXP Semiconductors NV",
          "code": "NXPI",
          "market": "NASDAQ"
        },
        {
          "name": "Autodesk Inc",
          "code": "ADSK",
          "market": "NASDAQ"
        },
        {
          "name": "Kraft Heinz Co/The",
          "code": "KHC",
          "market": "NASDAQ"
        },
        {
          "name": "Cintas Corp",
          "code": "CTAS",
          "market": "NASDAQ"
        },
        {
          "name": "Lululemon Athletica Inc",
          "code": "LULU",
          "market": "NASDAQ"
        },
        {
          "name": "Xcel Energy Inc",
          "code": "XEL",
          "market": "NASDAQ"
        },
        {
          "name": "Fortinet Inc",
          "code": "FTNT",
          "market": "NASDAQ"
        },
        {
          "name": "ASML Holding NV",
          "code": "ASML",
          "market": "NASDAQ"
        },
        {
          "name": "Marvell Technology Inc",
          "code": "MRVL",
          "market": "NASDAQ"
        },
        {
          "name": "Crowdstrike Holdings Inc",
          "code": "CRWD",
          "market": "NASDAQ"
        },
        {
          "name": "Microchip Technology Inc",
          "code": "MCHP",
          "market": "NASDAQ"
        },
        {
          "name": "Dexcom Inc",
          "code": "DXCM",
          "market": "NASDAQ"
        },
        {
          "name": "Atlassian Corp PLC",
          "code": "TEAM",
          "market": "NASDAQ"
        },
        {
          "name": "AstraZeneca PLC ADR",
          "code": "AZN",
          "market": "NASDAQ"
        },
        {
          "name": "Electronic Arts Inc",
          "code": "EA",
          "market": "NASDAQ"
        },
        {
          "name": "Cognizant Technology Solutions Corp",
          "code": "CTSH",
          "market": "NASDAQ"
        },
        {
          "name": "Dollar Tree Inc",
          "code": "DLTR",
          "market": "NASDAQ"
        },
        {
          "name": "Pinduoduo Inc ADR",
          "code": "PDD",
          "market": "NASDAQ"
        },
        {
          "name": "Ross Stores Inc",
          "code": "ROST",
          "market": "NASDAQ"
        },
        {
          "name": "Workday Inc",
          "code": "WDAY",
          "market": "NASDAQ"
        },
        {
          "name": "Illumina Inc",
          "code": "ILMN",
          "market": "NASDAQ"
        },
        {
          "name": "PACCAR Inc",
          "code": "PCAR",
          "market": "NASDAQ"
        },
        {
          "name": "Biogen Inc",
          "code": "BIIB",
          "market": "NASDAQ"
        },
        {
          "name": "Walgreens Boots Alliance Inc",
          "code": "WBA",
          "market": "NASDAQ"
        },
        {
          "name": "JD.com Inc ADR",
          "code": "JD",
          "market": "NASDAQ"
        },
        {
          "name": "Constellation Energy Corp",
          "code": "CEG",
          "market": "NASDAQ"
        },
        {
          "name": "Verisk Analytics Inc",
          "code": "VRSK",
          "market": "NASDAQ"
        },
        {
          "name": "Old Dominion Freight Line Inc",
          "code": "ODFL",
          "market": "NASDAQ"
        },
        {
          "name": "IDEXX Laboratories Inc",
          "code": "IDXX",
          "market": "NASDAQ"
        },
        {
          "name": "Fastenal Co",
          "code": "FAST",
          "market": "NASDAQ"
        },
        {
          "name": "Datadog Inc",
          "code": "DDOG",
          "market": "NASDAQ"
        },
        {
          "name": "Seagen Inc",
          "code": "SGEN",
          "market": "NASDAQ"
        },
        {
          "name": "Copart Inc",
          "code": "CPRT",
          "market": "NASDAQ"
        },
        {
          "name": "Lucid Group Inc",
          "code": "LCID",
          "market": "NASDAQ"
        },
        {
          "name": "Zscaler Inc",
          "code": "ZS",
          "market": "NASDAQ"
        },
        {
          "name": "Sirius XM Holdings Inc",
          "code": "SIRI",
          "market": "NASDAQ"
        },
        {
          "name": "Baidu Inc ADR",
          "code": "BIDU",
          "market": "NASDAQ"
        },
        {
          "name": "eBay Inc",
          "code": "EBAY",
          "market": "NASDAQ"
        },
        {
          "name": "ANSYS Inc",
          "code": "ANSS",
          "market": "NASDAQ"
        },
        {
          "name": "Zoom Video Communications Inc",
          "code": "ZM",
          "market": "NASDAQ"
        },
        {
          "name": "VeriSign Inc",
          "code": "VRSN",
          "market": "NASDAQ"
        },
        {
          "name": "Align Technology Inc",
          "code": "ALGN",
          "market": "NASDAQ"
        },
        {
          "name": "Skyworks Solutions Inc",
          "code": "SWKS",
          "market": "NASDAQ"
        },
        {
          "name": "Match Group Inc",
          "code": "MTCH",
          "market": "NASDAQ"
        },
        {
          "name": "Splunk Inc",
          "code": "SPLK",
          "market": "NASDAQ"
        },
        {
          "name": "NetEase Inc ADR",
          "code": "NTES",
          "market": "NASDAQ"
        },
        {
          "name": "DocuSign Inc",
          "code": "DOCU",
          "market": "NASDAQ"
        },
        {
          "name": "Okta Inc",
          "code": "OKTA",
          "market": "NASDAQ"
        }
    ];

    const cols = [
        {
            name: 'name',
            displayName: 'Name',
            className: 'Table-lText'
        },
        {
            name: 'code',
            displayName: 'Code',
            className: 'Table-center '
        },
        {
            name: 'market',
            displayName: 'Market',
            className: 'Table-center '
        }
    ]
    return (
        <Table columns={cols} data={d} />
    );
}

export default App;