const Blockchain = require('./blockchain');
const Block = require('./block');

describe('Blockchain', () =>{
    const blockchain = new Blockchain
    it('contains a "chain instance of Array"',  () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });
    it('starts with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    }) ;

    it('add a new block to the chain', () => {
        const newData = 'foo bar';
        blockchain.addBlock({data:newData});
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
        
    });
});

describe('Blockchain', () =>{
    const blockchain = new Blockchain
    it('contains a "chain instance of Array"',  () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });
    it('starts with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    }) ;

    it('add a new block to the chain', () => {
        const newData = 'foo bar';
        blockchain.addBlock({data:newData});
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
        
    });
});
