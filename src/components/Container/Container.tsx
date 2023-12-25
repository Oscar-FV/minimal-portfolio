import { ReactNode } from "react";

interface ContainerProps{
    children: ReactNode;
    className?: string;

}

const Container = ( {children, className}: ContainerProps ) => {
  return (
    <div className={` py-5 min-h-screen ${className}`} >
      
        {children}

    </div>
  )
}

export default Container
