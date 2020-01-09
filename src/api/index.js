const products = require('../products.json');
const fetchData = () => {
    return products;
}

export { fetchData };