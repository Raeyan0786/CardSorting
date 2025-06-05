// components/MapDrawer.tsx
"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";

import { MapIcon } from "lucide-react";

const MapDrawer = () => {
  return (
    <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center z-50">
      <Drawer>
        <DrawerTrigger asChild>
          <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <MapIcon className="w-4 h-4" />
            MAPS
          </button>
        </DrawerTrigger>
        <DrawerContent className="p-0 max-h-[80%] overflow-hidden">
            <DrawerHeader>
            <DrawerTitle>Map View</DrawerTitle>
          </DrawerHeader>
          <div className="w-full h-[370px]">
            {/* Static image */}
            <img
          src="https://developers.google.com/static/maps/images/landing/hero_maps_static_api.png" // replace with actual map or Google Maps embed
          alt="Map"
          className="w-full h-full object-cover rounded-lg"
        />

          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MapDrawer;
