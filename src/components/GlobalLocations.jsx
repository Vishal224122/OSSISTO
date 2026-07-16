import React, { useState } from 'react';
import { MapPin, Info, ArrowRight, Building } from 'lucide-react';

export default function GlobalLocations() {
  const [activeRegion, setActiveRegion] = useState('All');
  const [selectedOffice, setSelectedOffice] = useState(0);

  const regions = ['All', 'North America', 'Asia', 'Europe'];

  const offices = [
    {
      name: "Sunnyvale (HQ)",
      region: "North America",
      address: "1248 Reamwood Avenue, Sunnyvale, CA 94089, USA",
      phone: "+1 408-743-7000",
      mapX: "20%",
      mapY: "42%"
    },
    {
      name: "Toronto",
      region: "North America",
      address: "2425 Matheson Blvd E, Suite 800, Mississauga, ON L4W 5K4, Canada",
      phone: "+1 905-361-2850",
      mapX: "32%",
      mapY: "38%"
    },
    {
      name: "London",
      region: "Europe",
      address: "New Broad Street House, 35 New Broad St, London EC2M 1NH, United Kingdom",
      phone: "+44 20-7194-8000",
      mapX: "48%",
      mapY: "32%"
    },
    {
      name: "Dublin",
      region: "Europe",
      address: "The Hyde Building, Carrickmines, Dublin 18, Ireland",
      phone: "+353 1-901-3800",
      mapX: "45%",
      mapY: "35%"
    },
    {
      name: "Singapore",
      region: "Asia",
      address: "10 Anson Road, #26-04 International Plaza, Singapore 079903",
      phone: "+65 6223-0199",
      mapX: "78%",
      mapY: "68%"
    },
    {
      name: "Bengaluru",
      region: "Asia",
      address: "Salarpuria Hallmark, Outer Ring Road, Kadubeesanahalli, Bengaluru, Karnataka 560103",
      phone: "+91 80-4668-2000",
      mapX: "70%",
      mapY: "60%"
    },
    {
      name: "Pune",
      region: "Asia",
      address: "Espace IT Park, Pune-Nagar Road, Somnath Nagar, Wadgaon Sheri, Pune, Maharashtra 411014",
      phone: "+91 20-6648-1000",
      mapX: "68%",
      mapY: "58%"
    },
    {
      name: "Hyderabad",
      region: "Asia",
      address: "Octave IT Park, HITEC City, Hyderabad, Telangana 500081",
      phone: "+91 40-4438-3000",
      mapX: "71%",
      mapY: "57%"
    }
  ];

  // Vector continent graphics based on active select tab
  const mapBackgrounds = {
    "All": "__OSSISTO_URL_PLACEHOLDER_0__",
    "North America": "__OSSISTO_URL_PLACEHOLDER_1__",
    "Asia": "__OSSISTO_URL_PLACEHOLDER_2__",
    "Europe": "__OSSISTO_URL_PLACEHOLDER_3__"
  };

  const filteredOffices = offices.filter(office => activeRegion === 'All' || office.region === activeRegion);

  return (
    <section id="contact" className="bg-[#0b0f19] py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-ossisto-blue text-xs font-bold uppercase tracking-widest block">Global Engineering Cell</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Delivery Centers & <span className="text-gradient font-black">Locations</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            We operate out of high-grade engineering campuses in Sunnyvale, Toronto, London, Dublin, and India to support key delivery channels.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center shrink-0">
          <div className="inline-flex bg-slate-950 border border-slate-900 p-1.5 rounded-xl space-x-1">
            {regions.map((region, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setActiveRegion(region);
                  setSelectedOffice(0); // Reset select index to avoid index out of bound on filters
                }}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeRegion === region 
                    ? 'bg-ossisto-blue text-white shadow-md' 
                    : 'bg-transparent text-gray-400 hover:text-white'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Map Layout Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Left panel: Interactive map overlay */}
          <div className="lg:col-span-8 relative aspect-video bg-slate-950 border border-slate-900 rounded-3xl overflow-hidden shadow-lg select-none">
            {/* World Map vector mockup representation */}
            <div className="absolute inset-0 bg-[#0f172a] opacity-35 bg-grid-pattern-dark pointer-events-none" />
            
            {/* Outline Continent Placeholder Graphics */}
            <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
              <span className="text-[10px] font-bold text-gray-700 uppercase tracking-widest block select-none">
                Interactive Global Coordinates Map Overlay
              </span>
            </div>

            {/* Pulsing Pin Markers */}
            {filteredOffices.map((office, idx) => {
              // Find original index in offices array
              const originalIndex = offices.findIndex(off => off.name === office.name);
              const isActive = selectedOffice === idx;

              return (
                <div 
                  key={idx}
                  className="absolute"
                  style={{ left: office.mapX, top: office.mapY }}
                >
                  <button 
                    onClick={() => setSelectedOffice(idx)}
                    className="relative flex items-center justify-center p-1 group/pin"
                    aria-label={`Select ${office.name} office`}
                  >
                    <span className={`absolute inline-flex h-6 w-6 rounded-full bg-ossisto-blue/30 animate-ping opacity-75 ${isActive ? 'scale-125' : 'scale-75'}`} />
                    <MapPin className={`w-6 h-6 shrink-0 relative transition-transform duration-300 ${
                      isActive 
                        ? 'text-ossisto-blue scale-110 shadow-lg' 
                        : 'text-gray-400 group-hover/pin:text-white'
                    }`} />
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 border border-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded shadow-md pointer-events-none opacity-0 group-hover/pin:opacity-100 transition-opacity whitespace-nowrap">
                      {office.name}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right panel: Address Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-slate-950 border border-slate-900 p-6 md:p-8 rounded-3xl shadow-lg">
            {filteredOffices[selectedOffice] ? (
              <div className="space-y-6 animate-fade-in">
                
                {/* Header */}
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1 bg-ossisto-blue/10 text-ossisto-blue text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                    <Building className="w-3 h-3" />
                    {filteredOffices[selectedOffice].region}
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-wide">
                    {filteredOffices[selectedOffice].name}
                  </h3>
                </div>

                {/* Details */}
                <div className="space-y-4 pt-4 border-t border-slate-900">
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Office Address</span>
                    <p className="text-xs text-gray-300 font-medium leading-relaxed">
                      {filteredOffices[selectedOffice].address}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">Contact Number</span>
                    <p className="text-xs text-white font-bold">
                      {filteredOffices[selectedOffice].phone}
                    </p>
                  </div>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full text-gray-500 space-y-2">
                <Info className="w-8 h-8" />
                <p className="text-xs font-semibold uppercase tracking-wider">No office selected</p>
              </div>
            )}

            {/* General location selector details */}
            <div className="pt-8 border-t border-slate-900 mt-6 space-y-3">
              <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-wider">Quick Select Office</span>
              <div className="grid grid-cols-2 gap-2">
                {filteredOffices.map((office, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedOffice(idx)}
                    className={`text-[10px] font-bold uppercase tracking-wider py-2 px-3 rounded-lg border text-center transition-all ${
                      selectedOffice === idx 
                        ? 'bg-ossisto-blue/10 border-ossisto-blue text-ossisto-blue font-black' 
                        : 'bg-slate-900 border-slate-900 text-slate-400 hover:border-slate-800'
                    }`}
                  >
                    {office.name.split(" ")[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
