require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note snow clump hockey arctic tail gesture'; 
let testAccounts = [
"0x169aef63ae4e041a5622450b340994005fb9ffb5e6b081fafc4c6b45b1ab7ba6",
"0xa76426d6d3c0b2ede97d666fbc5ba824a8fb7e031d8ec591a614e636502fc5ef",
"0xe95385a2238c1f0fe3ced7b6ff4cedbe21060280aaf9fc0041e62e682e2609f2",
"0xe06701add6fed9faaacbb78f5d0faa39ac0846ed72bc720c8fbbb87ea9d9b4ca",
"0x7f722fc4c6b3c344dbeaa312744fa485165f0da809b60d5358b38152ca5c1491",
"0xa3b3eebd425c9d9d98c19cdbc6ea23e395dd7c22dfd2804247715ce5c6d15d92",
"0xfbda3965e7eacbf6489895c9e462e7b079683508a854b7bf37560df60f87dffa",
"0xf95635c12a1a9c76a167c7f71debca457790cc60d4a7b9eba81ebf771d7a1f58",
"0x902995c5515308d7cab54c66c9e2af09cbc3cb31c18180d17de6757d150a98c8",
"0xa927c1ab43e231b438132ca410130a3200cb7aa7c0407d12d33386cb48246406"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
