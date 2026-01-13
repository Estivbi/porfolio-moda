import React from 'react';

const SocialLinks = ({ variant = 'default' }) => {
  const socials = [
    {
      name: 'Tiktok',
	  icon: 'M19.318 8.05a4.85 4.85 0 0 1-3.54-1.46v8.265a4.82 4.82 0 0 1-4.82 4.82 4.82 4.82 0 0 1-4.82-4.82 4.82 4.82 0 0 1 4.82-4.82c.55 0 1.085.1 1.59.275V8.016a7.64 7.64 0 0 0-1.59-.16 7.6 7.6 0 1 0 7.6 7.6v-5.84a9.87 9.87 0 0 0 5.85-9.07V8.05h-3.1z'	
	},
    {
      name: 'LinkedIn',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
    },
    {
      name: 'Instagram',
      icon: 'M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z'
    }
  ];

  const containerClass = variant === 'footer' 
    ? 'flex space-x-4' 
    : 'flex space-x-4';
  
  const buttonClass = variant === 'footer'
    ? 'w-10 h-10 bg-moda-rose rounded-full flex items-center justify-center hover:bg-moda-pink transition-colors'
    : 'w-12 h-12 bg-moda-rose rounded-full flex items-center justify-center hover:bg-moda-pink transition-colors';

  const iconClass = variant === 'footer'
    ? 'w-5 h-5 text-moda-dark'
    : 'w-6 h-6 text-moda-pink-dark';

  return (
    <div className={containerClass}>
      {socials.map((social) => (
        <a 
          key={social.name}
          href="#" 
          className={buttonClass}
          title={social.name}
        >
          <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
            <path d={social.icon} />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
