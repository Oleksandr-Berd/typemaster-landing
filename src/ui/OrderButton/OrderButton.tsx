import * as SC from "./OrderButtonStyled"
import { PropStyle } from '../../utils/types';


const OrderButton: React.FC<PropStyle> = ({ location }) => {
  return (
    <div>
      <SC.LinkWrapper location={location}>
        <a
          href="https://portfolio-aleks-berd.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          pre-order now
        </a>
      </SC.LinkWrapper>
    </div>
  );
};
 
export default OrderButton;