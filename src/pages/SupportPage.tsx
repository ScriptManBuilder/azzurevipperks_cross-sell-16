import React, { useState } from 'react';
import {
  SupportContainer,
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  PhoneIcon,
  AvailabilityText,
  ActionButtons,
  ActionButton,
  HelpSection,
  HelpTitle,
  HelpGrid,
  HelpCard,
  HelpIcon,
  HelpCardTitle,
  HelpCardDescription,
  FAQSection,
  FAQSectionTitle,
  FAQSectionDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/SupportPage.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is your typical response timeframe?',
      answer: 'Our elite support specialists reply within 60 minutes during operating hours (Monday-Friday, 9 AM - 9 PM EST). Diamond-tier members enjoy around-the-clock priority assistance with instant support through their private helpline.'
    },
    {
      question: 'How can I utilize my premium privileges?',
      answer: 'After membership activation, you\'ll obtain high-level access credentials to your exclusive member dashboard. Arrange luxury bookings, receive private event invites, utilize personal assistance services, and monitor your elite experiences within one sophisticated platform.'
    },
    {
      question: 'Is membership level advancement possible?',
      answer: 'Certainly. Members may elevate from Elite to Platinum or Diamond categories whenever desired. Reach out to your personal account specialist to discover amplified advantages including unrestricted assistance, premium travel enhancements, and exclusive event entry.'
    },
    {
      question: 'Which assistance services come with membership?',
      answer: 'Your dedicated assistant manages dining bookings at premier locations, high-end travel coordination, private retail sessions, celebration arrangements, and life management. Diamond-tier members get a personal lifestyle specialist accessible around-the-clock.'
    },
    {
      question: 'How are private events accessed?',
      answer: 'Get notifications straight to your member dashboard and inbox. Occasions feature exclusive runway shows, gallery unveilings, sommelier-hosted wine experiences, and private performances. Confirm through your assistant for effortless VIP admission.'
    },
    {
      question: 'Can membership be transferred or temporarily suspended?',
      answer: 'Memberships remain non-transferable to uphold exclusivity standards. Though you may temporarily suspend your membership for up to half a year per annum. Consult your account specialist regarding arrangements that maintain your member privileges and standing.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const helpTopics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Membership Onboarding',
      description: 'Support for enabling your elite membership and unlocking premium privileges'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Concierge Services',
      description: 'Dedicated assistance for bookings, destinations, occasions, and life coordination'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z"/>
        </svg>
      ),
      title: 'Exclusive Access',
      description: 'Guidance for securing elite experiences, private gatherings, and premium locations'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49c.21.37.62.58 1.04.58.16 0 .32-.04.48-.11L21.11 12c.81-.23 1.28-1.05 1.07-1.85z"/>
        </svg>
      ),
      title: 'Travel & Hotels',
      description: 'High-end journey planning, premier class enhancements, and elite accommodation reservations'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'Membership Tiers',
      description: 'Inquiries regarding Elite, Platinum, and Diamond level advantages and advancement'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Privacy & Security',
      description: 'Details about safeguarding your membership and ensuring confidentiality'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = `mailto:${process.env.REACT_APP_EMAIL_SUPPORT}`;
  };

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <Header />
      <SupportContainer>
        <SupportHero>
          <div>
            <HeroImageWrapper>
              <HeroImage src="/heroSupport3.png" alt="Customer Support" />
            </HeroImageWrapper>
            <HeroContent>
              <HeroTitle>Elite Support & Member Assistance</HeroTitle>
              <HeroDescription>Our committed specialists are ready to enhance each dimension of your premium lifestyle journey.</HeroDescription>
            
            <ContactInfo>
              <PhoneIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </PhoneIcon>
              <div>
                <PhoneNumber>{process.env.REACT_APP_PHONE_DISPLAY}</PhoneNumber>
                <AvailabilityText>Available Monday - Friday, 9 AM - 6 PM EST</AvailabilityText>
              </div>
            </ContactInfo>
            
            <ActionButtons>
              <ActionButton onClick={handleEmailClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Support
              </ActionButton>
              <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Contact Form
              </ActionButton>
              <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
                </svg>
                Request Refund
              </ActionButton>
            </ActionButtons>
          </HeroContent>
          </div>
        </SupportHero>
        
        <HelpSection>
          <HelpTitle>How Can We Help You Today?</HelpTitle>
          <HelpGrid>
            {helpTopics.map((topic, index) => (
              <HelpCard key={index} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                <HelpIcon>{topic.icon}</HelpIcon>
                <HelpCardTitle>{topic.title}</HelpCardTitle>
                <HelpCardDescription>{topic.description}</HelpCardDescription>
              </HelpCard>
            ))}
          </HelpGrid>
        </HelpSection>

        <FAQSection>
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQSectionDescription>Quick answers to common support questions</FAQSectionDescription>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} $isOpen={openFAQIndex === index}>
                  <span>{faq.question}</span>
                  <FAQIcon $isOpen={openFAQIndex === index}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </FAQIcon>
                </FAQQuestion>
                {openFAQIndex === index && (
                  <FAQAnswer>
                    {faq.answer}
                    <div style={{ marginTop: '1rem' }}>
                      <ActionButton 
                        onClick={handleContactClick} 
                        style={{ 
                          fontSize: '0.9rem', 
                          padding: '0.6rem 1.25rem',
                          display: 'inline-flex'
                        }}
                      >
                        Contact Support
                      </ActionButton>
                    </div>
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </SupportContainer>
      <Footer />
    </>
  );
};

export default SupportPage;
