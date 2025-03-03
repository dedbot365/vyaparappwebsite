import React, { useState } from 'react';
import Tab from './Tab2';
import TabContent from './TabContent2';

const VerticalTabContainer = () => {
  const tabs = [
    { label: 'Scan Barcode for Quick Billing', content: 'Enhance billing efficiency with Vyapar’s barcode scanner integration. Instantly bill products by scanning barcodes during checkout. Effortlessly track and trace products, streamlining inventory management.', imageUrl: 'https://vyaparapp.in/v/z/wp-content/uploads/2024/08/Img_Quick-Billing-1024x615.webp', altText: 'Quick billing using barcode scanning feature' },
    { label: 'Invoice Customization and Sharing', content: 'Customize and share invoices effortlessly with Vyapar’s versatile billing software.' },
    { label: 'Business Custom Fields', content: 'Add custom fields to your business documents to capture unique data specific to your business needs.' },
    { label: 'GST Compliant', content: 'Vyapar’s software ensures GST compliance in all invoices and reports, making tax filing easy and accurate.' },
    // Additional tabs here...
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="vertical-tab-2-container max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Free Billing Software for PC Delivering Business Financial Efficiency
      </h2>
      <div className="flex flex-col md:flex-row">
        {/* Tab List */}
        <div className="tab-list flex md:flex-col md:w-1/3 mb-4 md:mb-0">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              isSelected={index === selectedTab}
              onClick={() => setSelectedTab(index)}
            />
          ))}
        </div>
        
        {/* Tab Content */}
        <div className="tab-content flex-1 md:ml-6 bg-gray-100 p-4 rounded-md shadow-md">
          <TabContent
            text={tabs[selectedTab].content}
            imageUrl={tabs[selectedTab].imageUrl}
            altText={tabs[selectedTab].altText || ''}
          />
        </div>
      </div>
    </div>
  );
};

export default VerticalTabContainer;
