import React from 'react';
import Head from 'next/head';
import DrawerAppBar from '../components/drawer-appbar';
import Education from '../components/education';
import About from '../components/about';
import Experience from '../components/experience';
import Skills from '../components/skills';

export default function Home() {
  const content = (
    <>
      <a name="me">
        <About />
      </a>
      <a name="experience">
        <Experience />
      </a>
      <a name="skills">
        <Skills />
      </a>
      <a name="education">
        <Education />
      </a>
    </>
  );

  return (
    <>
      <Head>
        <title> Hello! </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <DrawerAppBar
          content={content}
        />
      </div>
    </>
  );
}
