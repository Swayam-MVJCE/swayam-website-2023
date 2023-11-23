import Events, { ResponsiveCanvas } from "@/components/Events";
import { images } from "@/constants/images";
const Home = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Events images={images} />
    </div>
  );
};

export default Home;
