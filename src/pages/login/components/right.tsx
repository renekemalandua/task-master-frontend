import { FormEvent } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Api } from "../../../libs/axios";

export function Right() {

  async function handleSubmit(event){
    event.preventDefault();

    console.log("Click");

    const data = new FormData(event.currentTarget);
    const inputEmailValue = data.get('email')?.toString();
    const inputPasswordValue = data.get('password')?.toString();

    if(!inputEmailValue || !inputPasswordValue){
      alert("Preencha todos os Campos!")
      return false;
    }

    console.log(inputEmailValue);
    console.log(inputPasswordValue);
    try {

      const response = await Api.post("/users/login",{email:inputEmailValue, password:inputPasswordValue});
      ///login(response.data.userlogin);
      console.log(response)
      alert('Usuario Logado com sucesso!');
      //Navigate("/");
    } catch (error) {
      console.log(error);
      //alert(error.response.data.message);
      return false
    }

}

  return (
    <form onSubmit={(event)=> handleSubmit(event)} className=" border mx-16 items-center rounded-2xl gap-5 p-10 flex flex-col justify-around shadow-shape">
      <p className="e text-4xl">Sign In</p>
      
      <Input
        type="email"
        name="email"
        placeholder="insert your email"
      />

      <Input
        type="password"
        name="password"
        placeholder="insert your password"
      />

      <span className="text-sm text-zinc-500 flex justify-end self-end">
        <a className="text-zinc-300 underline" href="#">
          Forgot your password?
        </a>
      </span>

      <Button type="submit">Login</Button>
    </form>
  );
}
