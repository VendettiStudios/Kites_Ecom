import Layout from '@components/common/Layout/Layout';
import Carousel from '@components/ui/Carousel/Carousel';

const Home = () => {
  const images = ['/Image1.jpeg', '/Image2.jpeg', '/Image3.jpeg'];

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
