import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Features of Vyapar Billing Software for PC
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/07/Ico_Barcode-SKU-Management.png"
          title="Barcode Scanner"
          altText="Barcode scan icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/08/Ico_Customisable-Invoices.png"
          title="Invoice Customization & Sharing"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/09/Ico_Custom-Fields-13.png"
          title="Business Custom Fields"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/08/Ico_Easy-Tax-Reporting.png"
          title="GST Compliant"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/09/Ico_E-Invoice-E-Way-Bill-Creation.png"
          title="E-invoice & Eway Bill Creation"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/08/Ico_Customisable-Alerts-And-Notifications.png"
          title="Payment Reminders"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/09/Ico_Whatsapp-Customisation.png"
          title="WhatsApp Personalization"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/07/Ico_Printer.png"
          title="Direct Print Compatibility"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/08/WebPage-Images-V9_Track-Cash-Flow.png"
          title="Cash and Bank Management"
          altText="Custom invoice icon"
        />
        <FeatureCard
          imageUrl="https://vyaparapp.in/v/z/wp-content/uploads/2024/08/Multi-Payment-Support.png"
          title="Multiple Payment Modes"
          altText="Custom invoice icon"
        />
        {/* Add more FeatureCard components as needed */}
      </div>
    </section>
  );
};

export default FeaturesSection;
