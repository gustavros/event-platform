import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { ReactIcon } from "../components/ReactIcon";
import { useCreateSubscriberMutation } from "../graphql/generator";
import Group from "../assets/group.png";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto xl:flex-col xl:mt-10 ">
          <div className="max-w-[640px] xl:p-4  ">
            <Logo />

            <h1 className="mt-8 text-[2.5rem] leading-tight sm:text-[5rem]  xl:text-[1.8rem] xl:mt-4   ">
              Construa uma{" "}
              <strong className="text-blue-500  ">aplicação completa</strong>,
              do zero, com <strong className="text-blue-500   ">React</strong>
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed xl:mb-4 ">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidadedes do mercado.
            </p>
          </div>

          <div>
            <ReactIcon />
          </div>

          <div className="p-8 bg-gray-700 border border-gray-500 rounded xl:max-w-[640px] xl:w-[96vw] ">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              action=""
              className="flex flex-col gap-2 w-full "
            >
              <input
                type="text"
                placeholder="Seu nome completo"
                className="bg-gray-900 rounded px-5 h-14"
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="bg-gray-900 rounded px-5 h-14"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>

        <img src={Group} alt="" className="mt-10" />
      </div>
    </div>
  );
}
