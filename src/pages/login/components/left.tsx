export function Left() {
  return (
    <div className="max-w-3xl w-full px-6 text-center space-y-10">
      <div className="flex flex-col items-center gap-3">
        <p className="text-primary text-4xl">Task Master</p>
        <p className="text-foreground text-lg">
          Task Master é um sistema de gerenciamento de usuarios e tarefas, em que os administradores
          podem gerir tarefas, usuarios e os seus niveis de acesso
        </p>
      </div>

      <p className="text-sm text-zinc-500">
        Não é possivel o cadastro autonomo de usuarios, {" "}
        apenas o super admin pode cadastrar usuarios, {" "}
        <br />
        caso não tenha uma conta entre como super admin e cadastre-se, {" "}
        <br />
        email:{" "}
        <span className="text-foreground underline">
          kemalanduar@gmail.com
        </span>{" "}
        password: {" "}
        <span className="text-foreground underline">
          1234
        </span>
      </p>
    </div>
  );
}
