import { Left } from "./components/left";
import { Right } from "./components/right";

export function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-pattern">
      <Left/>
      <Right/>
    </div>
  );
}
