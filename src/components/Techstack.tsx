import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import { TECHSTACK_LABELS } from "@/constants/texts";

import TechstackList from "@/components/TechstackList";

const Techstack = () => {
  const [isContainerToggled, setIsContainerToggled] = useState<boolean>(false);

  const List = TechstackList();

  return (
    <section id="techstack" aria-labelledby="techstack-header">
      <button
        id="techstack-toggle"
        className={isContainerToggled ? "toggled" : "untoggled"}
        onClick={() => setIsContainerToggled(!isContainerToggled)}
        aria-expanded={isContainerToggled}
        aria-controls="techstack-content">
        <b>
          {isContainerToggled ? TECHSTACK_LABELS.HEADER.HIDE : TECHSTACK_LABELS.HEADER.SEE}{" "}
          {TECHSTACK_LABELS.HEADER.MAIN}
        </b>
        {isContainerToggled ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      <div
        id="techstack-content"
        className={isContainerToggled ? "toggled" : "untoggled"}
        aria-hidden={!isContainerToggled}>
        {List.map((category) => (
          <div className="techstack-category" key={category.key}>
            <b>{category.label}</b>
            <div className="techstack-items">
              {category.list.map((item) => (
                <div key={item.key}>
                  {item.icon}
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techstack;
