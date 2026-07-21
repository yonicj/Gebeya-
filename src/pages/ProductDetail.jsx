import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProductById, getSuggestedProducts, formatPrice } from '../data/products';
import { IconChevronLeft } from '../utils/icons';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/products/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const suggested = getSuggestedProducts(product.id);
  const images = product.gallery?.length ? product.gallery : [product.image];

  return (
    <>
      <section className="pt-24 pb-12 md:pt-28 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-700 font-medium text-sm mb-8 transition-colors"
          >
            <IconChevronLeft />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg border border-gray-100">
                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                        activeImage === i ? 'border-sage-500' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-3 py-1 bg-sage-100 text-sage-700 text-sm font-medium rounded-full">
                {product.categoryLabel}
              </span>
              <h1 className="mt-4 font-display text-3xl md:text-4xl font-bold text-gray-800">
                {product.name}
              </h1>
              <p className="mt-3 text-2xl font-semibold text-emerald-600">
                {formatPrice(product.price, product.currency)}
              </p>

              <div className="mt-6 p-4 bg-sage-50 rounded-xl border border-sage-100">
                <p className="text-sm text-gray-500">Available from</p>
                <p className="font-semibold text-gray-800">{product.shopName}</p>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed">{product.description}</p>

              <div className="mt-8 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-sm text-gray-500 mb-4">
                  Interested in this product? Contact Batu Gebeya and we&apos;ll handle sourcing and delivery for you.
                </p>
                <Button
                  to={`/contact?product=${encodeURIComponent(product.name)}`}
                  variant="emerald"
                  className="w-full sm:w-auto"
                >
                  Contact Batu Gebeya
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {suggested.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title="You May Also Like" subtitle="Similar products from our marketplace" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggested.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
