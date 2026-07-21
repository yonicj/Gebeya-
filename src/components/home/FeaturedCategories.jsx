import { categories } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import CategoryCard from '../products/CategoryCard';

export default function FeaturedCategories() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Shop by Category"
          subtitle="Discover products from local Batu businesses across diverse categories"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
