export type Service = {
  slug: string
  title: string
  shortTitle: string
  category: string
  summary: string
  description: string
  image: string
  handles: string[]
  benefits: string[]
  questions: [string, string][]
}

export const services: Service[] = [
  {
    slug: 'furnace-repair',
    title: 'Furnace Repair & Installation',
    shortTitle: 'Furnace repair & installation',
    category: 'HEATING',
    summary: 'Dependable warmth starts with a system you can count on.',
    description:
      'Whether your furnace has stopped working or it is time for a replacement, we help you understand the problem and choose a practical way forward.',
    image: '/images/technician-furnace.jpg',
    handles: [
      'No heat or uneven heating',
      'Strange noises or frequent cycling',
      'Furnace installation and replacement',
      'Seasonal furnace maintenance',
    ],
    benefits: [
      'Restore reliable warmth',
      'Address issues before they grow',
      'Keep your system running efficiently',
    ],
    questions: [
      [
        'What are common signs my furnace needs repair?',
        'No heat, unusual noises, frequent cycling, or uneven room temperatures are all reasons to have your furnace checked.',
      ],
      [
        'Can you install a new furnace?',
        'Yes. We help with furnace installation and replacement as well as repairs.',
      ],
    ],
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning Repair & Maintenance',
    shortTitle: 'Air conditioning',
    category: 'COOLING',
    summary: 'Cool, consistent comfort through the warmest months.',
    description:
      'When your air conditioner struggles to keep up, we diagnose the issue, explain the options, and help restore a comfortable home.',
    image: '/images/outdoor-ac.jpg',
    handles: [
      'AC troubleshooting and repair',
      'Air conditioner installation',
      'Seasonal maintenance',
      'Cooling performance concerns',
    ],
    benefits: [
      'Stay comfortable in hot weather',
      'Improve consistent cooling',
      'Help prevent avoidable breakdowns',
    ],
    questions: [
      [
        'Do you repair air conditioners?',
        'Yes. We diagnose and repair residential air conditioning systems.',
      ],
      [
        'Do you offer AC maintenance?',
        'Yes. Seasonal maintenance can help your system work reliably.',
      ],
    ],
  },
  {
    slug: 'heat-pump',
    title: 'Heat Pump Repair & Installation',
    shortTitle: 'Heat pumps',
    category: 'HEATING + COOLING',
    summary: 'One smart system for year-round comfort.',
    description:
      'Heat pumps provide heating and cooling in one system. We support installation, repair, and maintenance to help keep yours operating as it should.',
    image: '/images/heat-pump.jpg',
    handles: [
      'Heat pump repair',
      'New system installation',
      'System performance checks',
      'Routine maintenance',
    ],
    benefits: [
      'Heating and cooling in one system',
      'Comfort through changing seasons',
      'Practical efficiency options',
    ],
    questions: [
      [
        'Do you service heat pumps?',
        'Yes. We work on heat pump repair, installation, and maintenance.',
      ],
      [
        'Can a heat pump heat and cool?',
        'Yes. A heat pump can provide both heating and cooling for your home.',
      ],
    ],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater Repair',
    shortTitle: 'Water heaters',
    category: 'HOT WATER',
    summary: 'Reliable hot water for the routines that matter.',
    description:
      'Hot water is essential to daily life. We can assess water heater problems and recommend the right repair or next step for your home.',
    image: '/images/water-heater.jpg',
    handles: [
      'Loss of hot water',
      'Inconsistent water temperature',
      'Unusual water heater noises',
      'Water heater repair',
    ],
    benefits: [
      'Get everyday comfort back',
      'Understand the cause of the issue',
      'Make informed repair decisions',
    ],
    questions: [
      ['Do you repair water heaters?', 'Yes. Contact us to discuss your water heater issue.'],
      [
        'What should I do if I have no hot water?',
        'Call us with the symptoms you are seeing so we can discuss the next step.',
      ],
    ],
  },
  {
    slug: 'humidifier',
    title: 'Humidifier Installation',
    shortTitle: 'Home humidifiers',
    category: 'INDOOR AIR',
    summary: 'A more balanced feel inside your home.',
    description:
      'A whole-home humidifier can help support indoor comfort during dry seasons. We help with installation and system questions.',
    image: '/images/humidifier.jpg',
    handles: [
      'Whole-home humidifier installation',
      'Existing system assessment',
      'Humidity control questions',
      'Heating system integration',
    ],
    benefits: [
      'Support balanced indoor humidity',
      'Improve seasonal comfort',
      'Integrate with your home system',
    ],
    questions: [
      [
        'Do you install whole-home humidifiers?',
        'Yes. We can discuss a humidifier installation suited to your home.',
      ],
      [
        'Can a humidifier work with my furnace?',
        'Many whole-home humidifiers connect to the heating system. We can assess your setup.',
      ],
    ],
  },
  {
    slug: 'smart-thermostat',
    title: 'Smart Thermostat Installation',
    shortTitle: 'Smart thermostats',
    category: 'HOME CONTROL',
    summary: 'Comfort control that fits your routine.',
    description:
      'A smart thermostat can make it easier to manage indoor comfort. We help you select and install a compatible control for your heating and cooling system.',
    image: '/images/smart-thermostat.jpg',
    handles: [
      'Thermostat installation',
      'Compatibility assessment',
      'Control setup',
      'Heating and cooling integration',
    ],
    benefits: [
      'Simpler temperature control',
      'Scheduling that suits your routine',
      'Better visibility into home comfort',
    ],
    questions: [
      ['Do you install smart thermostats?', 'Yes. We offer smart thermostat installation.'],
      [
        'Will a smart thermostat work with my system?',
        'Compatibility depends on your equipment and wiring. We can review your setup.',
      ],
    ],
  },
  {
    slug: 'fireplace',
    title: 'Fireplace Service & Repair',
    shortTitle: 'Fireplace service & repair',
    category: 'FIREPLACES',
    summary: 'Safe, efficient warmth you can count on.',
    description:
      'From a fireplace that will not light to routine safety checks, we help keep your gas fireplace working reliably and safely all season.',
    image: '/images/fireplace.jpg',
    handles: [
      'Fireplace will not light or stay lit',
      'Pilot light and ignition issues',
      'Annual safety and efficiency inspection',
      'Glass, logs, and component service',
    ],
    benefits: [
      'Safe, reliable operation',
      'Efficient warmth for the room',
      'Peace of mind before the season starts',
    ],
    questions: [
      [
        'Do you service gas fireplaces?',
        'Yes. We inspect, service, and repair residential gas fireplaces.',
      ],
      [
        'How often should a gas fireplace be serviced?',
        'An annual inspection before the heating season helps catch small issues early and keeps the unit running safely.',
      ],
    ],
  },
  {
    slug: 'gas-appliance',
    title: 'Gas Appliance Service & Repair',
    shortTitle: 'Gas appliance service & repair',
    category: 'GAS APPLIANCES',
    summary: 'Licensed gas work for furnaces, water heaters, and more.',
    description:
      'Our licensed gas technicians service the gas-fired equipment your home depends on, from furnaces and water heaters to boilers and other gas appliances.',
    image: '/images/gas-appliance.jpg',
    handles: [
      'Gas furnace and boiler service',
      'Gas water heater service',
      'Gas line and connection checks',
      'Licensed gas appliance installation',
    ],
    benefits: [
      'Work completed by a licensed gas technician',
      'Safer, more efficient gas appliances',
      'One team for all your gas-fired equipment',
    ],
    questions: [
      [
        'Are your gas technicians licensed?',
        'Yes. Gas appliance work is completed by a licensed gas technician.',
      ],
      [
        'What gas appliances do you service?',
        'We service gas furnaces, boilers, water heaters, and other common residential gas appliances.',
      ],
    ],
  },
]

export const faqs: [string, string][] = [
  [
    'What HVAC services do you provide?',
    'We help with furnaces, air conditioners, heat pumps, water heaters, humidifiers, smart thermostats, and routine maintenance.',
  ],
  [
    'Do you repair furnaces?',
    'Yes. We diagnose furnace problems and help with repairs and installation.',
  ],
  [
    'Do you install air conditioners?',
    'Yes. Contact us to discuss air conditioner installation, repair, or maintenance.',
  ],
  [
    'Do you service heat pumps?',
    'Yes. We help with heat pump repair, installation, and maintenance.',
  ],
  [
    'Do you provide HVAC maintenance?',
    'Yes. We provide seasonal maintenance for heating and cooling equipment.',
  ],
  [
    'Do you install smart thermostats?',
    'Yes. We can help assess compatibility and install a smart thermostat.',
  ],
  [
    'Do you repair water heaters?',
    'Yes. We can assess water heater problems and discuss repair options.',
  ],
  ['How can I request service?', 'Call or text 647-619-1472, or use the service request page.'],
]
