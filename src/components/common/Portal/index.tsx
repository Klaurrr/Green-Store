import { FC } from "react";
import { createPortal } from "react-dom";

import { IPortalProps } from "./Portal.props";

const Portal: FC<IPortalProps> = ({ children, node }) => {
      return createPortal(children, node);
};

export default Portal;
