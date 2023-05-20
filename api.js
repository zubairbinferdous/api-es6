const user = {
    name:'zubi',
    roll: 50 ,
}
// javascript object notation  -> json
const json = JSON.stringify(user);
console.log(user);
console.log(json);

const shop = {
    name:'zubi',
    roll: 50 ,
    address:{
        road:'hello is ok',
        city:'this is fine to me ',
    },
    product: ['laptop' , 'pc' , 'monitor' , 'mick'],
    revenue: 5000,
    isOpen :true
}

console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);


