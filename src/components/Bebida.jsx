import useBebidas from "../hooks/useBebidas"

const Bebida = ({bebida}) => {
const { bebidas} = useBebidas()
  return (
    <div>
      {bebida.strDrink}
    </div>
  )
}

export default Bebida
