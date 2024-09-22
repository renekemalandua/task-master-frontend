import { ArrowDown, ArrowUp } from "lucide-react";

type IProps = {
    isUp: boolean
}

export default function Rating({isUp}: IProps) {

  return (
    <div>
      {isUp?(
        <ArrowUp className="text-green-600"/>
      ):(
        <ArrowDown className="text-red-600"/>
      )}
    </div>
  )
}
