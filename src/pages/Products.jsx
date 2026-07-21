import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, categories } from '../data/products';
import { getSellerProducts } from '../utils/sellerHub';
import PageHeader from '../components/ui/PageHeader';
import SearchBar from '../components/ui/SearchBar';
import ProductCard from '../components/products/ProductCard';
import Pagination from '../components/products/Pagination';

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const q = searchParams.get('search');
    const c = searchParams.get('category');
    if (q) setSearch(q);
    if (c) setCategory(c);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const sellerProducts = getSellerProducts();
    const all = [...sellerProducts, ...products];
    return all.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      const query = search.toLowerCase().trim();
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        (p.shortDescription || '').toLowerCase().includes(query) ||
        (p.categoryLabel || '').toLowerCase().includes(query) ||
        (p.shopName || '').toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (search.trim()) params.set('search', search.trim());
    else params.delete('search');
    setSearchParams(params);
  };

  const handleCategoryChange = (cat) => {
    setCategory(cat);
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('category');
    else params.set('category', cat);
    setSearchParams(params);
  };

  return (
    <>
      <PageHeader
        title="Our Products"
        subtitle="Browse products from local Batu shops. Contact us to place your order."
      />

      <section className="py-12 md:py-16 bg-[#fafafa] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                <SearchBar
                  value={search}
                  onChange={setSearch}
                  onSubmit={handleSearchSubmit}
                />

                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleCategoryChange('all')}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        category === 'all'
                          ? 'bg-sage-100 text-sage-700'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      All Products
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.slug)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          category === cat.slug
                            ? 'bg-sage-100 text-sage-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-500 text-sm">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              {paginatedProducts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white rounded-2xl border border-gray-100"
                >
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearch('');
                      setCategory('all');
                      setSearchParams({});
                    }}
                    className="mt-4 text-sage-600 font-medium hover:text-sage-700"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
