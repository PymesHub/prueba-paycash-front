import Actions from "@/src/components/Actions/Actions";
import Body from "@/src/components/Body/Body";
import TableUsers from "@/src/components/TableUsers/TableUsers";

const Page = () => {
  return (
    <main className=" text-foreground bg-background">
      <section className="w-full flex h-full items-center justify-center">
        <Body>
          <div className="flex flex-col gap-6 lg:flex-row justify-between">
            <Actions />
          </div>
          <TableUsers />
        </Body>
      </section>
    </main>
  );
};

export default Page;
