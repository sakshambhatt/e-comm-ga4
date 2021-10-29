import { createServer, Model, RestSerializer } from "miragejs";
import { shoeList } from "./shoes";

export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      product: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 10;
      this.resource("products");
    },

    seeds(server) {
      shoeList.forEach(
        ({
          id,
          name,
          brand,
          category,
          bestFor,
          quantity,
          price,
          globalDiscount,
          imageUrl,
          addedToCart,
          addedToWishlist,
          rating,
          delivery,
          colors,
          sizes
        }) => {
          server.create("product", {
            id,
            name,
            brand,
            category,
            bestFor,
            quantity,
            price,
            globalDiscount,
            imageUrl,
            addedToCart,
            addedToWishlist,
            rating,
            delivery,
            colors,
            sizes
          });
        }
      );
    }
  });
}
