import { ReactNode } from "react";

interface ContainerProps{
    children: ReactNode;
    className?: string;
}

const Container = ( {children, className}: ContainerProps ) => {
  return (
    <div className={`h-[100vh] ${className}`} >
      
        {children}

    </div>
  )
}

export default Container
