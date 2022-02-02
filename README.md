https://betterprogramming.pub/how-to-supply-assets-to-the-aave-protocol-programmatically-acfb0875a2f0


LendingPoolAddressesProvider:
"0x178113104fEcbcD7fF8669a0150721e231F0FD4B"
https://mumbai.polygonscan.com/address/0x178113104fEcbcD7fF8669a0150721e231F0FD4B/transactions#readContract

LendingPool = LendingPoolAddressesProvider.getLendingPool()

LendingPool Docs: https://docs.aave.com/developers/v/2.0/the-core-protocol/lendingpool

Deposit on LendingPool:
function deposit(address asset, uint256 amount, address onBehalfOf, uint16 referralCode)

Mumbai RPC

https://speedy-nodes-nyc.moralis.io/aaf5f27c6c7a9ad182a69ccd/polygon/mumbai

# NFT-With-Perpetual-Value

### Short Description:

NFTs are speculative and static in nature; once purchased, the value is set by potential buyers. If no one wants to purchase yours, you will lose all of your money. Using your NFT, we want to establish a warranty for your mint, produce value, and let you take out loans. :D

### Long Description:

This is a one-of-a-kind NFT collection that uses its NFTs to build an entire DeFi protocol.

After a mint, the entire purchase value goes to the Protocol Treasury, and it's available at all times only for the current owner of the NFT; No more waiting for someone to buy your NFT, and ending up never finding a buyer.

The Treasury will use a series of DeFi protocols such as AAVE and Compound to stake the ETH and generate value. The rewards will be redistributed to users that agree to lock their NFTs in the Protocol Staking contract (The Museum).

The Protocol Treasury will also allow users to take loans using their NFTs as collateral. Mint, stake and earn passive income by using your NFT. On top of that, if you want to hold but use a percentage of your NFT value, take a loan!

A user can burn the NFT and get a 90% cashback.

No more speculative and static NFTs! Our Protocol creates dynamic NFTs used to generate yield and take loans, all while retaining a price warranty at all times!

### IDEAS

* incremetar los rewards dependiendo de la cantidad de past owners, generalmente entre menos duenos pasados mejor es el carro (seria algo asi con cuadros?)

* Incrementar/redicir rewards basados en las propiedades del NFT (dificil de hacer pero interesante)


### Liquidation


100% => 1 ether
50 % => .5 

...
...
.6 ether => liquidian
10% => 0.1 ether

.7 ETH
EN tesoro queda 0.3ETH y la obra