import { Metadata } from "next";
import { Keynoters } from "components/keynoters";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Sessions",
};

export default async function KeynotersPage() {
  return (
    <>
      <Keynoters />
      <div className="h-12"></div>
    </>
  );
}
