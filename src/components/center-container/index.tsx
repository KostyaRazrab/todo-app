import React, { ReactNode } from "react";
import './style.scss'

type Props = {
  children: ReactNode;
};

export default function CenterContainer(props: Props) {
  return <div className="center-container">{props.children}</div>;
}
