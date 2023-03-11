import Layout from '@components/common/Layout/Layout';
import Carousel from '@components/ui/Carousel/Carousel';
import Image from 'next/image';

const Home = () => {
  const images = ['/Image1.jpeg', '/Image2.jpeg', '/Image3.jpeg'];

  return (
    <>
      <Carousel images={images} />
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
