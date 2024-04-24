'use client';
import Image from 'next/image';
import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from 'react-circular-menu';

export interface SideNavigationItem {
  name: string;
  icon: typeof Image;
}

export default function SideNavigation() {
  return (
    <div className="circular-navigation">
      <CircleMenu
        startAngle={-45}
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
          tooltip="Email"
          tooltipPlacement={TooltipPlacement.Right}
        >
          <p>ITEM0</p>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
          <p>ITEM1</p>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Location">
          <p>ITEM2</p>
        </CircleMenuItem>
        <CircleMenuItem tooltip="Info">
          <p>ITEM3</p>
        </CircleMenuItem>
      </CircleMenu>
    </div>
  );
}
