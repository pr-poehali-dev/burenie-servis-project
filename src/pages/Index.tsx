
import Layout from "@/components/Layout";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PartnersSection from "@/components/home/PartnersSection";
import CertificatesSection from "@/components/home/CertificatesSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <CertificatesSection />
      <PartnersSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
