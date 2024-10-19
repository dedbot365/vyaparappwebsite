import React from "react";
import PartnerForm from "./partnerComponents/PartnerForm";
import AchievementSection from "./partnerComponents/AchievementSection";
import WhySection from "./partnerComponents/WhySection";
import BenefitsSection from "./partnerComponents/BenefitsSection";
import EmergingSection from "./partnerComponents/EmergingSection";
import FeaturesSection from "./partnerComponents/FeaturesSection";
import LastForm from "./partnerComponents/LastForm";

function PartnerWithUsPage() {
  return (
    <div>
      <PartnerForm />
      <AchievementSection />
      <WhySection />
      <BenefitsSection />
      <EmergingSection />
      <FeaturesSection />
      <LastForm />
    </div>
  );
}

export default PartnerWithUsPage;
