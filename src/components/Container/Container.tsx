import { ReactNode } from "react";

interface ContainerProps{
    children: ReactNode;
    className?: string;

}

const Container = ( {children, className}: ContainerProps ) => {
  return (
    <div className={`container py-5 ${className}`} >
      
        {children}

    </div>
  )
}

export default Container
