import React from 'react'
import { WorkHandling } from '../../../pages/Home/WorkHandling';
import { OurTestimonial } from './OurTestimonial';
import { Footer } from '../../Footer/Footer';

export const DefaultBottomLayout = () => {
  return (
    <div>
      <WorkHandling />
      <OurTestimonial />
      <Footer />
    </div>
  );
}
