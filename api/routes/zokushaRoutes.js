module.exports = function(app) {
  var products = require('../controllers/zokushaController');

  app.route('/products')
    .get(products.list_all_products)
    .post(products.create_a_product)

  app.route('/products/:productId')
    .put(products.update_a_product)
    .delete(products.delete_a_product)
};
