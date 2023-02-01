require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth mirror purity imitate private frame text'; 
let testAccounts = [
"0x711b063712d500f0ff678e48cb6f37ecd702b7f59a150e7b3acad2cbfcb96379",
"0x4252116d749df08df0142e1ccea91827154b4318fcef5be470ff0d0a3baceef4",
"0x4def34ee98f911d8e51139c27bbfd283509955dbfb04931284f82600863149d2",
"0x7742d6c424e62f42d3563b89d02f0684089fb674999931ab6efeadc216d798a0",
"0x4be535a1c286eb70696c7dc5c7cfdbce31dea341fdd617a9410c690e1be56559",
"0x7bc0777645abdbb9f41db01762d19f4f6e818f5496f04d84f8567a91bfcfd341",
"0xca78c5a1427f32501ddda6b2706da0b8f681c609028178a7051309c52a95b788",
"0xd087b973d0f6c11c6587ace1116c00786ae9c078e2ca7948ec2245e3d8deba13",
"0xbc53a78e738156d273e8bc82ab1c4830ef62ee8ca076f98850fb4722b1e267ba",
"0x066a223c229014cc29088f963e30647ea39c293bccdd49294e95c60618381379"
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
            version: '^0.8.0'
        }
    }
};

