import Logo from "../../components/logo";
import "./style/application.scss";

export default function Home() {
  return (
    <main>
      <div className={"landing-page-greeting"}>
        <h1>
          GR
          <Logo />
          DIEN
        </h1>
        <p className={"sub"}>FIND YOUR COLORPALETTE</p>
      </div>
    </main>
  );
}
