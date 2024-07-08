import React from 'react'
import { OurTestimonial } from '../../components/AccordionComponent/Common/OurTestimonial'
import { Footer } from '../../components/Footer/Footer'
import { PageHeader } from '../../components/Header/PageHeader'
import { ContactForm } from './ContactForm'

export const Contact = () => {
  return (
    <div>
      <PageHeader pageTitle={"Contact Us"} pages={["Home", "Contact"]} />
      <ContactForm />
      <OurTestimonial />
      <Footer />
    </div>
  );
}
