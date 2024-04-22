import Logo from "../../components/logo";
import "./style/application.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
