import React from 'react';

import { storiesOf } from '@storybook/react';

import TeamMembers from '../components/team-members';

const team = [
  { name: 'Ian Worrell', intro: 'a veteran to the bitcoin industry who began as a miner and trader and moved into blockchain applications in 2013.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Jose Aguinaga', intro: 'this is an intro.', bio: 'josé is a web engineer with multiple years of experience in javascript related technologies and software engineering. having worked for different startups in various cities across the world like zürich, san francisco, méxicocity, and bali, josé has developed an insider’s understanding of the startup culture within the fintech and blockchain ecosystem.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Connor', intro: 'a blockchain engineer, who has experience not only in the blockchain industry for some years, but also the cyber security industry.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Joost', intro: 'studied international business with a specialization in branding and marketing.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Ash', intro: 'brings 8 years creative experience working on brand development, digital design and creative consultancy.', bio: 'this is the bio.', linkedin: 'https://linkedin.com/in/' },
  { name: 'Kyle', intro: 'A blockchain engineer, developing Ethereum Dapps for various projects since early 2016.', bio: 'This is the bio.', linkedin: 'https://linkedin.com/in/' },
];

storiesOf('Version 2', module)
  .add(
    'TeamMembers',
    () => <TeamMembers team={team} />
  );
