import { Link } from "react-router-dom"

const Button = () => {
  return (
    <div>
      <Link to="/signUp" className="text-white bg-[#337eff] py-2 px-6 rounded">
        Get started
      </Link>
    </div>
  )
}

export default Button