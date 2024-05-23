'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, lazy } from 'react';
import { SlPlus } from 'react-icons/sl';
import { FiBookmark } from 'react-icons/fi';
import { RiInformationLine } from 'react-icons/ri';

const CircleMenu = lazy(() =>
  import('react-circular-menu').then(module => ({
    default: module.CircleMenu,
  })),
);
const CircleMenuItem = lazy(() =>
  import('react-circular-menu').then(module => ({
    default: module.CircleMenuItem,
  })),
);

export interface SideNavigationItem {
  name: string;
  icon: typeof Image;
}
export default function SideNavigation() {
  return (
    <div className="circular-navigation">
      <Suspense fallback={<div>Loading...</div>}>
        <CircleMenu
          startAngle={-150}
          rotationAngle={180} // Keep as it is for props handling
          itemSize={2}
          radius={5}
          rotationAngleInclusive={false}
        >
          <CircleMenuItem className="link" tooltip="Saved">
            <Link href={'/savedPalettes'}>
              <FiBookmark />
            </Link>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Generate" className="link">
            <Link href={'/generate'}>
              <SlPlus />
            </Link>
          </CircleMenuItem>
          <CircleMenuItem tooltip="Information" className="link">
            <Link href={''}>
              <RiInformationLine />
            </Link>
          </CircleMenuItem>
        </CircleMenu>
      </Suspense>
    </div>
  );
}
