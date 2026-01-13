import React from 'react';

const ContactInfo = ({ variant = 'default' }) => {
  const contactData = [
    {
      icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'hola@ejemplo.com',
      href: 'mailto:hola@ejemplo.com'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: '+34 123 456 789',
      href: 'tel:+34123456789'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
      label: 'Madrid, España',
      href: '#'
    }
  ];

  if (variant === 'grid') {
    return (
      <div className="space-y-4">
        {contactData.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-moda-rose rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-moda-pink-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <span className="text-moda-pink-dark">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="space-y-2">
        {contactData.map((item, index) => (
          <p key={index} className="text-moda-gray flex items-center">
            <svg className="w-4 h-4 mr-2 text-moda-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            {item.label}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default ContactInfo;
