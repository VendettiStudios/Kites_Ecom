import Layout from '@components/common/Layout/Layout';
import Carousel from '@components/ui/Carousel/Carousel';

const Home = () => {
  const images = ['/image1.jpg', '/image2.jpg', '/image3.jpg'];

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
