const CheckboxInput = ({name , className}) => {
  return (
    <input
      type="checkbox"
      name={name}
      id={name}
      className={"hidden " + className}
    />
  )
}

export default CheckboxInput