import Gallery from "./pages/galary/page";
import ProfileCard from "./pages/profile/page";


export default function Home() {

  return (
  <div className="flex flex-col md:flex-row min-h-screen font-sans justify-center items-center ">
  {/* Left Side */}
  <div className="flex-1 flex items-center justify-center font-black text-2xl md:w-1/2 ">
   
  </div>

  {/* Right Side */}
  <div className="flex-1 flex-row  md:w-1/2 mr-2 h-full ">
    <ProfileCard/>
    <Gallery/>
  </div>
</div>

  );
}
