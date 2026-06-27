export const transportOptions = [
  {
    id: 'flights',
    title: 'Flights',
    icon: 'Plane',
    tag: 'Air Travel',
    description:
      'Mactan-Cebu International Airport (MCIA) handles domestic and international routes. Located in Lapu-Lapu City, about 30–45 minutes from downtown Cebu City.',
    tips: [
      'Terminal 1: domestic flights — Terminal 2: international flights',
      'Arrive 2 hours early for domestic, 3 hours for international',
      'Grab and metered taxis are available outside both terminals',
    ],
    providers: [
      { name: 'Cebu Pacific', url: 'https://www.cebupacificair.com' },
      { name: 'Philippine Airlines', url: 'https://www.philippineairlines.com' },
      { name: 'AirAsia', url: 'https://www.airasia.com' },
    ],
  },
  {
    id: 'ferries',
    title: 'Ferries & Boats',
    icon: 'Ship',
    tag: 'Sea Travel',
    description:
      'Cebu Port serves inter-island routes to Bohol, Leyte, Mindanao, Palawan, and Manila. Ferries range from fast crafts (1–2 hrs) to overnight vessels.',
    tips: [
      'Pier 1–4 at Cebu City Port for major routes',
      'Bring valid ID — required at port check-in',
      'Arrive at least 45–60 minutes before departure',
    ],
    providers: [
      { name: '2GO Travel', url: 'https://www.2go.com.ph' },
      { name: 'Oceanjet', url: 'https://www.oceanjet.net' },
      { name: 'Lite Ferries', url: 'https://www.liteferries.com' },
      { name: 'Trans-Asia Shipping', url: 'https://www.transasiashipping.com' },
    ],
  },
  {
    id: 'taxi',
    title: 'Taxis & Ride-Hailing',
    icon: 'Car',
    tag: 'On-Demand',
    description:
      'Grab is the dominant app-based service in Metro Cebu. Traditional yellow taxis also operate throughout the city — always insist on the meter.',
    tips: [
      'Grab offers fixed pricing and a receipt — safer for tourists',
      'Flag yellow taxis at the roadside and insist on the meter',
      'Micab is a local Cebu ride-hailing alternative',
    ],
    providers: [
      { name: 'Grab', url: 'https://www.grab.com' },
      { name: 'Micab', url: 'https://www.micab.ph' },
    ],
  },
  {
    id: 'bus',
    title: 'Buses',
    icon: 'Bus',
    tag: 'Provincial',
    description:
      'Provincial buses from two main terminals cover routes across Cebu Island — ideal for reaching towns like Oslob, Moalboal, Sogod, and Bogo.',
    tips: [
      'South Bus Terminal (Natalio Bacalso Ave.) → south Cebu routes',
      'North Bus Terminal (A.S. Fortuna, Mandaue) → north Cebu routes',
      'Air-conditioned and ordinary buses are available at different fares',
    ],
    providers: [
      {
        name: 'South Bus Terminal (Google Maps)',
        url: 'https://maps.google.com/?q=South+Bus+Terminal+Cebu',
      },
      {
        name: 'North Bus Terminal (Google Maps)',
        url: 'https://maps.google.com/?q=North+Bus+Terminal+Cebu',
      },
    ],
  },
  {
    id: 'jeepney',
    title: 'Jeepneys',
    icon: 'Truck',
    tag: 'City Routes',
    description:
      "Modernized e-jeepneys are Cebu's backbone public transport. They follow fixed routes across the city and are the cheapest way to get around Metro Cebu.",
    tips: [
      'Minimum fare starts at ₱15–₱18 for the first 4km',
      'Pass your fare forward to the driver — common practice',
      'Route signs are on the jeepney windshield or roof',
    ],
    providers: [],
  },
  {
    id: 'habal',
    title: 'Habal-Habal',
    icon: 'Bike',
    tag: 'Motorbike',
    description:
      'Motorcycle taxis fill the gap in areas buses and jeepneys can't reach — especially hillside barangays, towns outside the city, and tourist spots.',
    tips: [
      'Negotiate the fare clearly before you ride',
      'Common in Moalboal, Oslob, and mountain barangays',
      'Always wear the helmet if the driver provides one',
    ],
    providers: [],
  },
];
