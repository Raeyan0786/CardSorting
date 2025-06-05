// components/ItineraryPage.tsx
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, CardContent } from "../components/ui/card";
import {
  EllipsisVertical,
  Equal,
  MapPin,
  Paperclip,
  Pencil,
  Trash2,
} from "lucide-react";
import MapDrawer from "../components/MapDrawer";

const itineraryItems = [
  {
    id: 1,
    title: "India Gate",
    rating: "4.6",
    reviews: "281,124",
    description:
      "India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British.",
    image:
      "https://imgcld.yatra.com/ytimages/image/upload/t_yt_blog_w_800_c_fill_g_auto_q_auto:good_f_jpg/v1456139572/Delhi091.jpg", // Replace with actual image paths
  },
  {
    id: 2,
    title: "Red Fort",
    rating: "4.5",
    reviews: "168,729",
    description:
      "The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxWC1VCOIaI2fi_atQCfjQBQJNePAjqMImGQ&s",
  },
  {
    id: 3,
    title: "Qutub Minar",
    rating: "4.5",
    reviews: "151,556",
    description:
      "Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi's Mehrauli area.",
    image:
      "https://dynamic-media.tacdn.com/media/photo-o/2f/bc/fe/d3/caption.jpg?w=700&h=500&s=1",
  },
  {
    id: 4,
    title: "Lotus Temple",
    rating: "4.5",
    reviews: "67,772",
    description:
      "Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baháʼí faith.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/LotusDelhi.jpg",
  },
  {
    id: 5,
    title: "Humayun’s",
    rating: "4.5",
    reviews: "46,024",
    description:
      "Humayun’s tomb is the final resting place of the Mughal Emperor Humayun, and was the first garden-tomb on the Indian subcontinent.",
    image:
      "https://images.pexels.com/photos/12703652/pexels-photo-12703652.jpeg?cs=srgb&dl=pexels-pranavsinh232-12703652.jpg&fm=jpg",
  },
];

type ItineraryItem = {
  id: number;
  title: string;
  rating: string; // if it's always a string like "4.6", otherwise change to `number`
  reviews: string; // if it's always a string like "281,124", otherwise change to `number`
  description: string;
  image: string; // image path or URL
};

const Home = () => {
  const [inputs, setInputs] = useState<ItineraryItem[]>(itineraryItems);
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = [...inputs];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setInputs(items);
  };
  return (
    <div className="relative flex flex-col md:flex-row h-screen p-4 gap-4">
      {/* Left Section - Itinerary */}
      <MapDrawer />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="inputs">
          {(provided) => (
            <div
              className="md:w-1/2 flex flex-col gap-4 overflow-y-scroll no-scrollbar"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h2 className="text-2xl font-bold text-pink-700">YZZ Travel</h2>
              <h3 className="text-xl font-semibold">Itinerary</h3>
              {inputs.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card key={item.id} className="relative flex gap-4 p-4">
                        <div className="flex items-center">
                          <Equal className="w-6 h-6" />
                        </div>

                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 lg:w-40 lg:h-40 rounded-md object-cover hidden lg:block"
                        />
                        <div className=" absolute top-8  lg:top-10 left-8  rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 24 24"
                            fill="#C64DFF"
                            stroke="#C64DFF"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-droplet-icon lucide-droplet"
                          >
                            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                          </svg>
                        </div>
                        <div className="absolute top-9 lg:top-11 left-[3.2rem]">
                          <p className="text-white">{item.id}</p>
                        </div>
                        <CardContent className="p-0 flex-1">
                          <div className="flex justify-between items-start">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-20 h-20 lg:w-40 lg:h-40 rounded-md object-cover lg:hidden"
                            />
                            <div>
                              <h4 className="text-lg font-semibold">{`${item.title}`}</h4>
                              <div className="text-sm text-gray-500 flex gap-1 mt-4">
                                <span>⭐ {item.rating}</span>
                                <span>({item.reviews})</span>
                              </div>
                            </div>
                            <div className="flex gap-2 mt-1">
                              <MapPin className="w-4 h-4 text-blue-500" />
                              <Paperclip className="hidden lg:block w-4 h-4 text-gray-500" />
                              <Trash2 className="hidden lg:block w-4 h-4 text-red-500" />
                              <EllipsisVertical className="lg:hidden w-4 h-4 text-[#344767]" />
                            </div>
                          </div>
                          <div className="flex gap-2 bg-[#F8F9FA] px-4 py-1 rounded-lg mt-2">
                            <p className="hidden lg:block text-sm text-[#343A40] mt-2 max-w-[94%]">
                              {item.description}
                            </p>
                            <p className=" lg:hidden text-sm text-[#343A40] mt-2  max-w-[90%]">
                              {item.description}
                            </p>
                            <Pencil className=" w-6 h-6 text-[#344767] my-auto" />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Right Section - Google Map */}
      <div className="hidden lg:block md:w-1/2 w-full">
        <img
          src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" // replace with actual map or Google Maps embed
          alt="Map"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
