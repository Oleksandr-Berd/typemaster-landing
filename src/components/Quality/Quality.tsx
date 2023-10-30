import * as SC from "./QualityStyled"

import icon1 from "../../assets/images/quality_icon1.svg"
import icon2 from "../../assets/images/quality_icon2.svg";
import icon3 from "../../assets/images/quality_icon3.svg";
import icon4 from "../../assets/images/quality_icon4.svg";


const Quality = () => {
    return (
      <SC.CommonWrapper>
        <SC.Item>
          <img src={icon1} alt="" />
          <h3>highly compatible</h3>
          <p>
            Easy to use and works well with all major computer brands, gaming
            consoles and mobile devices. Plug & play, no installation or driver
            needed.
          </p>
        </SC.Item>
        <SC.Item>
          <img src={icon2} alt="" />
          <h3 style={{marginBottom:"0"}}>wireless </h3>
          <h3>with bluetooth</h3>
          <p>
            Powerful 2.4G RF technology allows you to connect the cordless
            keyboard from up to 30ft away. Simply plug the unifying receiver
            into your computer.
          </p>
        </SC.Item>
        <SC.Item>
          <img src={icon3} alt="" />
          <h3>high capacity battery</h3>
          <p>
            Equipped with a long-lasting built-in battery, you’ll never have to
            spend a dime on replaceable ones. Enjoy 40 hours of usage time
            between charges.
          </p>
        </SC.Item>
        <SC.Item>
          <img src={icon4} alt="" />
          <h3>rgb backlit modes</h3>
          <p>
            Choose from 4 backlight brightness levels and adjustable breathing
            speed. Each key glows intensely in the dark and helps you type in
            low light conditions.
          </p>
        </SC.Item>
      </SC.CommonWrapper>
    );
}
 
export default Quality;