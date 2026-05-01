"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Smile, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="large"
        background="floatingGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Team",          id: "team"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Areeba Dental Care"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "gradient-bars"}}
      logoText="Areeba Dental Care"
      description="Expert dental procedures in Rahim Yar Khan. Highly skilled care for the whole family, recommended by our patients."
      buttons={[
        {
          text: "Book Appointment",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+923006715905"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/revealing-shot-orthodontic-chair-with-nobody-teeth-x-ray-images-modern-display_482257-14035.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Experience Excellence in Dentistry"
      description="At Areeba Dental Care, our female doctors are highly skilled and well-experienced. We provide deep knowledge in all dental procedures to ensure you get the best treatment in town."
      imageSrc="http://img.b2bpic.net/free-photo/happy-female-dentist-pointing-teeth-x-ray-clinic_23-2147879289.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "General Dentistry",          description: "Routine checkups, cleaning, and preventative care.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-medical-dentistry-tooth-instruments-modern-stomatolog-orthodontic-bright-office-with-nobody-it_482257-2311.jpg",          imageAlt: "General Dentistry"},
        {
          title: "Orthodontics",          description: "Braces and aligners for a straighter, healthier smile.",          imageSrc: "http://img.b2bpic.net/free-photo/female-dentist-treats-patients-teeth-stomatologist-working-with-professional-equipment_169016-67285.jpg",          imageAlt: "Orthodontics"},
        {
          title: "Cosmetic Care",          description: "Professional teeth whitening and smile makeovers.",          imageSrc: "http://img.b2bpic.net/free-photo/female-doctor-sitting-beside-patient-dental-office_651396-3411.jpg",          imageAlt: "Cosmetic Care"},
      ]}
      title="Our Services"
      description="Comprehensive dental care for your perfect smile."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "5.0",          title: "Patient Rating",          description: "Average rating from reviews",          icon: Star,
        },
        {
          id: "2",          value: "1000+",          title: "Smiles Created",          description: "Happy patients served",          icon: Smile,
        },
        {
          id: "3",          value: "10+",          title: "Years of Care",          description: "Experience in the clinic",          icon: Award,
        },
      ]}
      title="Trusted by the Community"
      description="Our commitment to quality dental care."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      members={[
        {
          id: "1",          name: "Dr. Areeba",          role: "Head Dentist",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-attractive-doctor-white-coat-with-stethoscope-posing-hospital_627829-13970.jpg"},
        {
          id: "2",          name: "Dr. Sarah",          role: "Orthodontist",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-female-doctor-medical-shirt-smiling-covid-19-health-hospital-virus-color-nurse_179666-24306.jpg"},
        {
          id: "3",          name: "Dr. Fatima",          role: "General Dentist",          imageSrc: "http://img.b2bpic.net/free-photo/confident-doctor-looking-camera_23-2147771698.jpg"},
      ]}
      title="Meet Our Doctors"
      description="Highly experienced female dental experts dedicated to your health."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Anonymous",          role: "Patient",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-dark-skinned-male-with-afro-hairstyle-keeps-hand-head-laughs-as-has-fun_273609-8514.jpg"},
        {
          id: "2",          name: "Asad Javed",          role: "Patient",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/outdoor-view-happy-lovely-young-female-fitness-trainer-prepares-master-class-involved-active-training-likes-going-sport-better-vitality-flexibility-active-lifestyle_273609-2200.jpg"},
        {
          id: "3",          name: "Engineer Hamza",          role: "Patient",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-ethnic-male-with-curly-hair-evening_23-2148203737.jpg"},
        {
          id: "4",          name: "Patient 4",          role: "Patient",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-lady-tilts-head-has-foxy-hair-rejoices-something-positive-wears-casual-clothes-isolated-white-wall-free-space-left-side-your-promotion-advert_273609-29465.jpg"},
        {
          id: "5",          name: "Patient 5",          role: "Patient",          company: "Local",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-smiling-young-woman-kitchen-cooking-chopping-zucchini-holding-vegetables_1258-197977.jpg"},
      ]}
      kpiItems={[
        {
          value: "5.0",          label: "Avg Rating"},
        {
          value: "100%",          label: "Recommended"},
        {
          value: "3",          label: "Recent Reviews"},
      ]}
      title="What Our Patients Say"
      description="Patients trust our experience and professionalism."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",          title: "What are your opening hours?",          content: "We are open daily until 10 PM."},
        {
          id: "2",          title: "Where is the clinic located?",          content: "We are at Sui gas choak, Rahim Yar Khan."},
        {
          id: "3",          title: "How can I book an appointment?",          content: "Call us at +92 300 6715905 to book your slot."},
      ]}
      title="Frequently Asked Questions"
      description="Common inquiries about our dental services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Book Your Visit Today"
      description="Get in touch with us for your dental needs."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone Number",          required: true,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/smiling-doctor-using-desktop-pc_107420-65116.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "About",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Location",          items: [
            {
              label: "Sui Gas Choak, Rahim Yar Khan",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Areeba Dental Care"
      bottomRightText="All rights reserved"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}