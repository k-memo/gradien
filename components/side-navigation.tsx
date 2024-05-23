'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from 'react-circular-menu';
import { SlPlus } from 'react-icons/sl';
import { FiBookmark } from 'react-icons/fi';
import { RiInformationLine } from 'react-icons/ri';

export interface SideNavigationItem {
  name: string;
  icon: typeof Image;
}

export default function SideNavigation() {
  return (
    <div className="circular-navigation">
      <CircleMenu
        startAngle={-150}
        rotationAngle={180}
        itemSize={2}
        radius={5}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert('Clicked the item')}
          className="link"
          tooltip="Saved"
          tooltipPlacement={TooltipPlacement.Right}
        >
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
    </div>
  );
}
