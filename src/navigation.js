import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/#pricing'),
    },
    // {
    //   text: 'For creators',
    //   href: getPermalink('/for-content-creators'),
    // },
    {
      text: 'Contact sales',
      href: getPermalink('/contact'),
    },
  ],
  actions: [

    { text: 'Offer a deal', href: getPermalink('/offer-a-deal') }]
};

export const footerData = {
  links: [
    {
      title: 'For businesses',
      links: [
        { text: 'Get started', href: '/' },
        { text: 'Features', href: '/#features' },
        // { text: 'Security', href: '#' },
        // { text: 'Team', href: '#' },
        // { text: 'Enterprise', href: '#' },
        // { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '/#pricing' },
        // { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'For creators',
      links: [
        { text: 'Home', href: '/for-content-creators' },
        { text: 'Partners', href: '#' },
        // { text: 'Atom', href: '#' },
        // { text: 'Electron', href: '#' },
        // { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact us', href: '/contact' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },

  ],
  footNote: `
    M Media Group · All rights reserved.
  `,
};
