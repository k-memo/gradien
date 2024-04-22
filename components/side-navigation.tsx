import Image from "next/image";

export interface SideNavigationItem {
  name: string;
  icon: typeof Image;
}

export default function SideNavigation() {
  return (
    <nav className="circular-container">
      <div className="item">TEST1</div>
      <div className="item">TEST2</div>
      <div className="item">TEST3</div>
      <div className="item">TEST4</div>
    </nav>
  );
}
