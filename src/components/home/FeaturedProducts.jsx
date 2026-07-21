import { getFeaturedProducts } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../products/ProductCard';
import Button from '../ui/Button';

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Products"
          subtitle="Handpicked items from our partner shops in Batu town"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/products">View All Products</Button>
        </div>
      </div>
    </section>
  );
}
