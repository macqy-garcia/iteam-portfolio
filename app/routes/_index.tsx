import type { MetaFunction } from "@remix-run/node";
import Card from "~/components/Card";
import FooterMenu from "~/components/FooterMenu";
import RoundedButton from "~/components/RoundedButton";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to iTeam" },
    { name: "description", content: "Talent Outsourcing" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <head className="flex justify-between p-5">
        <h1 className="hidden">iTeam Talen Outsourcing</h1>
        <div>iTeam</div>
        <nav>
          <ul className="flex items-center gap-5">
            <li>Services</li>
            <li>Jobs</li>
            <li>Products</li>
            <li>Tutorials</li>
            <li>Become an Agent</li>
            <li>Login | Join</li>
          </ul>
        </nav>
      </head>
      <section className="w-full h-72 flex flex-col items-center justify-center gap-4 bg-red-200/20">
        <h2 className="text-2xl font-bold tracking-wide">Services</h2>
        <p>
          Discover and purchase services from talented independents around the
          world
        </p>
        <button className="flex items-center gap-2 border px-4 py-3 text-sm rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>

          <p>How it Works</p>
        </button>
      </section>
      <section className="flex bg-slate-50">
        <aside className="flex py-4 gap-4 mx-auto max-w-4xl items-center justify-center w-full">
          <div className="p-2 flex-1 gap-2 flex items-center w-full border rounded text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              className="font-thin bg-transparent outline-none"
              placeholder="Search"
            />
          </div>
          <div className="p-2 border rounded flex items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
              />
            </svg>

            <span className="text-slate-400 font-thin">All categories</span>
          </div>
          <div className="p-2 border rounded flex items-center gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <span className="text-slate-400 font-thin">Filters</span>
          </div>
        </aside>
      </section>
      <section className="w-full h-full bg-zinc-50">
        <div className="flex flex-wrap gap-5 h-full w-full grid-cols-4 mx-auto max-w-4xl">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex items-center max-w-4xl justify-between mx-auto w-full text-[10px] py-10">
          <RoundedButton>←</RoundedButton>
          <div className="flex gap-3">
            <RoundedButton>1</RoundedButton>
            <RoundedButton>2</RoundedButton>
            <RoundedButton>3</RoundedButton>
            <RoundedButton>...</RoundedButton>
            <RoundedButton>153</RoundedButton>
            <RoundedButton>154</RoundedButton>
            <RoundedButton>155</RoundedButton>
          </div>
          <RoundedButton>→</RoundedButton>
        </div>
      </section>
      <footer className=" py-10 bg-zinc-50">
        <div className="flex w-full max-w-4xl mx-auto">
          <div className="flex-1 flex flex-col gap-3">
            <p>iTeam</p>
            <p className="max-w-xs text-xs">
              The iTeam Inc. dba iTeam.com is a company registered in the
              Philippines with Company Reg. No. CS201738408
            </p>
            <div className="flex items-center gap-2">
              <div className="cursor-pointer h-7 w-7 bg-black rounded-full " />
              <div className="cursor-pointer h-7 w-7 bg-black rounded-full " />
              <div className="cursor-pointer h-7 w-7 bg-black rounded-full " />
              <div className="cursor-pointer h-7 w-7 bg-black rounded-full " />
              <div className="cursor-pointer h-7 w-7 bg-black rounded-full " />
            </div>
          </div>
          <div className="flex justify-center gap-20">
            <FooterMenu
              title="Marketplace"
              list={["Services", "Jobs", "Products"]}
            />
            <FooterMenu
              title="For Agents"
              list={["Become an Agent", "Agent dashboard"]}
            />
            <FooterMenu
              title="Company"
              list={[
                "About iTeam",
                "Help center",
                "Terms & conditions",
                "Privacy policy",
                "Contract us",
              ]}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
