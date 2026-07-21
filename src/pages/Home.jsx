import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromotionalBanners from '../components/home/PromotionalBanners';
import VerifiedSellers from '../components/home/VerifiedSellers';
import HowItWorks from '../components/home/HowItWorks';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <PromotionalBanners />
      <FeaturedProducts />
      <VerifiedSellers />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
