import React, { useState } from 'react';
import Tab from './Tab'; 
import TabContent from './TabContent'; 

const TabContainer = () => {
    const [selectedTab, setSelectedTab] = useState(0);
  
    const tabs = [
      'Tax Invoicing',
      'Inventory Management',
      'Accounting and Analysis',
      'Marketing',
      'Government Compliances',
      'Sync'
    ];
  
    const contents = [
      {
        title: 'Tax Invoicing',
        description: 'Simplify and Accelerate Your Invoicing Process with Vyapar’s Powerful Tax Invoicing Solutions!',
        points: [
          'Professional invoices in 30 seconds',
          'Send paperless invoices on WhatsApp instantly',
          'Customise invoice'
        ],
        imageUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/gst_invoicing.webp?v=0.0',
        playIconUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/play_btn_icon.svg'
      },

      {
        title: 'Inventory Management',
        description: 'Simplify and Accelerate Your Invoicing Process with Vyapar’s Powerful Tax Invoicing Solutions!',
        points: [
          'Professional invoices in 30 seconds',
          'Send paperless invoices on WhatsApp instantly',
          'Customise invoice'
        ],
        imageUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/gst_invoicing.webp?v=0.0',
        playIconUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/play_btn_icon.svg'
      },

      {
        title: 'Accounting and Analysis',
        description: 'Simplify and Accelerate Your Invoicing Process with Vyapar’s Powerful Tax Invoicing Solutions!',
        points: [
          'Professional invoices in 30 seconds',
          'Send paperless invoices on WhatsApp instantly',
          'Customise invoice'
        ],
        imageUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/gst_invoicing.webp?v=0.0',
        playIconUrl: 'https://vyaparwebsiteimages.vypcdn.in/marketing-images/images/web-invoicing/play_btn_icon.svg'
      },
      // Add content for other tabs similarly
    ];
  
    return (
      <div className="p-14 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">We Have Everything For Your Business</h2>
        
        <div className="bg-white shadow-md rounded-lg p-28">
          {/* Tabs */}
          <div className="tabs-v flex justify-center space-x-4 mb-6">
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab}
                isSelected={selectedTab === index}
                onClick={() => setSelectedTab(index)}
              />
            ))}
          </div>
  
          {/* Tab Content */}
          <TabContent content={contents[selectedTab]} />
        </div>
      </div>
    );
  };
  
  export default TabContainer;
  