const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash')
 class Block {
      constructor ({timestamp,lastHash,hash,data}){
          this.timestamp = timestamp;
         this.lastHash = lastHash;
         this.data= data;
         this.hash = hash;
      }

      static genesis() {
          return new this(GENESIS_DATA);
     }
     static minedBlock({lastBlock,data}){
         const timestamp = Date.now
         const lastHash = lastBlock.hash;
         return new this(
             {
                 timestamp,
                 lastHash,
                data,
                hash: cryptoHash(timestamp,lastHash,data)

             }
         );`
        `   
     }
 }


//    const block1 = new Block({timestamp:'01/01/01',lastHash: 'foo-lasthash',hash:'foo-hash',data:'foo-data'});
//    console.log('block1',block1)
   module.exports = Block;