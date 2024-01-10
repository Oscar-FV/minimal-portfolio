import { ReactNode } from "react";

interface ContainerProps{
    children: ReactNode;
    className?: string;
    bgColor?: string;
    textColor?: string;
}

const Container = ( {children, className, bgColor, textColor}: ContainerProps ) => {
  return (
    <section className={` py-5 ${className}`} data-bgcolor={bgColor} data-textcolor={textColor}>
      
        {children}

    </section>
  )
}

export default Container
