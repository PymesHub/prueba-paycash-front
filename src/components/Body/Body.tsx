import { FCWC } from "@/src/utils/FCWC";

const Body: React.FC<FCWC> = ({ children }) => {
  return (
    <section className="w-full py-4 h-full flex flex-col gap-4">
      <h1 className="font-semibold text-2xl">Lista de usuarios</h1>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
};

export default Body;
