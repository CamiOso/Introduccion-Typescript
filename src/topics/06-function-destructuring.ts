
interface Product {

    description: string;
    price:number;

}


const phone: Product = {
    description: 'Nokia',
    price: 150
}


const tablet: Product = {
    description: 'Ipad',
    price: 350
}



interface taxCalcultationOptions{
    tax:number;
    products:Product[];

}

function taxCalcultation(options:taxCalcultationOptions):number[]{

    let total=0;
    options.products.forEach(product=>{
        total+=product.price;
    });

    return [total,total*options.tax];

}

const shoppingCart=[phone,tablet];
const tax=0.15;



const resolve=taxCalcultation({tax,products:shoppingCart});

console.log('Total',resolve[0]);
console.log('Total',resolve[1]);




export {};