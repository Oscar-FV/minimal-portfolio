import { ReactNode } from "react";

interface ContainerProps{
    children: ReactNode;
    className?: string;
    bgColor?: string;
}

const Container = ( {children, className, bgColor}: ContainerProps ) => {
  return (
    <section className={` py-5 ${className}`} data-bgcolor={bgColor}>
      
        {children}

    </section>
  )
}

export default Container
