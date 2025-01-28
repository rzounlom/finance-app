import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen">
      <div className="lg:hidden h-[69.75px] bg-gray-900 text-white flex items-center justify-center">
        <Image src="/Logo.png" height={22} width={121} alt="logo" />
      </div>
      <div className="flex h-[calc(100%_-_69.75px)] lg:h-[100%] items-center justify-center">
        <div className="hidden lg:block h-[100%] w-[41%] rounded-md p-[20px]">
          <div className="relative h-[100%] w-[100%]">
            <Image
              src="/Sidebar.png"
              alt="Sidebar"
              sizes="100%"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
