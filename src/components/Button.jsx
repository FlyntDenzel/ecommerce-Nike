const Button = ({label, iconURL}) => {
  return (
    <button>
       {label}

       <img src={iconURL} alt="" />
    </button>
  )
}

export default Button