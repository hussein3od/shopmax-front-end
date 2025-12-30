import { Link } from "react-router-dom";
function container({children}) {
  return (
    <>
        <div className="max-w-[1400px] mx-auto p-[10px]">
            {children}
        </div>
    </>
  )
}

export default container;