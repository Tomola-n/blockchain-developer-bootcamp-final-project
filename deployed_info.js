var deploy_account = '0x369bc12b2f6DFCd13bD117825EC0e5d2bdDc42ae';

var nft_address = '0xF7441F57d0685240020b98b30320b827c665697B';
var nft_abi = [{"constant":true,"inputs":[{"name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x01ffc9a7"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x06fdde03"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x081812fc"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x095ea7b3"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x18160ddd"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x23b872dd"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2f745c59"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x40c10f19"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x42842e0e"},{"constant":true,"inputs":[{"name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x4f6ccce7"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6352211e"},{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x70a08231"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x95d89b41"},{"constant":false,"inputs":[{"name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x983b2d56"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x98650275"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"params","outputs":[{"name":"itemName","type":"string"},{"name":"author","type":"string"},{"name":"modified","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x9d2f053c"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa22cb465"},{"constant":true,"inputs":[{"name":"account","type":"address"}],"name":"isMinter","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaa271e1a"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xb88d4fde"},{"constant":true,"inputs":[{"name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc87b56dd"},{"constant":true,"inputs":[{"name":"owner","type":"address"},{"name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xe985e9c5"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"tokenId","type":"uint256"},{"indexed":false,"name":"tokenURI","type":"string"}],"name":"Mint","type":"event","signature":"0x85a66b9141978db9980f7e0ce3b468cebf4f7999f32b23091c5c03e798b1ba7a"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterAdded","type":"event","signature":"0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"}],"name":"MinterRemoved","type":"event","signature":"0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event","signature":"0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"approved","type":"address"},{"indexed":true,"name":"tokenId","type":"uint256"}],"name":"Approval","type":"event","signature":"0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"operator","type":"address"},{"indexed":false,"name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event","signature":"0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"},{"constant":false,"inputs":[{"name":"_itemName","type":"string"},{"name":"_author","type":"string"},{"name":"_modified","type":"string"},{"name":"_ipfsHash","type":"string"},{"name":"_tokenURI","type":"string"}],"name":"mintExhibitAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x81c14b9d"},{"constant":false,"inputs":[{"name":"_initOwner","type":"address"},{"name":"_itemName","type":"string"},{"name":"_author","type":"string"},{"name":"_modified","type":"string"},{"name":"_ipfsHash","type":"string"},{"name":"_tokenURI","type":"string"}],"name":"mintExhibitAsset","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xbfb6970b"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getExhibitParam","outputs":[{"name":"itemName","type":"string"},{"name":"author","type":"string"},{"name":"modified","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3cb168cc"}];

var sl_address = '0x602BaC5Cb8E5A339DD7e3F8b25165e86d5eBe612';
var sl_abi = [{"constant":true,"inputs":[],"name":"successfulBidderAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3c0b5ffe"},{"constant":true,"inputs":[],"name":"exhibitionTokenId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x66822d1f"},{"constant":true,"inputs":[],"name":"finalProjectNFT","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x80299779"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8da5cb5b"},{"constant":true,"inputs":[],"name":"contractTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xa66d91e6"},{"constant":true,"inputs":[],"name":"phase","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xb1c9fe6e"},{"constant":true,"inputs":[],"name":"exhibitorBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xbd647005"},{"constant":true,"inputs":[],"name":"exhibitorAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc47399a3"},{"inputs":[],"payable":true,"stateMutability":"payable","type":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"name","type":"string"},{"indexed":false,"name":"addvalue","type":"uint256"}],"name":"BidLog","type":"event","signature":"0x7dd4c211907874d2cdfc191e2a7d50490253f742a1c58a0ed971b037d6a965ac"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"WidhDrawETHLog","type":"event","signature":"0xdd399e01119123a796cba113646b5b9c4870e027fcac652483907533a4af9eee"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"exhibitNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x7e4d4536"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"set721ContractAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x58d5d666"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"checkApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xaf3be4d8"},{"constant":false,"inputs":[{"name":"_name","type":"string"},{"name":"_duration","type":"uint256"},{"name":"_receivable","type":"uint256"}],"name":"firstBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x24c2b6b5"},{"constant":false,"inputs":[],"name":"addBid","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x782a5c82"},{"constant":true,"inputs":[],"name":"getBiddersNum","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x8f72a84c"},{"constant":true,"inputs":[{"name":"_idx","type":"uint256"}],"name":"getBidderInfoByIndex","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3e2302b9"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getBidderInfoByAddr","outputs":[{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x1cc1641a"},{"constant":false,"inputs":[],"name":"withDrawBidders","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x2fc77661"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_duration","type":"uint256"}],"name":"borrowFund","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x45f52b35"},{"constant":false,"inputs":[],"name":"repayFund","outputs":[],"payable":true,"stateMutability":"payable","type":"function","signature":"0x44896c45"},{"constant":false,"inputs":[],"name":"transferNFT","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xa4fa3734"}];

