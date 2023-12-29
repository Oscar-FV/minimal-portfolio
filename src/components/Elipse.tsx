interface ElipseProps {
    className ?: string
}

const Elipse = ( { className }: ElipseProps ) => {
  return (
    <div>
    <svg className={className} width="50" height="50" viewBox="0 0 200 400" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 193C200 310.5 200 245.5 200 400C89.5431 400 0 310.457 0 200C0 89.5431 89.5431 0 200 0C200 93 200 82.5431 200 193Z" fill="white"/>
    </svg>
    </div>
  )
}

export default Elipse
