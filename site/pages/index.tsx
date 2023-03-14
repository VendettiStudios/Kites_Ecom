import {Layout} from '@components/common';
import {Carousel} from '@components/ui';

const Home = () => {
  const images = ['/Image1.jpeg', '/Image2.jpeg', '/Image3.jpeg', '/Image4.jpeg', '/Image5.jpeg', '/Image6.jpeg'];

  return (
    <>
      <Carousel images={images} />
    </>
  );
};

Home.Layout = Layout;

export default Home;
