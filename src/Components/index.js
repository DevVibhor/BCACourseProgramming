// src/Components/index.js  ← Replace your current file with EXACTLY this

import React from 'react';

// Lazy-load every screen to break circular dependencies and catch errors
const Home = React.lazy(() => import('./Home/Home'));
const CodeView = React.lazy(() => import('./CodeView/CodeView'));
const Menubar = React.lazy(() => import('./Menubar/Menubar'));
const Compiler = React.lazy(() => import('./Compiler/Compiler'));
const Memes = React.lazy(() => import('./Memes/Memes'));
const Blog = React.lazy(() => import('./Blog/Blog'));
const Interview = React.lazy(() => import('./Interview/Interview'));
const ContentView = React.lazy(() => import('./ContentView/ContentView'));
const Sem = React.lazy(() => import('./Sem/Sem'));
const ListItems = React.lazy(() => import('./Sem/ListItems'));
const CarouselCardItem = React.lazy(() => import('./Home/CarouselCardItem'));
const MCQ = React.lazy(() => import('./MCQ/MCQ'));
const Ebooks = React.lazy(() => import('./Ebooks/Ebooks'));
const EbookPreview = React.lazy(() => import('./Ebooks/EbookPreview'));
const Semester6 = React.lazy(() => import('./Sem/Semester6'));
const SupportUs = React.lazy(() => import('./SupportUs/SupportUs'));

export {
  Home,
  CodeView,
  Menubar,
  Compiler,
  Memes,
  Blog,
  Interview,
  ContentView,
  Sem,
  ListItems,
  CarouselCardItem,
  MCQ,
  Ebooks,
  EbookPreview,
  Semester6,
  SupportUs,
};
