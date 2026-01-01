import React from 'react';
import {
  HeroContainer,
  HeroContent,
  Tagline,
  HeroTitle,
  Highlight,
  HeroDescription,
  CTAButtonGroup,
  CTAButtonPrimary,
  CTAButtonSecondary
} from '../styles/HeroSection.styles';

const HeroSection: React.FC = () => {
  const appSubdomain = process.env.REACT_APP_APP_SUBDOMAIN || 'app.azzurevipperks.com';

  const handleLaunchApp = () => {
   
    window.open(`https://${appSubdomain}`, '_blank');
  };

  const handleScheduleCall = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      <HeroContent>
        <Tagline>Transform Your Everyday</Tagline>
        <HeroTitle>
          Live the Premium Life.
          <Highlight>Gain Elite Privileges.</Highlight>
        </HeroTitle>
        <HeroDescription>
          Become part of a select circle of sophisticated members savoring extraordinary experiences, high-end lifestyle amenities, 
          and exclusive entry to premier dining, destinations, entertainment, and wellness. Enhance every moment of your journey 
          with tailored privileges crafted for those who expect nothing less than the best.
        </HeroDescription>
        <CTAButtonGroup>
          <CTAButtonPrimary onClick={handleLaunchApp}>
            Explore VIP Benefits →
          </CTAButtonPrimary>
          <CTAButtonSecondary onClick={handleScheduleCall}>
            Request Access
          </CTAButtonSecondary>
        </CTAButtonGroup>
      </HeroContent>
    </HeroContainer>
  );

};

export default HeroSection;
